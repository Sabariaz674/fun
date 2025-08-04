import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout'; // Ensure this is your Layout component
import { loadPayPalScript } from './paypalHelper'; // Helper to load PayPal SDK
import { db } from './firebase'; // Firebase Firestore instance
import { doc, setDoc } from 'firebase/firestore'; // Firestore methods

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    planName: '',
    planPrice: 0,
  });
  const [isPayPalReady, setPayPalReady] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('Basic');

  // Define available plans
  const plans = [
    { name: 'Active Fun Member/Monthly', price: 10 },
    { name: 'Promo Page/Yearly', price: 10 },
    
  ];

  // Load PayPal SDK on component mount
  useEffect(() => {
    loadPayPalScript()
      .then(() => setPayPalReady(true))
      .catch((err) => {
        console.error('Error loading PayPal SDK:', err);
        setPaymentError('Failed to load PayPal SDK');
      });
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle plan selection change
  const handlePlanChange = (e) => {
    const selected = e.target.value;
    const selectedPlanDetails = plans.find((plan) => plan.name === selected);
    setSelectedPlan(selected);
    setFormData({
      ...formData,
      planName: selectedPlanDetails.name,
      planPrice: selectedPlanDetails.price,
    });
  };

  // Handle payment method submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentError('');
    if (!formData.username || !formData.email) {
      setPaymentError('Please enter your username and email.');
      return;
    }

    if (paymentMethod === 'PayPal') {
      // Simulate PayPal payment
      alert(`Processing PayPal payment for the ${formData.planName} plan at ${currency} ${formData.planPrice}`);
    } else if (paymentMethod === 'Payoneer') {
      // Simulate Payoneer payment
      alert(`Processing Payoneer payment for the ${formData.planName} plan at ${currency} ${formData.planPrice}`);
    } else if (paymentMethod === 'Cryptocurrency') {
      // Simulate cryptocurrency payment
      alert(`Processing Cryptocurrency payment for the ${formData.planName} plan at ${currency} ${formData.planPrice}`);
    } else {
      setPaymentError('Please select a valid payment method.');
    }
  };

  // Handle PayPal success
  const handlePayPalSuccess = (details) => {
    console.log('Payment Successful', details);

    // Update Firestore with payment details
    updateFirestoreWithPaymentDetails(details);
    sendAdminNotification(details);
  };

  // Update Firestore with payment details
  const updateFirestoreWithPaymentDetails = (details) => {
    const paymentData = {
      username: formData.username,
      email: formData.email,
      paymentMethod: 'PayPal',
      amount: details.purchase_units[0].amount.value,
      status: 'Completed',
      currency: details.purchase_units[0].amount.currency_code,
      planName: formData.planName,
      planPrice: formData.planPrice,
    };

    // Save payment data to Firestore
    const docRef = doc(db, 'payments', `${new Date().getTime()}`);
    setDoc(docRef, paymentData)
      .then(() => console.log('Payment data saved to Firestore'))
      .catch((error) => console.error('Error saving payment data:', error));
  };

  // Simulate sending notification to admin
  const sendAdminNotification = (details) => {
    console.log(`Admin notified: Payment of ${details.purchase_units[0].amount.value} USD received`);
  };

  // Render payment fields based on selected payment method
  const renderPaymentFields = () => {
    switch (paymentMethod) {
      case 'PayPal':
        return (
          <>
            <label className="block text-sm font-medium text-gray-700 mb-1">PayPal Email</label>
            <input
              type="email"
              name="paypalEmail"
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border rounded-lg"
              placeholder="your-email@example.com"
              required
            />
          </>
        );
      case 'Payoneer':
        return (
          <>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payoneer Email</label>
            <input
              type="email"
              name="payoneerEmail"
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border rounded-lg"
              placeholder="your-email@example.com"
              required
            />
          </>
        );
      case 'Cryptocurrency':
        return (
          <>
            <label className="block text-sm font-medium text-gray-700 mb-1">Wallet Address</label>
            <input
              type="text"
              name="wallet"
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border rounded-lg"
              placeholder="0xABC...123"
              required
            />
            <label className="block text-sm font-medium text-gray-700 mb-1">Crypto Type</label>
            <select
              name="cryptoType"
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border rounded-lg"
            >
              <option value="BTC">Bitcoin</option>
              <option value="ETH">Ethereum</option>
              <option value="USDT">USDT</option>
            </select>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-4">Make a Payment</h1>
        <p className="text-gray-600 mb-6">Select a payment method and enter required details.</p>

        {/* Display error if there is any */}
        {paymentError && <p className="text-red-600">{paymentError}</p>}

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border rounded-lg"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Plan</label>
            <select
              name="plan"
              onChange={handlePlanChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            >
              {plans.map((plan) => (
                <option key={plan.name} value={plan.name}>
                  {plan.name} - ${plan.price}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            >
              <option value="">-- Select --</option>
              <option value="PayPal">PayPal</option>
              <option value="Payoneer">Payoneer</option>
              <option value="Cryptocurrency">Cryptocurrency</option>
            </select>
          </div>

          {paymentMethod && (
            <div className="transition-all duration-300">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="CAD">CAD</option>
                </select>
              </div>

              {/* Render dynamic payment fields */}
              {renderPaymentFields()}

              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Proceed with Payment
              </button>
            </div>
          )}
        </form>
      </div>
    </Layout>
  );
};

export default PaymentPage;
