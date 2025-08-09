import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser, sendEmailVerification } from './firebase';
import { toast } from 'react-toastify';
import { User } from 'lucide-react';
import Layout from '../components/Layout';
import Modal from 'react-modal';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    referrer: '',
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [referralLink, setReferralLink] = useState<string | null>(null);
  const navigate = useNavigate();

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Spain', 'Italy',
    'Netherlands', 'Belgium', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Australia',
    'New Zealand', 'Japan', 'South Korea', 'Singapore', 'India', 'Brazil', 'Mexico'
  ];

  // Input change handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  // Checkbox change handler
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, acceptedTerms: e.target.checked }));
  };

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (isProcessing) return;
  setIsProcessing(true);
  setErrors({});

    // Username validation
    const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
    if (!usernamePattern.test(formData.username) || formData.username.startsWith('_')) {
      setErrors({ username: 'Username must be 3-20 characters long and can only contain letters, digits, and underscores (no underscore at the start)' });
      setIsProcessing(false);
      return;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      setErrors({ email: 'Please enter a valid email address' });
      setIsProcessing(false);
      return;
    }

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$%&!?+]).{8,20}$/;
    if (!passwordPattern.test(formData.password)) {
      setErrors({ password: 'Password must be 8-20 characters long, contain at least one lowercase letter, one uppercase letter, one digit, and one special character ($%&!?+)' });
      setIsProcessing(false);
      return;
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      setIsProcessing(false);
      return;
    }

    // General validation for empty fields
    if (!formData.email || !formData.password || !formData.username || !formData.country) {
      setErrors({ general: 'Please fill all fields' });
      setIsProcessing(false);
      return;
    }

    // Terms acceptance validation
    if (!formData.acceptedTerms) {
      setErrors({ terms: 'You must accept the Terms, Privacy, and Income Disclaimer' });
      setIsProcessing(false);
      return;
    }

    // Referrer validation (Required if not empty)
    if (!formData.referrer.trim()) {
      setErrors({ referrer: 'Please fill in a valid Referrer Username' });
      setIsProcessing(false);
      return;
    }

     try {
    const user = await registerUser(
      formData.email,
      formData.password,
      formData.username,
      formData.country,
      formData.referrer
    );
      const constructedReferralLink = `https://10dollar.fun/?ref=${formData.username}`;
    setReferralLink(constructedReferralLink);  // <-- yahan referralLink state me save hota hai

      if (!user) {
        setErrors({ general: 'Registration failed. Please try again.' });
        toast.error('Registration failed. Please try again.');
        setIsProcessing(false);
        return;
      }

      try {
  // Attempt to send the email verification
  await sendEmailVerification(user);

  // If successful, show success message
  toast.success('We have sent you a welcome email. If it does not appear in your main inbox, please check your spam or junk folder.', {
    autoClose: 5000,
  });
} catch (verificationError) {
  // Only show a warning if it is a real issue, like network failure.
  if (verificationError.code === 'auth/network-request-failed') {
    toast.warn('Network issue: Verification email could not be sent. Please check your internet connection and try again.');
  } else {
    // Log the error for debugging purposes
    console.error('Verification error details:', verificationError);

    // Show a warning but don't confuse the user
    toast.warn('A verification email  has been not sent to your inbox. Please check your inbox and verify your email.');
  }
}


      setModalIsOpen(true);
    setIsProcessing(false);
    } catch (error: any) {
      setErrors({ general: error?.message || 'Registration failed. Please try again.' });
      toast.error(error?.message || 'Registration failed. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Join 10 Dollar Fun</h1>
              <p className="text-gray-600 mt-2">Start your journey to earning with AI tools</p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Field */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username *
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter your username"
                />
                {errors.username && <p className="text-red-600">{errors.username}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="text-red-600">{errors.email}</p>}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter your password"
                />
                {errors.password && <p className="text-red-600">{errors.password}</p>}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword}</p>}
              </div>

              {/* Country Selection */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                  Country *
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select your country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
                {errors.country && <p className="text-red-600">{errors.country}</p>}
              </div>

              {/* Referral Username (Optional) */}
              <div>
  <label htmlFor="referrer" className="block text-sm font-medium text-gray-700 mb-2">
    Referrer Username *
  </label>
  <input
    type="text"
    id="referrer"
    name="referrer"
    value={formData.referrer}
    onChange={handleInputChange}
    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.referrer ? 'border-red-500' : 'border-gray-300'}`}
    placeholder="Enter referrer username"
  />
  {errors.referrer && <p className="text-red-600">{errors.referrer}</p>}

  {/* Suggestions if referrer is blank */}
  {!formData.referrer && formData.username && (
    <div className="text-xs text-blue-600 mt-1">
      <span>Add this to invite your friends!</span>
      <div className="mt-1">
        <span className="font-semibold">Your referral link:</span>
        <div className="break-all">{`https://10dollar.fun/?ref=${formData.username}`}</div>
        <div className="mt-1 text-gray-500">
          Suggestions:
          <ul className="list-disc ml-5">
            <li>{`https://10dollar.fun/?ref=${formData.username}123`}</li>
            <li>{`https://10dollar.fun/?ref=${formData.username}_official`}</li>
            <li>{`https://10dollar.fun/?ref=${formData.username}ai`}</li>
          </ul>
        </div>
      </div>
    </div>
  )}
</div>


              {/* Terms Acceptance Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptedTerms}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="acceptTerms" className="text-sm text-gray-600">
                  I accept the <a href="/terms" className="text-blue-600">Terms</a>, <a href="/privacy" className="text-blue-600">Privacy</a>, and <a href="/income-disclaimer" className="text-blue-600">Income Disclaimer</a>.
                </label>
              </div>
              {errors.terms && <p className="text-red-600">{errors.terms}</p>}

              {/* Display errors */}
              {errors.general && <p className="text-red-600">{errors.general}</p>}

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                {isProcessing ? 'Processing...' : 'Complete Registration'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Confirmation Message */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Registration Success"
      >
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">We have sent you a welcome email. If it does not appear in your main inbox, please check your spam or junk folder.</p>
          {referralLink && (
            <div className="mb-4">
              <span className="font-semibold">Your Referral Link:</span>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="break-all text-blue-600">{referralLink}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(referralLink);
                    toast.success("Referral link copied!");
                  }}
                  className="ml-2 px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                >
                  Copy
                </button>
              </div>
            </div>
          )}
          <button
            onClick={() => {
              setModalIsOpen(false);
              navigate('/login');
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            OK
          </button>
        </div>
      </Modal>
    </Layout>
  );
};

export default Register;
