
import Layout from '../components/Layout';
import { Mail, Gift, TrendingUp, Users } from 'lucide-react';

const Newsletter = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Mail className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-xl text-gray-600">
            Stay updated with the latest AI tools, affiliate opportunities, and exclusive offers!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            What You'll Get
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Gift className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Exclusive Offers</h3>
              <p className="text-gray-600 text-sm">Special discounts and early access to new features</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">AI Tool Updates</h3>
              <p className="text-gray-600 text-sm">Latest additions to our monthly AI tool collection</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Affiliate Tips</h3>
              <p className="text-gray-600 text-sm">Success strategies and earning optimization tips</p>
            </div>
          </div>

          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                First Name (Optional)
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <p className="text-gray-600 text-sm">
            We respect your privacy. Unsubscribe at any time. 
            Read our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> for more details.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Newsletter;
