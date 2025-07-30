import Layout from '../components/Layout';
import { Server, Shield, Cloud, Wrench, Smartphone, Globe, Laptop, Target } from 'lucide-react';  // Additional icons for new services

const ITServices = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Front-end, back-end, and e-commerce development to power your online business.',
      price: 'From $35/hour'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions, including firewalls and encryption.',
      price: 'From $15/month'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and management for your business to scale and store data securely.',
      price: 'From $20/month'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Technical Support & Maintenance',
      description: '24/7 IT support, helpdesk, and preventive maintenance to ensure smooth operations.',
      price: 'From $25/month'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'Custom mobile app development for Android, iOS, and cross-platform apps.',
      price: 'From $30/hour'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Website Design (UI/UX)',
      description: 'Beautiful and user-friendly designs for websites that engage your audience.',
      price: 'From $40/hour'
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'Custom Software Development',
      description: 'Custom ERP, HRMS, WMS, IMS solutions tailored to your business needs.',
      price: 'From $50/hour'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Digital Marketing & SEO',
      description: 'Boost your business online with SEO, PPC, content creation, and reputation management.',
      price: 'From $500/month'
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            IT Services to Empower Your Business
          </h1>
          <p className="text-xl text-gray-600">Comprehensive IT solutions that ensure your business runs smoothly and grows.</p>
        </div>

        {/* Services Offered */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">{service.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Referral Bonuses */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Referral Bonuses</h2>
          <p className="text-lg text-gray-600 text-center">
            Earn **10% commission** for referring clients to any of our services. Commission is calculated after the successful completion of the project.
          </p>
        </div>

        {/* Development Process */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Development Process</h2>
          <p className="text-lg text-gray-600 text-center">
            Our **team** will develop your project in-house, or if needed, we can ask for bids on platforms like **Freelancer** or **Upwork**.
          </p>
        </div>

        {/* Why Choose Us? */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our IT Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with years of experience in IT services.</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">We offer round-the-clock support for all your IT needs.</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">Enterprise-level services at budget-friendly prices.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ITServices;
