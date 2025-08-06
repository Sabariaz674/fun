import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, sendEmailVerification } from './firebase'; // Firebase functions
import { toast } from 'react-toastify'; // Import react-toastify for toasts
import { User, AlertCircle, Mail, MapPin, Users } from 'lucide-react'; // Import necessary icons
import Layout from '../components/Layout'; // Your custom Layout component
import { Link } from 'react-router-dom';  // Add this import for linking to Login page
import Modal from 'react-modal'; // For the modal popup

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    referrer: '', // Referral field
    acceptedTerms: false,  // Add acceptedTerms state
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [modalIsOpen, setModalIsOpen] = useState(false); // For showing the modal after registration
  const [isProcessing, setIsProcessing] = useState(false); // To prevent multiple form submissions
  const navigate = useNavigate();  // To navigate to login after registration

  // Country list
  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Spain', 'Italy',
    'Netherlands', 'Belgium', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Australia',
    'New Zealand', 'Japan', 'South Korea', 'Singapore', 'India', 'Brazil', 'Mexico'
  ];

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // Clear errors as user types
  };

  // Handle checkbox change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, acceptedTerms: e.target.checked }));
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent multiple form submissions
    if (isProcessing) return;

    setIsProcessing(true);

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      setIsProcessing(false);
      return;
    }

    if (formData.password.length < 6) {
      setErrors({ password: 'Password must be at least 6 characters long' });
      setIsProcessing(false);
      return;
    }

    if (!formData.email || !formData.password || !formData.username || !formData.country) {
      setErrors({ general: 'Please fill all fields' });
      setIsProcessing(false);
      return;
    }

    if (!formData.acceptedTerms) {
      setErrors({ terms: 'You must accept the Terms, Privacy, and Income Disclaimer' });
      setIsProcessing(false);
      return;
    }

    try {
      // Pass the referrer field as well
      const user = await registerUser(
        formData.email, 
        formData.password, 
        formData.username, 
        formData.country, 
        formData.referrer  // Pass referrer here
      );
      console.log('User registered successfully:', user);

      try {
        // Check if user exists before sending verification email
        if (user) {
          await sendEmailVerification(user);
          console.log('Verification email sent to:', user.email);

          // Show success message
          toast.success('A verification email has been sent to your inbox. Please check your inbox and verify your email.', {
            autoClose: 5000, // Show for 5 seconds
          });

          // Open modal informing the user to check email
          setModalIsOpen(true);

          // Redirect to login page after a small delay (if modal is closed or after a few seconds)
          setTimeout(() => {
            navigate('/login'); // Redirect to login page
          }, 3000); // Wait for 3 seconds before redirecting

        } else {
          console.error('User object is null');
          toast.error('User not found. Please try again.');
        }
      } catch (verificationError) {
        console.error('We have sent you a welcome message to your email. If you can’t find it, check your spam folder.:', verificationError);
        toast.error('We have sent you a welcome message to your email. If you can’t find it, check your spam folder After Confirmation please login.');
      } finally {
        setIsProcessing(false);  // Enable submission again after verification attempt
      }

    } catch (error) {
      console.error('Error registering user:', error);
      setErrors({ general: 'Registration failed. Please try again.' });
      toast.error('Registration failed. Please try again.');
      setIsProcessing(false);  // Enable submission again if registration fails
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
                  Referrer Username (Optional)
                </label>
                <input
                  type="text"
                  id="referrer"
                  name="referrer"
                  value={formData.referrer}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter referrer username"
                />
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
          <p className="text-gray-600 mb-6">We've sent a verification link to your email. Please check your inbox and verify your email address to start using your account.</p>
          <button
            onClick={() => setModalIsOpen(false)}
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
