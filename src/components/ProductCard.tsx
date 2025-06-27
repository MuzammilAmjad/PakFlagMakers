import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import toast from 'react-hot-toast';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images?: string[]; // make optional to prevent TypeError
  stock: number;
  country?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (product.stock === 0) {
      toast.error('Product is out of stock');
      return;
    }

    await addToCart(product._id);
  };

  return (
      <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <Link to={`/product/${product._id}`} className="block">
          <div className="relative overflow-hidden aspect-w-16 aspect-h-12">
            <img
                src={product.images?.[0] || 'https://images.pexels.com/photos/3692522/pexels-photo-3692522.jpeg?auto=compress&cs=tinysrgb&w=500'}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {product.stock === 0 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white font-semibold">Out of Stock</span>
                </div>
            )}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
                <Eye className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              </div>
            </div>
          </div>
        </Link>

        <div className="p-6">
          <div className="mb-2">
          <span className="text-xs font-medium text-green-600 dark:text-green-400 uppercase tracking-wide">
            {product.category.replace('-', ' ')}
          </span>
          </div>

          <Link to={`/product/${product._id}`}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 hover:text-green-600 dark:hover:text-green-400 transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          {product.country && (
              <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                Country: {product.country}
              </p>
          )}

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${product.price?.toFixed(2) || '0.00'}
            </span>
              <span className="text-xs text-gray-500 dark:text-gray-500">
              Stock: {product.stock}
            </span>
            </div>

            <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    product.stock === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="text-sm font-medium">Add</span>
            </button>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;
