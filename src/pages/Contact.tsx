import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { db, addDoc, collection } from './firebase'; // Import Firebase functions

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Simple validation
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    setErrors({ general: 'All fields are required.' });
    return;
  }

  setIsSubmitting(true);

  try {
    // Log the data before sending
    console.log('Form Data:', formData);

    // Save the form data to Firestore
    const docRef = await addDoc(collection(db, "contactMessages"), formData);

    console.log("Document written with ID: ", docRef.id);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    alert('Message sent successfully!');
  } catch (error) {
    console.error("Error adding document: ", error);
    setErrors({ general: 'An error occurred. Please try again later.' });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {errors.general && <p className="text-red-600">{errors.general}</p>}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">support@10dollarfun.com</p>
                 
                </div>
              </div>
              
            </div>

           
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
