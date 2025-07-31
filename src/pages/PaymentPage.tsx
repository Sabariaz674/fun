import React, { useState } from "react";
import Layout from "../components/Layout";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Processing ${paymentMethod} payment in ${currency}`);
    // Here you will call payment API
  };

  const renderPaymentFields = () => {
    switch (paymentMethod) {
      case "PayPal":
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
      case "Payoneer":
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
      case "Cryptocurrency":
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

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
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
