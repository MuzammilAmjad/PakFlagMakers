import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Terms & Conditions
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Last updated: January 1, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                By accessing and using Flag Store's website and services, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Product Information
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We strive to provide accurate product descriptions and images. However, we do not warrant 
                that product descriptions or other content is accurate, complete, reliable, current, or error-free.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Colors shown in product images may vary from actual products due to monitor settings and 
                manufacturing variations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Ordering and Payment
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                When you place an order, you agree to provide accurate and complete information. We reserve 
                the right to refuse or cancel any order for any reason.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Payment is due at the time of order placement. We accept major credit cards, debit cards, 
                PayPal, and bank transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Shipping and Delivery
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We will ship your order to the address provided during checkout. Delivery times are estimates 
                and may vary based on location and product availability.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Risk of loss and title for items pass to you upon delivery to the carrier.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Returns and Refunds
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We accept returns within 30 days of delivery for unused items in original condition. 
                Custom or personalized flags may not be returnable.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Refunds will be processed within 5-7 business days after we receive the returned item.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Privacy Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Your privacy is important to us. We collect and use your information in accordance with 
                our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                In no event shall Flag Store be liable for any indirect, incidental, special, consequential, 
                or punitive damages arising out of or relating to your use of our products or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Email: legal@flagstore.com<br />
                Phone: +1 (555) 123-FLAG<br />
                Address: 123 Flag Street, Banner City, BC 12345
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;