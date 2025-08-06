
import Layout from '../components/Layout';
import { Target, Users, Globe, Award, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Innovation',
      description: 'We leverage cutting-edge AI technology to create solutions that transform how people work and earn online.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Community',
      description: 'Building a supportive network of entrepreneurs, creators, and innovators worldwide.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: 'Accessibility',
      description: 'Making advanced technology accessible to everyone, regardless of technical background or budget.'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: 'Quality',
      description: 'Delivering high-quality tools and services that provide real value to our members.'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Countries Served' },
    { number: '10,000+', label: 'Active Members' },
    { number: '$2M+', label: 'Paid in Commissions' },
    { number: '95%', label: 'Satisfaction Rate' }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About 10 Dollar Fun</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the Highway to Fun! We're revolutionizing how people access AI technology 
            and build sustainable online income through our innovative affiliate program.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At 10 Dollar Fun, we believe everyone deserves access to cutting-edge AI technology 
              without breaking the bank. Our mission is to democratize AI tools while creating 
              sustainable income opportunities for our global community.
            </p>
            <p className="text-gray-600">
              We curate 30 premium AI tools monthly for just $10, making advanced technology 
              accessible to entrepreneurs, creators, and businesses worldwide.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              We envision a world where financial freedom is achievable for everyone through 
              technology and community support. By combining AI innovation with a generous 
              affiliate program, we're creating pathways to prosperity.
            </p>
            <p className="text-gray-600">
              Our goal is to become the premier platform for AI tools and affiliate marketing, 
              empowering millions to build sustainable online businesses.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">AI Tool Modules</h3>
              <p className="text-gray-600 text-sm">
                30 curated AI tools monthly for $10, covering everything from content creation to business automation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Affiliate Program</h3>
              <p className="text-gray-600 text-sm">
                Earn up to 40% commission with our generous referral system and build recurring income.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">IT Services</h3>
              <p className="text-gray-600 text-sm">
                Professional web development, app creation, and digital marketing services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Revive Program</h3>
              <p className="text-gray-600 text-sm">
                Free WordPress website redesigns with modern technologies and international expansion.
              </p>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Our Company</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-4">
              10 Dollar Fun is operated by Free Universal Network LLC, a company registered in Wyoming, USA. 
              We're committed to transparency, innovation, and creating value for our global community.
            </p>
            <p className="text-gray-600 mb-6">
              Our team consists of experienced entrepreneurs, AI specialists, and marketing professionals 
              dedicated to helping you succeed in the digital economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Support
              </a>
              <a
                href="/membership"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
