import React from 'react';
import { Link } from 'react-router-dom';
import { Flag, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Flag className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold">Flag Store</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your premier destination for high-quality flags of all types. From table flags to pole flags, 
              we provide exceptional products for every occasion and need.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>123 Flag Street, Banner City, BC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-FLAG</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@flagstore.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-green-400 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/table-flags" className="text-gray-400 hover:text-green-400 transition-colors">
                  Table Flags
                </Link>
              </li>
              <li>
                <Link to="/products/pole-flags" className="text-gray-400 hover:text-green-400 transition-colors">
                  Pole Flags
                </Link>
              </li>
              <li>
                <Link to="/products/hand-flags" className="text-gray-400 hover:text-green-400 transition-colors">
                  Hand Flags
                </Link>
              </li>
              <li>
                <Link to="/products/other-flags" className="text-gray-400 hover:text-green-400 transition-colors">
                  Other Flags
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Flag Store. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Terms & Conditions
              </Link>
              <Link to="/rules" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Rules
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;