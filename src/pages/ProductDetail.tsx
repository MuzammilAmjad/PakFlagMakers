import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';
import toast from 'react-hot-toast';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  stock: number;
  dimensions?: {
    width: number;
    height: number;
    length: number;
    unit: string;
  };
  material?: string;
  country?: string;
  featured: boolean;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Failed to fetch product:', error);
      toast.error('Product not found');
      navigate('/products');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    if (!product) return;

    if (product.stock === 0) {
      toast.error('Product is out of stock');
      return;
    }

    if (quantity > product.stock) {
      toast.error(`Only ${product.stock} items available`);
      return;
    }

    await addToCart(product._id, quantity);
  };

  const getCategoryName = (category: string) => {
    return category.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  if (loading) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </div>
    );
  }

  if (!product) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Product Not Found
            </h2>
            <button
                onClick={() => navigate('/products')}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Back to Products
            </button>
          </div>
        </div>
    );
  }

  return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-1 aspect-h-1 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                    src={product.images?.[selectedImage] || 'https://images.pexels.com/photos/3692522/pexels-photo-3692522.jpeg?auto=compress&cs=tinysrgb&w=800'}
                    alt={product.name}
                    className="w-full h-96 object-cover"
                />
              </div>

              {product.images?.length > 1 && (
                  <div className="flex space-x-2 overflow-x-auto">
                    {product.images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                                selectedImage === index
                                    ? 'border-green-600'
                                    : 'border-gray-300 dark:border-gray-600'
                            }`}
                        >
                          <img
                              src={image}
                              alt={`${product.name} ${index + 1}`}
                              className="w-full h-full object-cover"
                          />
                        </button>
                    ))}
                  </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-medium text-green-600 dark:text-green-400 uppercase tracking-wide">
                  {getCategoryName(product.category)}
                </span>
                  {product.featured && (
                      <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-gray-600 dark:text-gray-400 ml-2">(4.8)</span>
                  </div>
                </div>
              </div>

              <div className="prose dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Product Details */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Product Details
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {product.country && (
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Country:</span>
                        <span className="ml-2 text-gray-900 dark:text-white">{product.country}</span>
                      </div>
                  )}
                  {product.material && (
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Material:</span>
                        <span className="ml-2 text-gray-900 dark:text-white">{product.material}</span>
                      </div>
                  )}
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Stock:</span>
                    <span className="ml-2 text-gray-900 dark:text-white">{product.stock} available</span>
                  </div>
                  {product.dimensions && (
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Dimensions:</span>
                        <span className="ml-2 text-gray-900 dark:text-white">
                      {product.dimensions.width} × {product.dimensions.height}
                          {product.dimensions.length && ` × ${product.dimensions.length}`} {product.dimensions.unit}
                    </span>
                      </div>
                  )}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Quantity:
                  </label>
                  <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      -
                    </button>
                    <input
                        type="number"
                        min="1"
                        max={product.stock}
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, parseInt(e.target.value) || 1)))}
                        className="w-16 px-2 py-2 text-center border-0 bg-transparent text-gray-900 dark:text-white focus:ring-0"
                    />
                    <button
                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                        className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                    className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold transition-colors ${
                        product.stock === 0
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Truck className="h-5 w-5 text-green-600" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span>Quality Guarantee</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <RotateCcw className="h-5 w-5 text-green-600" />
                  <span>30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductDetail;
