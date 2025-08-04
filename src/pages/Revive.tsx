import React, { useState } from 'react';
import Layout from '../components/Layout';
import { RefreshCw, Cpu, HardDrive, Monitor, Globe, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Revive = () => {
  // State to manage the selected language for cloning
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');  // Default language
  const [cloningPrice, setCloningPrice] = useState<number>(500); // Default price for cloning

  // Handle language selection for cloning
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    setSelectedLanguage(language);

    // Set price based on language
    if (language === 'Spanish' || language === 'English') {
      setCloningPrice(500);  // Base price
    } else {
      setCloningPrice(800);  // Different price for other languages (e.g., specialized translations)
    }
  };

  const services = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'Complete WordPress Redesigns',
      description: 'Complete website redesigns using modern technologies and graphics for a fresh look and feel.',
      price: 'Free'
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: 'Performance & Design Upgrades',
      description: 'Enhance the design and performance of your website for both desktop and mobile devices.',
      price: 'Free'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Cloned Site in Another Language',
      description: `Cloning your site into another language (e.g., ${selectedLanguage}) to reach international audiences.`,
      price: `$${cloningPrice} (one-time fee)`
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Affordable Pricing',
      description: 'Access to premium hosting, support, and marketing tools at low rates.'
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Reliable Hosting & Support',
      description: 'Premium hosting services and continuous support for your revived website.'
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: 'Marketing Tools Access',
      description: 'Gain access to tools that enhance your digital presence and outreach.'
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <RefreshCw className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Revive Your Technology</h1>
          <p className="text-xl text-gray-600">Bring new life to your old devices with our revival services</p>
        </div>

        {/* Services Offered */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-blue-600 flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-gray-900 mb-4">{service.price}</div>
              {service.title === "Cloned Site in Another Language" && (
                <div className="mb-4">
                  {/* Language Selection Dropdown */}
                  <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="border rounded-lg p-2"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    {/* Add more languages as needed */}
                  </select>
                </div>
              )}
              <Link 
                to="/register" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center">
                <div className="text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Referral Bonuses Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Referral Bonuses</h2>
          <p className="text-lg text-gray-600 text-center">
            Earn a **10% referral bonus** for each client referred to our **Revive Program**. The bonus is calculated after project completion.
          </p>
        </div>

        {/* Revival Process Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Revival Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Diagnosis</h3>
              <p className="text-gray-600 text-sm">We analyze your device to identify issues</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">Create a customized revival plan</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Revival</h3>
              <p className="text-gray-600 text-sm">Execute the revival process</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-600 text-sm">Ensure everything works perfectly</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Revive;
