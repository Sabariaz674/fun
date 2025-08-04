import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from './firebase'; // Import the Firebase registration function
import { toast } from 'react-toastify'; // Import react-toastify for toasts
import { User, AlertCircle, Mail, MapPin, Users } from 'lucide-react'; // Import necessary icons
import Layout from '../components/Layout'; // Your custom Layout component
import { Link } from 'react-router-dom';  // Add this import for linking to Login page

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    referrer: '', // Referral field
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
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

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }

    if (!formData.email || !formData.password || !formData.username || !formData.country) {
      setErrors({ general: 'Please fill all fields' });
      return;
    }

    try {
      // Call Firebase registration function
      const user = await registerUser(formData.email, formData.password, formData.username, formData.country, formData.referrer);
      console.log('User registered successfully:', user);

      // Show success toast message
      toast.success('We have sent you a welcome email. If it does not appear in your main inbox, please check your spam or junk folder..', {
        autoClose: 2000, // Show for 2 seconds
      });

      // Redirect to login page after 2 seconds
      setTimeout(() => navigate('/membership'), 2000); // Delay navigation for 2 seconds

    } catch (error) {
      console.error('Error registering user:', error);
      setErrors({ general: 'Registration failed. Please try again.' });
      toast.error('Registration failed. Please try again.');
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
                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter your username"
                  />
                </div>
                {errors.username && (
                  <div className="flex items-center mt-1 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.username}
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter your email address"
                  />
                </div>
                {errors.email && (
                  <div className="flex items-center mt-1 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full px-4 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && (
                  <div className="flex items-center mt-1 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.password}
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password *
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full px-4 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Confirm your password"
                  />
                </div>
                {errors.confirmPassword && (
                  <div className="flex items-center mt-1 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              {/* Country Selection */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                  Country *
                </label>
                <div className="relative">
                  <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select your country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                {errors.country && (
                  <div className="flex items-center mt-1 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.country}
                  </div>
                )}
              </div>

              {/* Referral Username (Optional) */}
              <div>
                <label htmlFor="referrer" className="block text-sm font-medium text-gray-700 mb-2">
                  Referrer Username (Optional)
                </label>
                <div className="relative">
                  <Users className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    id="referrer"
                    name="referrer"
                    value={formData.referrer}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter referrer username"
                  />
                </div>
              </div>

              {/* Display errors */}
              {errors.general && <p className="text-red-600">{errors.general}</p>}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Complete Registration
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
    </Layout>
  );
};

export default Register;
