
import Layout from '../components/Layout';
import { Bot, Brain, MessageSquare, Image, Code, BarChart3, Heart, Building2 } from 'lucide-react';

const AIModules = () => {
  const modules = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'HubSpot AI Chatbot',
      description: '24/7 Customer Engagement with CRM Intelligence. Turn conversations into conversions by automating support, qualifying leads, and syncing with your sales pipeline.',
      price: 'Free - $20/month',
      features: [
        'Conversational Lead Screening (BANT)',
        'Visual Flow Builder (no code needed)',
        '24/7 chat availability',
        'CRM integration with full visibility',
        'ChatSpot Generative AI for responses',
        'Multi-channel presence (email/chat/web)'
      ],
      limitations: [
        'Lacks advanced NLP/AI',
        'No chat flow reuse',
        'Limited to web & Facebook Messenger',
        'Pro features require high upgrade costs'
      ],
      affiliate: '30% recurring commission for 1 year',
      url: 'https://hubspot.com'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Roast.dating',
      description: 'Improve dating profiles on Tinder, Bumble, etc. using AI + expert review. Uses 10,000+ profiles and coaching data to optimize photos, bios, and prompts.',
      price: '$6.99 - $97',
      features: [
        'AI and expert feedback',
        'AI-generated headshots',
        'Bio improvement + daily tips',
        'Telegram community',
        'Tailored feedback via quiz',
        '7-day free trial available'
      ],
      limitations: [
        'Mixed photo realism quality',
        'Costs for high-tier features',
        'Limited support',
        'Experience varies based on input'
      ],
      affiliate: 'Yes; referrers earn based on plan level',
      url: 'https://www.roast.dating'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Smart Analytics',
      description: 'Advanced data analysis and insights powered by machine learning',
      price: '$15/month',
      features: ['Advanced analytics', 'Machine learning insights', 'Custom reports'], 
      limitations: [ 
        'Mixed photo realism quality',
        'Costs for high-tier features',
        'Limited support',
        'Experience varies based on input'
      ],
      affiliate: 'Yes; referrers earn based on plan level',
      url: 'https://www.roast.dating'
    },
    
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Content Generator',
      description: 'AI-powered content creation for blogs, social media, and marketing',
      price: '$12/month',
      features: ['Blog post generation', 'Social media content', 'Marketing copy'],
      limitations: [
        'Mixed photo realism quality',
        'Costs for high-tier features',
        'Limited support',
        'Experience varies based on input'
      ],
      affiliate: 'Yes; referrers earn based on plan level',
      url: 'https://www.roast.dating'
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Image Recognition',
      description: 'Advanced computer vision for image analysis and processing',
      price: '$18/month',
      features: ['Object detection', 'Image classification', 'OCR capabilities'],
      limitations: [
        'Mixed photo realism quality',
        'Costs for high-tier features',
        'Limited support',
        'Experience varies based on input'
      ],
      affiliate: 'Yes; referrers earn based on plan level',
      url: 'https://www.roast.dating'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Code Assistant',
      description: 'AI-powered coding help and automated code generation',
      price: '$20/month',
      features: ['Code completion', 'Bug detection', 'Documentation generation'],limitations: [
        'Mixed photo realism quality',
        'Costs for high-tier features',
        'Limited support',
        'Experience varies based on input'
      ],
      affiliate: 'Yes; referrers earn based on plan level',
      url: 'https://www.roast.dating'
    }
  ];

  return (
    <Layout>
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
                <span className="text-2xl font-bold text-gray-900">{module.price}</span>
              </div>

              {module.features && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {module.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {module.limitations && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Limitations:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {module.limitations.slice(0, 2).map((limitation, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {module.affiliate && (
                <div className="mb-4">
                  <p className="text-sm text-purple-600 font-medium">
                    <strong>Affiliate Program:</strong> {module.affiliate}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <a
                  href={module.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Try Now
                </a>
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
    </Layout>
  );
};

export default AIModules;
