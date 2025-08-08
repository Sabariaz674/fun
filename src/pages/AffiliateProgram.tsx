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
        "Earn up to 40% commission on two levels - the highest rewards in the industry."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multiple Income Streams",
      description:
        "Earn rewards from memberships, promo pages, and IT services."
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
        "Professional marketing materials, banners, and promotional pages."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description:
        "Expand your reach by showcasing to audiences worldwide."
    }
  ];





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
        <div className="bg-gray-50 py-12 px-6 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
             This Is How It Works
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
             
            </p>
            
            <p>
              🌐 pay out a whopping 80 percent Referral Bonus<br/>
              ✅ To our active FUN Members<br/></p>
              <p>

              🌐when members order a $10 AI Module<br/>
              ✅ You will earn a $4 referral bonus level 1 and $4 on level 2
            </p>
            <p>
              🌐 When members order a $10 Promo Page
              <br />
              ✅ You will earn a $4 referral  bonus at level 1 and $4 on level 2
            </p>
            <p>
              🌐 When members order previous modules at $2.50,
              <br />
              ✅ Every member (also Free members) receives a $0.50 referral bonus on two tiers.
            </p>
            <p>
              🌐 If any of your referrals orders IT services,
              <br />
              ✅ You will get a 10% commission.
            </p>
          </div>
        </div>

        {/* "Leadership Bonus" Section */}
        <div className="bg-gray-50 py-12 px-6 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Qualify for the Leadership Bonus:
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              🌐 <strong>Refer 10+ new FUN Members</strong>
              <br />
              ✅ A $5 leadership bonus + Fun Bronze badge
            </p>
            <p>
              🌐 Refer 20+ new FUN Members
              <br />
              ✅ A $10 leadership bonus + Fun Silver badge
            </p>
            <p>
              🌐 Refer 30 new FUN Members
              <br />
              ✅ A $15 leadership bonus + Fun Gold badge
            </p>
            <p>
              🌐 Every additional 10 FUN members you refer
              <br />
              ✅ You will receive a Referral bonus of $5
            </p>
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

      </div>
    </Layout>
  );
};

export default AffiliateProgram;
