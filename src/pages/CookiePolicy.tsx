
import Layout from '../components/Layout';

const CookiePolicy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-gray-600">Last updated: January 2025</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li><strong>Essential cookies:</strong> These are necessary for the website to function properly</li>
            <li><strong>Analytics cookies:</strong> These help us understand how visitors interact with our website</li>
            <li><strong>Functionality cookies:</strong> These allow the website to remember choices you make</li>
            <li><strong>Advertising cookies:</strong> These are used to deliver relevant advertisements</li>
          </ul>

          <h2>3. Types of Cookies We Use</h2>
          
          <h3>Essential Cookies</h3>
          <p>These cookies are strictly necessary for the operation of our website. They include:</p>
          <ul>
            <li>Session cookies for user authentication</li>
            <li>Security cookies to prevent fraudulent use</li>
            <li>Load balancing cookies to distribute requests</li>
          </ul>

          <h3>Analytics Cookies</h3>
          <p>We use analytics cookies to collect information about how visitors use our website:</p>
          <ul>
            <li>Google Analytics cookies to track website usage</li>
            <li>Performance monitoring cookies</li>
            <li>User behavior tracking cookies</li>
          </ul>

          <h3>Functionality Cookies</h3>
          <p>These cookies allow our website to remember choices you make:</p>
          <ul>
            <li>Language preference cookies</li>
            <li>Region or country selection cookies</li>
            <li>User interface customization cookies</li>
          </ul>

          <h2>4. Third-Party Cookies</h2>
          <p>
            We may also use third-party cookies from trusted partners for analytics, advertising, and social media features. These third parties may collect information about your online activities across different websites.
          </p>

          <h2>5. Managing Cookies</h2>
          <p>
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
          </p>

          <h2>6. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed about our use of cookies.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at: support@10dollar.fun
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CookiePolicy;
