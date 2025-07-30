
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, DollarSign, Zap, Shield, Globe, TrendingUp } from 'lucide-react';
import Layout from '../components/Layout';

const Home = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "AI Tool Modules",
      description: "Get 30 curated AI tools monthly for just $10. Transform your productivity and business operations."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Affiliate Earnings",
      description: "Earn up to 40% commission on referrals. Build recurring income through our generous affiliate program."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "IT Services",
      description: "Professional web development, app creation, and digital marketing services with referral bonuses."
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      title: "Revive Program",
      description: "Free WordPress website redesigns with modern technologies and international expansion options."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Members" },
    { number: "50+", label: "Countries" },
    { number: "$2M+", label: "Paid in Commissions" },
    { number: "95%", label: "Satisfaction Rate" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Digital Marketer",
      content: "The AI tools have transformed my workflow. I've saved hours every week and my earnings have grown 300%!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Web Developer",
      content: "The affiliate program is incredible. I'm earning $2,000+ monthly just by sharing tools I already use.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Content Creator",
      content: "10 Dollar Fun opened up a new income stream for me. The community support is amazing too!",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Take the Highway to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Fun!
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join the AI revolution with our $10 monthly modules featuring 30 curated AI tools, 
              plus earn up to 40% commission through our affiliate program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/register"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/ai-modules"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Explore Modules
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cutting-edge AI tools to professional services, we provide a complete ecosystem for your digital success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Membership
            </h2>
            <p className="text-xl text-gray-600">
              Start free and upgrade as you grow your earnings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Member */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-colors duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Member</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
                <div className="text-gray-600">No payment required</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  <span>Access to community</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  <span>$1 referral bonus (10%)</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  <span>Basic support</span>
                </li>
              </ul>
              <Link
                to="/register"
                className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 block text-center"
              >
                Join Free
              </Link>
            </div>

            {/* Active FUN Member */}
            <div className="bg-white p-8 rounded-xl border-2 border-blue-500 hover:border-blue-600 transition-colors duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Active FUN Member</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$10</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  <span>30 AI tools monthly</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  <span>$4 referral bonus (40%)</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  <span>40% promo page commission</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  <span>Premium support</span>
                </li>
              </ul>
              <Link
                to="/register"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 block text-center"
              >
                Start Now
              </Link>
            </div>

            {/* Promo Page */}
            <div className="bg-white p-8 rounded-xl border-2 border-purple-500 hover:border-purple-600 transition-colors duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Promo Page</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">$10</div>
                <div className="text-gray-600">per year</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  <span>Personalized landing page</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  <span>QR code generation</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  <span>Custom referral link</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  <span>No hidden fees</span>
                </li>
              </ul>
              <Link
                to="/promo-page"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 block text-center"
              >
                Get Promo Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Members Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied members earning with 10 Dollar Fun
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of members who are already earning with our AI-powered affiliate program.
            Start free today and upgrade as you grow!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>Join Now - It's Free!</span>
            </Link>
            <Link
              to="/affiliate-program"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
