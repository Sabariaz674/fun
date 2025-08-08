import Layout from '../components/Layout';
import { Bot, Brain, MessageSquare, Image, Code, BarChart3, Heart } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AIModules = () => {
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


  return (
    <Layout>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Modules</h1>
          <p className="text-xl text-gray-600">A selection of AI tools from the module of the month</p>
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
                {/* Add any additional content or buttons here if needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom AI Solution?</h2>
        <p className="text-gray-600 mb-6">
          We can build custom AI modules tailored to your specific needs and requirements.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
          <Link to="/contact" className="w-full h-full">Contact Us</Link>  {/* Wrap with Link */}
        </button>
      </div>

    </Layout>
  );
};

export default AIModules;