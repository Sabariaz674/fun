
import Layout from '../components/Layout';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does 10 Dollar Fun offer?',
      answer: 'We offer a wide range of digital services including AI modules, IT services, website development, affiliate programs, and device revival services. Most of our services start at just $10.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply click on "Join Now" to register for an account, choose the services you need, and start using our platform immediately.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our encrypted payment system.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 7-day free trial for new users on most of our services. You can explore our features without any commitment.'
    },
    {
      question: 'How does the affiliate program work?',
      answer: 'Our affiliate program offers 30% commission on all referral sales. Simply sign up, get your unique referral link, and start earning when people sign up through your link.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide 24/7 customer support through email, live chat, and phone. Our technical team is always ready to help you with any issues.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no cancellation fees, and you\'ll continue to have access until the end of your billing period.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Absolutely! We can create custom AI modules, websites, and IT solutions tailored to your specific business needs. Contact us to discuss your requirements.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
         <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                     <Link to="/contact" className="w-full h-full">Contact Support</Link>  {/* Wrap with Link */}
                   </button>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
