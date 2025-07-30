
import Layout from '../components/Layout';

const DMCA = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">DMCA Notice</h1>
          <p className="text-gray-600">Digital Millennium Copyright Act Policy</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
          <h2>1. Copyright Policy</h2>
          <p>
            10 Dollar Fun respects the intellectual property rights of others and expects our users to do the same. We will respond to clear notices of alleged copyright infringement that comply with the Digital Millennium Copyright Act (DMCA).
          </p>

          <h2>2. Filing a DMCA Notice</h2>
          <p>
            If you believe that your copyrighted work has been copied and is accessible on our website in a way that constitutes copyright infringement, please notify our designated agent by providing the following information:
          </p>
          <ul>
            <li>A physical or electronic signature of the copyright owner or authorized agent</li>
            <li>Identification of the copyrighted work claimed to have been infringed</li>
            <li>Identification of the material that is claimed to be infringing and information reasonably sufficient to permit us to locate the material</li>
            <li>Your contact information, including address, telephone number, and email address</li>
            <li>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner</li>
            <li>A statement that the information in the notification is accurate and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner</li>
          </ul>

          <h2>3. Designated Agent</h2>
          <p>Our designated agent for copyright infringement claims is:</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p><strong>DMCA Agent</strong><br />
            Free Universal Network LLC<br />
            Email: dmca@10dollar.fun<br />
            Subject Line: DMCA Takedown Request</p>
          </div>

          <h2>4. Counter-Notification</h2>
          <p>
            If you believe that your content was removed or disabled as a result of a mistake or misidentification, you may file a counter-notification with our designated agent. Your counter-notification must include:
          </p>
          <ul>
            <li>Your physical or electronic signature</li>
            <li>Identification of the content that has been removed or disabled</li>
            <li>A statement under penalty of perjury that you have a good faith belief that the content was removed as a result of mistake or misidentification</li>
            <li>Your name, address, and telephone number</li>
            <li>A statement that you consent to the jurisdiction of the federal district court in Wyoming, USA</li>
          </ul>

          <h2>5. Repeat Infringer Policy</h2>
          <p>
            In accordance with the DMCA and other applicable laws, we will terminate user accounts that are determined to be repeat infringers. We may also limit access to our website and/or terminate the accounts of any users who infringe any intellectual property rights of others.
          </p>

          <h2>6. Modifications</h2>
          <p>
            We reserve the right to modify this DMCA policy at any time. Changes will be posted on this page with an updated revision date.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            For all DMCA-related inquiries, please contact our designated agent at: dmca@10dollar.fun
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DMCA;
