import Layout from '../components/Layout';
import { Server, Shield, Cloud, Wrench, Smartphone, Globe, Laptop, Target } from 'lucide-react';  // Additional icons for new services
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const ITServices = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8" />,  // Server Management
      title: 'Server Management',
      description: 'Complete server setup, maintenance, and monitoring services .',

    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions.',

    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and management for your business .',

    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Technical Support',
      description: '24/7 IT support for all IT needs.',

    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Solution',
      description: 'Custom mobile app development and deployment.',

    },

    {
      icon: <Globe className="w-8 h-8" />,  // Web Development
      title: 'Web Development',
      description: 'Professional website design and development services.',

    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}

        <section className="bg-gray-50 py-20 mt-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              IT Services to Empower Your Business
            </h1>
            <p className="text-xl text-gray-600">Comprehensive IT solutions that ensure your business runs smoothly and grows.</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Services Offered */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-10">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                </div>
              ))}
            </div>
          </div>
        </section>

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
