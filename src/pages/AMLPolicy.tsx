
import Layout from '../components/Layout';

const AMLPolicy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Anti-Money Laundering Policy</h1>
          <p className="text-gray-600">Last updated: January 2025</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Free Universal Network LLC, operating 10 Dollar Fun, is committed to preventing money laundering and terrorist financing. This Anti-Money Laundering (AML) Policy outlines our procedures and controls to ensure compliance with applicable laws and regulations.
          </p>

          <h2>2. Scope</h2>
          <p>
            This policy applies to all employees, contractors, and business partners of 10 Dollar Fun. It covers all financial transactions and business relationships conducted through our platform.
          </p>

          <h2>3. Know Your Customer (KYC)</h2>
          <p>We implement KYC procedures to verify the identity of our customers:</p>
          <ul>
            <li>Identity verification for all new customers</li>
            <li>Documentation requirements for account opening</li>
            <li>Regular review of customer information</li>
            <li>Enhanced due diligence for high-risk customers</li>
          </ul>

          <h2>4. Transaction Monitoring</h2>
          <p>We monitor transactions for suspicious activity:</p>
          <ul>
            <li>Automated monitoring systems for unusual patterns</li>
            <li>Manual review of flagged transactions</li>
            <li>Regular analysis of transaction data</li>
            <li>Reporting of suspicious activities to relevant authorities</li>
          </ul>

          <h2>5. Prohibited Activities</h2>
          <p>The following activities are strictly prohibited:</p>
          <ul>
            <li>Money laundering and terrorist financing</li>
            <li>Transactions involving illegal funds</li>
            <li>Structuring transactions to avoid reporting requirements</li>
            <li>Using our services for any illegal purposes</li>
          </ul>

          <h2>6. Reporting Requirements</h2>
          <p>
            We comply with all applicable reporting requirements, including:
          </p>
          <ul>
            <li>Suspicious Activity Reports (SARs)</li>
            <li>Currency Transaction Reports (CTRs)</li>
            <li>Other regulatory reporting as required</li>
          </ul>

          <h2>7. Record Keeping</h2>
          <p>
            We maintain comprehensive records of all transactions and customer information as required by law. Records are kept for the minimum period required by applicable regulations.
          </p>

          <h2>8. Training and Awareness</h2>
          <p>
            All employees receive regular training on AML policies and procedures. We ensure ongoing awareness of money laundering risks and detection methods.
          </p>

          <h2>9. Third-Party Relationships</h2>
          <p>
            We conduct due diligence on all third-party service providers and business partners to ensure they meet our AML standards.
          </p>

          <h2>10. Compliance Officer</h2>
          <p>
            We have designated a compliance officer responsible for overseeing our AML program and ensuring ongoing compliance with applicable laws and regulations.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            For questions about our AML policy, please contact: compliance@10dollar.fun
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AMLPolicy;
