import Layout from '../components/Layout';
import {
  DollarSign,
  Users,
  TrendingUp,
  Gift,
  Star,
  Target,
  Globe,
  Award
} from 'lucide-react';

const Membership = () => {
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

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* "Why Join Our Program?" Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Join Our Program?
          </h2>
          <p className="text-xl font-medium text-gray-700 text-center mb-8">
            Become part of our thriving community, where members are earning monthly income with $10 FUN.
          </p>
          <p className="text-xl font-medium text-gray-700 text-center mb-8">
            Begin your journey at no cost and upgrade as you grow.
          </p>
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



        {/* "How It Works" Section */}
        <div className="bg-gray-50 py-12 px-6 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Learn More – This is How It Works
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              🌐 <strong>We pay out a whopping 80 percent Referral Bonus</strong>
            </p>
            <p>✅ To our active FUN Members</p>
            <p>
              🌐 If you are a FUN Member, when members order a $10 AI Module
              <br />
              ✅ You will earn a $4 referral bonus level 1, and $4 on level 2.
            </p>
            <p>
              🌐 When members order a $10 Promo Page.
              <br />
              ✅ You will earn a $4 referral bonus on two tiers.
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
      </div>
    </Layout>
  );
};

export default Membership;
