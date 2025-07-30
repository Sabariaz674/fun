
import Layout from '../components/Layout';

const Privacy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 2025</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, subscribe to our services, or contact us for support.
          </p>
          
          <h3>Information you provide to us:</h3>
          <ul>
            <li>Account information (name, email address, phone number)</li>
            <li>Payment information (processed securely through third-party payment processors)</li>
            <li>Communications with us (emails, support tickets, feedback)</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and customer service requests</li>
            <li>Communicate with you about products, services, offers, and events</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
          </ul>

          <h2>3. Information Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Request portability of your information</li>
          </ul>

          <h2>6. Cookies and Similar Technologies</h2>
          <p>
            We use cookies and similar technologies to collect information about your browsing activities and to distinguish you from other users of our website. For more information, please see our Cookie Policy.
          </p>

          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: support@10dollar.fun
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
