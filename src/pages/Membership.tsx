import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import Layout from '../components/Layout';
import { Check, Star, Zap, Crown, Gift } from 'lucide-react';


const Membership = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  const plans = [
    {
      name: 'Free Member',
      price: '$0',
      period: '',
      description: 'Perfect for getting started with our community',
      features: [
        'Access to community forums',
        '$1 referral bonus (10% commission)',
        'Basic support',
        'Monthly newsletter',
        'Access to free resources'
      ],
      limitations: [
        'No AI tool access',
        'Limited support',
        'Basic referral rate'
      ],
      buttonText: 'Join Free',
      buttonStyle: 'bg-gray-600 hover:bg-gray-700',
      onClick: () => navigate('/register?plan=free')  // Navigate to register page with query
    },
    {
      name: 'Active FUN Member',
      price: '$10',
      period: '/month',
      description: 'Our most popular plan with full AI tool access',
      features: [
        '30 curated AI tools monthly',
        '$4 referral bonus (40% commission)',
        '40% commission on promo page sales',
        'Premium support',
        'Priority community access',
        'Exclusive member resources',
        'Monthly live Q&A sessions',
        'Early access to new tools'
      ],
      limitations: [],
      buttonText: 'Start Now',
      buttonStyle: 'bg-blue-600 hover:bg-blue-700',
      popular: true,
      icon: <Zap className="w-5 h-5" />,
      onClick: () => navigate('/register?plan=active')  // Navigate to register page with query
    },
    {
      name: 'Promo Page',
      price: '$10',
      period: '/year',
      description: 'Get your personalized marketing page',
      features: [
        'Personalized landing page',
        'QR code generation',
        'Custom referral link',
        'Advanced tracking & analytics',
        'No recurring monthly fees',
        'Custom branding options',
        'Mobile-optimized design',
        'SEO optimization'
      ],
      limitations: [
        'One-time setup fee',
        'Requires Active FUN membership for full benefits'
      ],
      buttonText: 'Get Promo Page',
      buttonStyle: 'bg-purple-600 hover:bg-purple-700',
      icon: <Crown className="w-5 h-5" />,
      onClick: () => navigate('/register?plan=promo')  // Navigate to register page with query
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and upgrade as you grow. Get access to 30 AI tools monthly plus earn
            up to 40% commission on referrals.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                plan.popular
                  ? "bg-gradient-to-b from-blue-50 to-purple-50 border-2 border-blue-500 relative transform scale-105"
                  : "bg-white border border-gray-200"
              } hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  {plan.icon && <span className="ml-2 text-blue-600">{plan.icon}</span>}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {plan.price}
                  {plan.period && <span className="text-lg text-gray-600">{plan.period}</span>}
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.limitations.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                  <ul className="space-y-2">
                    {plan.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-red-500 mr-2 mt-0.5">•</span>
                        <span className="text-gray-600 text-sm">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={plan.onClick}  // Add the onClick function for navigation
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 text-white ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Membership;
