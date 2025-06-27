import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: '10,000+', label: 'Happy Customers' },
    { icon: <Award className="h-8 w-8" />, number: '15+', label: 'Years Experience' },
    { icon: <Globe className="h-8 w-8" />, number: '50+', label: 'Countries Served' },
    { icon: <Heart className="h-8 w-8" />, number: '99%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Flag Store
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            We're passionate about providing the highest quality flags for every occasion, 
            from corporate events to personal celebrations.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Founded in 2009, Flag Store began as a small family business with a simple mission: 
                  to provide high-quality flags that represent pride, unity, and celebration.
                </p>
                <p>
                  Over the years, we've grown from a local flag shop to a trusted online retailer 
                  serving customers worldwide. Our commitment to quality craftsmanship and exceptional 
                  customer service has remained constant throughout our journey.
                </p>
                <p>
                  Today, we offer an extensive collection of flags for every need - from elegant 
                  table displays for corporate events to durable outdoor flags that withstand the elements.
                </p>
              </div>
            </div>
            <div className="lg:order-first">
              <img
                src="https://images.pexels.com/photos/3692522/pexels-photo-3692522.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our workshop"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Numbers that tell our story
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-green-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              What drives us every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Quality First
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We use only the finest materials and employ skilled craftspeople to ensure 
                every flag meets our high standards.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Customer Dedication
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your satisfaction is our priority. We work closely with each customer to 
                ensure they find the perfect flag for their needs.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Global Reach
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                From local communities to international organizations, we're proud to 
                serve customers around the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;