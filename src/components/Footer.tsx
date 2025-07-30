
import { Link } from 'react-router-dom';
import { Facebook, Twitter, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">$10</span>
              </div>
              <span className="text-xl font-bold">10 Dollar Fun</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Take the Highway to Fun! Join our AI-powered affiliate program offering curated AI tool modules, 
              referral bonuses, IT services, and the Revive program.
            </p>
            <div className="mb-4">
              <p className="text-sm text-gray-400">Free Universal Network LLC</p>
              <p className="text-sm text-gray-400">Registered in Wyoming, USA</p>
              <p className="text-sm text-gray-400">Email: support@10dollar.fun</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/groups/10dollarfun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/10dollarfun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://t.me/tendollarfunprogram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <Link
                to="/newsletter"
                className="text-gray-400 hover:text-green-500 transition-colors duration-200"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/membership" className="text-gray-400 hover:text-white transition-colors duration-200">Membership</Link></li>
              <li><Link to="/ai-modules" className="text-gray-400 hover:text-white transition-colors duration-200">AI Modules</Link></li>
              <li><Link to="/affiliate-program" className="text-gray-400 hover:text-white transition-colors duration-200">Affiliate Program</Link></li>
              <li><Link to="/it-services" className="text-gray-400 hover:text-white transition-colors duration-200">IT Services</Link></li>
              <li><Link to="/revive" className="text-gray-400 hover:text-white transition-colors duration-200">Revive Program</Link></li>
              <li><Link to="/promo-page" className="text-gray-400 hover:text-white transition-colors duration-200">Promo Page</Link></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Use</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</Link></li>
              <li><Link to="/dmca" className="text-gray-400 hover:text-white transition-colors duration-200">DMCA</Link></li>
              <li><Link to="/aml-policy" className="text-gray-400 hover:text-white transition-colors duration-200">AML Policy</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* LottaWin Banner */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-4 text-center">
            <p className="text-black font-semibold mb-2">Try Your Luck with LottaWin!</p>
            <a
              href="https://lottawin.com/fun"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 inline-block"
            >
              Play Now
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Free Universal Network LLC. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/income-disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Income Disclaimer
            </Link>
            <Link to="/legal-disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Legal Disclaimer
            </Link>
            <Link to="/ccpa" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              CCPA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
