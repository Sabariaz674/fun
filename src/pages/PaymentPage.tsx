import React, { useState } from "react";
import Layout from "../components/Layout";

const PaymentPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Payoneer");
  const [currency, setCurrency] = useState("USD");

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Payment Method: ${selectedPaymentMethod}, Currency: ${currency}`);
    // Here, you'd typically call an API to process the payment.
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment</h1>
        <p className="text-xl text-gray-600 mb-12">Select your payment method and currency to proceed.</p>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-2">
                Payment Method
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={selectedPaymentMethod}
                onChange={handlePaymentMethodChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Payoneer">Payoneer</option>
                <option value="PayPal">PayPal</option>
                <option value="Cryptocurrency">Cryptocurrency</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-2">
                Select Currency
              </label>
              <select
                id="currency"
                name="currency"
                value={currency}
                onChange={handleCurrencyChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="CAD">CAD</option>
              </select>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-600">
                A 5% currency exchange fee will be added if you choose a currency other than USD. If you're in the European Union, a 20% VAT is added.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Proceed with Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentPage;
