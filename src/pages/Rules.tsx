import React from 'react';

const Rules: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Store Rules & Guidelines
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Please read and follow these rules to ensure a positive experience for all customers.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Customer Conduct
              </h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Treat all staff and other customers with respect and courtesy</li>
                <li>Provide accurate information when placing orders</li>
                <li>Report any issues or concerns promptly to our customer service team</li>
                <li>Respect intellectual property rights and flag designs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Order Guidelines
              </h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Double-check your order details before confirming purchase</li>
                <li>Ensure shipping address is complete and accurate</li>
                <li>Contact us immediately if you need to modify or cancel an order</li>
                <li>Custom orders may have longer processing times</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Product Use
              </h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Use flags in accordance with local laws and regulations</li>
                <li>Handle flags with care to maintain their quality and appearance</li>
                <li>Follow care instructions provided with each product</li>
                <li>Report any defects or quality issues within 48 hours of delivery</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Returns & Exchanges
              </h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Items must be returned within 30 days of delivery</li>
                <li>Products must be in original, unused condition with tags attached</li>
                <li>Customer is responsible for return shipping costs unless item is defective</li>
                <li>Custom or personalized items are not eligible for return</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Account Responsibilities
              </h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Keep your account information up to date</li>
                <li>Protect your login credentials and don't share them with others</li>
                <li>Notify us immediately of any unauthorized account access</li>
                <li>You are responsible for all activities under your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Prohibited Activities
              </h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Using our products for illegal or harmful purposes</li>
                <li>Reselling our products without authorization</li>
                <li>Attempting to reverse engineer or copy our designs</li>
                <li>Misusing our website or attempting to access restricted areas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Enforcement
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Violation of these rules may result in:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Order cancellation</li>
                <li>Account suspension or termination</li>
                <li>Refusal of future service</li>
                <li>Legal action if necessary</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Questions or Concerns
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                If you have questions about these rules or need clarification, please contact us:
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Email: support@flagstore.com<br />
                Phone: +1 (555) 123-FLAG<br />
                Hours: Monday-Friday, 9:00 AM - 6:00 PM EST
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;