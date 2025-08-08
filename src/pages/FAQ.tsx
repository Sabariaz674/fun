
import Layout from '../components/Layout';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does 10 Dollar Fun offer?',
      answer: 'We offer a wide range of IT-related services and modules with 30 curated AI tools.'
    },
    {
      question: 'How do I get started?',
      answer: 'Click on the "Join Now" button to open an account and start using our services.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept PayPal, all major credit cards, bank transfer, and cryptocurrency.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Feel free to sign up at no cost to explore our full range of services. Once you are familiar and confident with what we offer, you can easily place an order for any of our services.'
    },
    
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide customer support through email. Our support staff and technical team are ready to assist you with any issue within two business days.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time, and you ill continue to have access to our services as a free member.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Yes, we do! We can create custom AI tools and IT solutions tailored to your specific business needs.  Feel free to reach out to us so we can discuss your specific needs.'
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
