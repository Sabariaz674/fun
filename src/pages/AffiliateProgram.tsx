import React, { useState } from "react";
import Layout from "../components/Layout";
import { DollarSign, Users, TrendingUp, Gift, Star, Target, Globe, Award } from 'lucide-react';

const AffiliateProgram = () => {
  const [referralEarnings, setReferralEarnings] = useState(0);  // Track referral earnings
  const [membershipTier, setMembershipTier] = useState('Free');  // Track current membership tier

  // Define Membership Tiers
  const membershipTiers = [
    {
      title: 'Free Member',
      price: '$0',
      commission: '$1 (10%) for Level 1 modules/promo page orders',
      features: [
        'Access to community',
        '$1 referral bonus on Active FUN memberships',
        'Basic support',
        'Community access'
      ],
      color: 'gray'
    },
    {
      title: 'Inactive FUN Member',
      price: '$10/month',
      commission: '$4 for Level 1 module orders; $2 from third month',
      features: [
        '30 AI tools monthly',
        '$4 referral bonus on Level 1 module orders',
        '40% commission on promo page sales',
        'Premium support',
        'Priority community access'
      ],
      color: 'blue',
      popular: true
    },
    {
      title: 'Active FUN Member',
      price: '$10/month',
      commission: '$4 for Level 1 & Level 2 module orders; 40% for promo page sales',
      features: [
        'Access to all AI tools monthly',
        'Referral bonuses for module orders',
        '40% commission on promo page sales',
        '10% commission for IT services/Revive'
      ],
      color: 'green'
    }
  ];

  // Benefits of the Affiliate Program
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'High Commissions',
      description: 'Earn up to 40% commission on every referral - one of the highest rates in the industry.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Multiple Income Streams',
      description: 'Earn from memberships, promo pages, and IT services referrals.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Recurring Revenue',
      description: 'Build sustainable income with monthly recurring commissions.'
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Instant Payouts',
      description: 'Fast payment processing via PayPal, bank transfer, or cryptocurrency.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Marketing Support',
      description: 'Professional marketing materials, banners, and promotional content.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Promote to audiences in 50+ countries with localized support.'
    }
  ];

  // Success Stories for motivation
  const successStories = [
    {
      name: 'Sarah Johnson',
      earnings: '$2,500/month',
      story: 'Started as a free member, now earning consistent monthly income through her promo page and referrals.',
      timeframe: '6 months'
    },
    {
      name: 'Mike Chen',
      earnings: '$1,800/month',
      story: 'Leveraged his tech blog audience to promote AI tools, now his top income source.',
      timeframe: '4 months'
    },
    {
      name: 'Emma Rodriguez',
      earnings: '$3,200/month',
      story: 'Built a community around AI tools and consistently refers new Active FUN members.',
      timeframe: '8 months'
    }
  ];

  // Handle membership upgrade for Free Members who have earned $10 in referral bonuses
  const handleReferralBonus = () => {
    if (referralEarnings >= 10) {
      alert("Congrats! You've earned $10 in referral bonuses. Upgrading to Active FUN Member!");
      setMembershipTier("Active_FUN");
    } else {
      alert("Keep referring! You need $10 in referral earnings to upgrade to Active FUN.");
    }
  };

  // Display real-time earnings and upgrade logic
  const displayRealTimeEarnings = () => {
    return (
      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-900">Your Referral Earnings: ${referralEarnings}</h3>
        <button
          onClick={handleReferralBonus}
          className="mt-2 w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
        >
          Upgrade to Active FUN
        </button>
      </div>
    );
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our <span className="text-blue-600">Affiliate Program</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Earn up to 40% commission by promoting AI tools and services. Build recurring income 
            while helping others discover amazing technology.
          </p>
        </div>

        {/* Membership Tiers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Choose Your Membership Level</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg p-6 shadow-lg ${tier.popular ? 'ring-2 ring-blue-500' : 'border border-gray-200'}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{tier.price}</div>
                  <div className="text-sm text-gray-600">Commission: {tier.commission}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Star className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    tier.color === 'blue'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : tier.color === 'purple'
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Join Our Program?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real-Time Earnings and Upgrade Button */}
        <div className="mb-16">
          {displayRealTimeEarnings()}
        </div>

        {/* Success Stories Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-gold-500 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.timeframe}</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">{story.earnings}</div>
                <p className="text-gray-600 text-sm">{story.story}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="mb-6 text-blue-100">
            Join thousands of affiliates already earning with 10 Dollar Fun. Start free and upgrade as you grow!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Join Free Now
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AffiliateProgram;
