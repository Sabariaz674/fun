
import Layout from '../components/Layout';

const IncomeDisclaimer = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Income Disclaimer</h1>
          <p className="text-gray-600">Important Information About Earnings</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
          <h2>1. No Guarantee of Income</h2>
          <p>
            10 Dollar Fun makes no guarantee or warranty that you will earn any specific amount of money through our affiliate program or by using our services. Any income examples or success stories shared are not typical results and should not be considered as promises or guarantees of earnings.
          </p>

          <h2>2. Individual Results May Vary</h2>
          <p>
            Your success depends on various factors including but not limited to:
          </p>
          <ul>
            <li>Your level of commitment and effort</li>
            <li>Your marketing skills and experience</li>
            <li>Your audience and network</li>
            <li>Market conditions and competition</li>
            <li>Your ability to implement strategies effectively</li>
          </ul>

          <h2>3. No Typical Results</h2>
          <p>
            There are no "typical" results from our affiliate program. Some affiliates may earn nothing, while others may earn substantial amounts. The success stories and testimonials presented are exceptional results and not representative of the average user experience.
          </p>

          <h2>4. Forward-Looking Statements</h2>
          <p>
            Any statements regarding potential earnings or income projections are forward-looking statements that involve risks and uncertainties. Actual results may differ materially from those projected.
          </p>

          <h2>5. Your Investment</h2>
          <p>
            Success in our affiliate program requires time, effort, and potentially financial investment. You should be prepared to invest these resources without any guarantee of return.
          </p>

          <h2>6. No Employment Relationship</h2>
          <p>
            Participation in our affiliate program does not create an employment relationship. You are an independent contractor responsible for your own taxes, legal compliance, and business operations.
          </p>

          <h2>7. Due Diligence</h2>
          <p>
            We encourage you to conduct your own due diligence before participating in our affiliate program. Consider your financial situation, risk tolerance, and ability to sustain potential losses.
          </p>

          <h2>8. Past Performance</h2>
          <p>
            Past performance of other affiliates is not indicative of future results. Market conditions, competition, and other factors may affect your ability to achieve similar results.
          </p>

          <h2>9. Liability Limitation</h2>
          <p>
            10 Dollar Fun shall not be liable for any losses, damages, or expenses incurred as a result of participating in our affiliate program or using our services.
          </p>

          <h2>10. Modification</h2>
          <p>
            We reserve the right to modify this income disclaimer at any time. Continued participation in our program constitutes acceptance of any changes.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            If you have questions about this income disclaimer, please contact us at: support@10dollar.fun
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default IncomeDisclaimer;
