import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, DollarSign, Zap, Shield, Globe, Bot, Brain, MessageSquare, Image, Code, BarChart3, Server, RefreshCw, Cloud, Wrench, Smartphone, Cpu, Monitor, HardDrive } from 'lucide-react';
import Layout from '../components/Layout';

const Home = () => {

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "AI Tool Modules",
      description: "Discover 30 carefully selected Al tools each your business processes. Boost your efficieny and stay ahead of the competition."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Affiliate Earnings",
      description: "Maximize your earning potential with our affiliate program, which offers up to a 40% commission on each referral. Build a reliable, recurring income stream by partnering with us."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: " Fun IT Services",
      description: "Our IT services encompass expert web development, app creation, and digital marketing solutions, all with competitive rates and attractive referral incentives."
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      title: "Revive Program",
      description: "Our Revive Program offers free redesigns for WordPress sites, with advanced technologies and options for international. expansion. Or, how about we build a completely new WordPress site from scratch?"
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
      name: "Diane – Cameroon",
      role: "Moderator ",
      content: "The AI tools have transformed my workflow. I've saved hours every week and my earnings have grown 300%!",
      rating: 5
    },
    {
      name: "Vicky – Kenya ",
      role: "Nurse",
      content: "The affiliate program is incredible. I'm earning $2,000+ monthly just by sharing tools I already use.",
      rating: 5
    },
    {
      name: "Jarmin – Bangladesh",
      role: "Content Creator",
      content: "10 Dollar Fun opened up a new income stream for me. The community support is amazing too!",
      rating: 5
    }
  ];

  const modules = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Chatbot',
      description: "Intelligent conversational AI for customer support and engagement",

    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Smart Analytics',
      description: "Advanced data analysis and insights powered by machine learning",

    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Content Generator',
      description: "AI-powered content creation for blogs, social media, and marketing",

    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Image Recognition',
      description: "Advanced computer vision for image analysis and processing",

    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Code Assistant',
      description: "AI-powered coding help and automated code generation",

    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Predictive Modeling',
      description: "Forecast trends and make data-driven predictions",

    }
  ];

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
  const reviveServices = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'Hardware Upgrade',
      description: 'Boost your computer performance with new components.',

    }, {
      icon: <HardDrive className="w-12 h-12" />,
      title: 'Data Recovery',
      description: `Recover lost files and restore your important data.`,

    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: 'System Optimization',
      description: 'Clean up and optimize your system for better performance.',

    },



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
              Join the Al revolution by exploring our monthly modules, which showcase 30 carefully selected Al tools. Plus, take advantage of our affiliate program and earn commissions of up to 40%.
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
              We offer a comprehensive ecosystem that combines advanced Al technologies with expert services, empowering your digital success from very apala
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

      {/* AI Modules Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Modules</h1>
          <p className="text-xl text-gray-600">Powerful AI tools to supercharge your projects</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module) => (
            <div key={module.title} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="text-blue-600 mb-4">
                {module.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h3>
              <p className="text-gray-600 mb-4">{module.description}</p>

              <div className="mb-4">

              </div>

              <div className="flex items-center justify-between">
                <Link
                  to="/try-now"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Try Now
                </Link>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom AI Solution?</h2>
          <p className="text-gray-600 mb-6">
            We can build custom AI modules tailored to your specific needs and requirements.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
            Contact Us
          </button>
        </div>
      </div>


      {/* IT Services Section with top margin */}
      <section className="bg-gray-50 py-20 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Offered */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-10">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our IT Services Section */}
      <section className="bg-gray-50 rounded-lg p-8 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>



      {/* Revive Your Technology Section */}
      <section className="bg-gray-50 py-20 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <RefreshCw className="w-16 h-16 text-blue-600" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Revive Your Technology
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            Bring new life to your old devices with our revival services
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-10">
            {reviveServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex justify-center items-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>

                {/* Centering the price and the button */}
                <div className="flex flex-col items-center justify-center">

                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* The Revival Process Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-12 mt-12 max-w-6xl mx-auto mb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">The Revival Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Diagnosis</h3>
              <p className="text-gray-600 text-sm sm:text-base">We analyze your device to identify issues</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600 text-sm sm:text-base">Create a customized revival plan</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Revival</h3>
              <p className="text-gray-600 text-sm sm:text-base">Execute the revival process</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-600 text-sm sm:text-base">Ensure everything works perfectly</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 mx-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            About 10 Dollar Fun
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Making technology accessible and fun for everyone
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-center mb-15">
            <div className=" p-6 rounded-lg ">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                At 10 Dollar Fun, we believe that everyone deserves access to cutting-edge technology and digital services without breaking the bank. Our mission is to provide affordable, high-quality tech solutions that make life easier and more enjoyable.
              </p>

            </div>

            <div className=" p-6 rounded-lg ">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                From AI-powered tools to comprehensive IT services, we offer a wide range of digital solutions designed to help individuals and businesses thrive in the digital age. All starting at just $10.
              </p>

            </div>
          </div>
        </div>

      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Affordable</h3>
              <p className="text-gray-600 text-sm">
                Quality services starting at just $10
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Reliable</h3>
              <p className="text-gray-600 text-sm">
                Proven track record of satisfied customers
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Innovative</h3>
              <p className="text-gray-600 text-sm">
                Latest technology and AI-powered solutions
              </p>
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
      <section className="py-12 bg-white ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to the $10 FUN Program!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              You’ve just stepped into a world where AI tools meet affiliate magic. Whether you're here to earn, explore, or unleash creativity, you're in the right place!
            </p>
          </div>

          <div className="space-y-4 text-left text-lg text-gray-700 mb-6">
            <div className="flex items-start">
              <div className="text-green-500 mr-3">✅</div>
              <p className="text-sm">30 powerful AI tools every month</p>
            </div>
            <div className="flex items-start">
              <div className="text-green-500 mr-3">✅</div>
              <p className="text-sm">Up to 40% commission on referrals</p>
            </div>
            <div className="flex items-start">
              <div className="text-green-500 mr-3">🌐</div>
              <p className="text-sm">A global community of creators and affiliates</p>
            </div>
            <div className="flex items-start">
              <div className="text-green-500 mr-3">💻</div>
              <p className="text-sm">A custom Promo Page that does the selling for you</p>
            </div>
            <div className="flex items-start">
              <div className="text-green-500 mr-3">🎁</div>
              <p className="text-sm">It starts with just $10... and the possibilities are endless.</p>
            </div>
            <div className="flex items-start">
              <div className="text-green-500 mr-3">✍️</div>
              <p className="text-sm">Join the Community and have FUN</p>
            </div>
            <div className="flex items-start">
              <div className="text-green-500 mr-3">🚀</div>
              <p className="text-sm">Your digital side hustle has never looked so vibrant. Let's build something unforgettable.</p>
            </div>
          </div>

          <div className="text-left">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-200">
              Learn More
            </button>
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
