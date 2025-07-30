
import Layout from '../components/Layout';
import { Star, Users, TrendingUp, Gift, Shield, Globe } from 'lucide-react';

const PromoPage = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-blue-600">10 Dollar Fun</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the Highway to Fun! Access 30 premium AI tools for just $10/month 
            and earn up to 40% commission through our affiliate program.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">30 AI Tools Monthly</h3>
            <p className="text-gray-600">Access curated premium AI tools for content creation, automation, and business growth</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Community</h3>
            <p className="text-gray-600">Join thousands of members worldwide building successful online businesses</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">40% Commission</h3>
            <p className="text-gray-600">Earn generous commissions on every referral with our affiliate program</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white mb-16">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-6 text-blue-100">
            Join 10 Dollar Fun today and unlock the power of AI while building your affiliate income!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Started - $10/month
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Gift className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Access</h3>
            <p className="text-gray-600">Get immediate access to all 30 AI tools upon subscription</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Safe, encrypted access to premium tools with 24/7 support</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Globe className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Worldwide Access</h3>
            <p className="text-gray-600">Available in 50+ countries with local payment methods</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <TrendingUp className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Growing Library</h3>
            <p className="text-gray-600">New tools added monthly based on market trends and user feedback</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PromoPage;
