
import Layout from '../components/Layout';

const CCPA = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">California Consumer Privacy Act (CCPA)</h1>
          <p className="text-gray-600">Your California Privacy Rights</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
          <h2>1. Introduction</h2>
          <p>
            This California Consumer Privacy Act (CCPA) notice applies to California residents and supplements our Privacy Policy. It describes how we collect, use, and disclose personal information of California consumers and their rights under the CCPA.
          </p>

          <h2>2. Categories of Personal Information</h2>
          <p>We may collect the following categories of personal information:</p>
          <ul>
            <li><strong>Identifiers:</strong> Name, email address, phone number, address</li>
            <li><strong>Commercial Information:</strong> Purchase history, payment information</li>
            <li><strong>Internet Activity:</strong> Browsing history, search history, website interactions</li>
            <li><strong>Geolocation Data:</strong> IP address, location information</li>
            <li><strong>Professional Information:</strong> Employment history, business contact information</li>
          </ul>

          <h2>3. Sources of Personal Information</h2>
          <p>We collect personal information from:</p>
          <ul>
            <li>Directly from you when you provide it to us</li>
            <li>Automatically through your use of our services</li>
            <li>From third-party sources such as business partners</li>
          </ul>

          <h2>4. Use of Personal Information</h2>
          <p>We use personal information for:</p>
          <ul>
            <li>Providing and improving our services</li>
            <li>Processing transactions and payments</li>
            <li>Customer support and communication</li>
            <li>Marketing and promotional activities</li>
            <li>Legal compliance and security</li>
          </ul>

          <h2>5. Disclosure of Personal Information</h2>
          <p>We may disclose personal information to:</p>
          <ul>
            <li>Service providers and business partners</li>
            <li>Payment processors and financial institutions</li>
            <li>Legal authorities when required by law</li>
            <li>Third parties in connection with business transfers</li>
          </ul>

          <h2>6. Your CCPA Rights</h2>
          <p>As a California resident, you have the right to:</p>
          <ul>
            <li><strong>Know:</strong> Request information about the personal information we collect, use, and disclose</li>
            <li><strong>Delete:</strong> Request deletion of your personal information</li>
            <li><strong>Opt-Out:</strong> Opt out of the sale of your personal information</li>
            <li><strong>Non-Discrimination:</strong> Not be discriminated against for exercising your CCPA rights</li>
          </ul>

          <h2>7. How to Exercise Your Rights</h2>
          <p>To exercise your CCPA rights, you can:</p>
          <ul>
            <li>Email us at: privacy@10dollar.fun</li>
            <li>Submit a request through our contact form</li>
            <li>Call us at our customer service number</li>
          </ul>

          <h2>8. Verification Process</h2>
          <p>
            To protect your privacy, we will verify your identity before processing your request. We may ask for additional information to confirm your identity and California residency.
          </p>

          <h2>9. Sale of Personal Information</h2>
          <p>
            We do not sell personal information in the traditional sense. However, we may share information with business partners in ways that could be considered a "sale" under CCPA. You have the right to opt out of such sharing.
          </p>

          <h2>10. Data Retention</h2>
          <p>
            We retain personal information only as long as necessary to fulfill the purposes for which it was collected or as required by law.
          </p>

          <h2>11. Changes to This Notice</h2>
          <p>
            We may update this CCPA notice from time to time. We will notify you of any material changes by posting the updated notice on our website.
          </p>

          <h2>12. Contact Information</h2>
          <p>
            For questions about this CCPA notice or to exercise your rights, please contact us at: privacy@10dollar.fun
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CCPA;
