import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link } from 'react-router-dom';
import {
  DollarSign,
  Users,
  TrendingUp,
  Gift,
  Star,
  Target,
  Globe,
  Award
} from "lucide-react";

const AffiliateProgram = () => {
  const [referralEarnings, setReferralEarnings] = useState(0);
  const [membershipTier, setMembershipTier] = useState("Free");

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "High Commissions",
      description:
        "Earn up to 40% commission on every referral - one of the highest rates in the industry."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multiple Income Streams",
      description:
        "Earn from memberships, promo pages, and IT services referrals."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Recurring Revenue",
      description:
        "Build sustainable income with monthly recurring commissions."
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Instant Payouts",
      description:
        "Fast payment processing via PayPal, bank transfer, or cryptocurrency."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Marketing Support",
      description:
        "Professional marketing materials, banners, and promotional content."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description:
        "Promote to audiences in 50+ countries with localized support."
    }
  ];

  const successStories = [
    {
      name: "Vicky-Kenya",
      story:
        "Started as a free member, now earning consistent monthly income through her promo page and referrals.",
      
    },
    {
      name: "Daine-Cameroon",
      
      story:
        "Leveraged his tech blog audience to promote AI tools, now his top income source.",
      
    },
    {
      name: "Ester-The Philippines",
      
      story:
        "Built a community around AI tools and consistently refers new Active FUN members.",
      
    }
  ];

  const handleReferralBonus = () => {
    if (referralEarnings >= 10) {
      alert("Congrats! You've earned $10 in referral bonuses. Upgrading to Active FUN Member!");
      setMembershipTier("Active_FUN");
    } else {
      alert("Keep referring! You need $10 in referral earnings to upgrade to Active FUN.");
    }
  };

  const displayRealTimeEarnings = () => (
    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
      <h3 className="font-semibold text-gray-900">
        Your Referral Earnings: ${referralEarnings}
      </h3>
      <button
        onClick={handleReferralBonus}
        className="mt-2 w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
      >
        Upgrade to Active FUN
      </button>
    </div>
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Join Our Program?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real-Time Earnings and Upgrade Button */}
        <div className="mb-16">
          {displayRealTimeEarnings()}
          <div className="border border-black p-6 mt-4 bg-white max-w-3xl mx-auto">
            <p>
              <strong>High Commissions</strong>
              <br />
              Receive up to 40% commission on referrals across two tiers.
            </p>
            <p className="mt-4">
              <strong>Multiple Income Streams</strong>
              <br />
              Generate income through memberships, promo pages, and referrals for IT services.
            </p>
            <p className="mt-4">
              <strong>Recurring Revenue</strong>
              <br />
              Generate lasting revenue through consistent monthly recurring commissions.
            </p>
            <p className="mt-4">
              <strong>Instant Payouts</strong>
              <br />
              Weekly withdrawals can be made using PayPal, bank transfer, or cryptocurrency.
            </p>
            <p className="mt-4">
              <strong>Marketing Support</strong>
              <br />
              High-quality marketing assets, such as banners and promotional web pages.
            </p>
            <p className="mt-4">
              <strong>Global Reach</strong>
              <br />
              Reach and engage audiences across every country worldwide.
            </p>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-gold-500 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">
                 
                </div>
                <p className="text-gray-600 text-sm">{story.story}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="mb-6 text-blue-100">
            Join thousands of affiliates already earning with 10 Dollar Fun. Start
            free and upgrade as you grow!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link to="/register">
  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
    Join Free Now
  </button>
</Link>
            
          </div>
        </div>

        {/* Final Box Section */}
        <div className="max-w-3xl mx-auto mt-12">
          {/* Box 1 */}
          <div className="border border-gray-400 p-6 mb-8 rounded-md bg-white">
            <p className="text-gray-800 text-base mb-2">
              Become part of our thriving affiliate community, where members are
              earning weekly income with $10 FUN. Begin your journey at no cost and
              upgrade as you grow.
            </p>
            <p className="font-bold text-lg text-gray-900">
              Join <em>For</em> Free Now
            </p>
          </div>

          {/* Box 2 */}
          <div className="border border-gray-400 p-6 rounded-md bg-white">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Learn More</h3>
            <ul className="list-none space-y-2 text-gray-800 text-sm">
              <li>
                🌐 Earn a $4 referral bonus on two tiers when members order a $10 AI
                Module
              </li>
              <li>
                🌐 Earn a $4 referral bonus on two tiers when members order a $10
                Promo Page.
              </li>
              <li>
                🌐 Receive a $0.50 referral bonus on two tiers when members order
                previous modules at $2.50.
              </li>
              <li>
                🌐 If any of your referrals orders IT services, you will get a 10%
                commission.
              </li>
            </ul>
            <h4 className="mt-6 font-bold text-gray-900">
              Qualify for the Leadership Bonus:
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm mt-2">
              <div className="font-medium">🏆 Monthly Referral Milestone</div>
              <div className="font-medium">💰 Bonus Reward</div>
              <div>Refer 10+ new FUN Members</div>
              <div>+$5 leadership bonus + Fun Bronze badge</div>
              <div>Refer 15+ new FUN Members</div>
              <div>+$10 leadership bonus + Fun Silver badge</div>
              <div>Refer 20+ new FUN Members</div>
              <div>+$15 leadership bonus + Fun Gold badge</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AffiliateProgram;
