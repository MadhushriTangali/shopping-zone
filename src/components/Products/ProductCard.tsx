
import React from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
  reviews: number;
  stock: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      stock: product.stock
    });
  };

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
        </button>
        {product.stock < 10 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Only {product.stock} left
          </span>
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</span>
          <h3 className="font-semibold text-gray-900 text-sm mt-1 line-clamp-2 h-10">{product.name}</h3>
        </div>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700 ml-1">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500 ml-2">({product.reviews.toLocaleString()} reviews)</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="text-xl font-bold text-blue-600">{formatPrice(product.price)}</div>
          <div className="text-sm text-gray-500">Stock: {product.stock}</div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">{product.description}</p>
        
        <button
          onClick={handleAddToCart}
          disabled={!isAuthenticated || product.stock === 0}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {!isAuthenticated ? 'Login to Add' : product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
