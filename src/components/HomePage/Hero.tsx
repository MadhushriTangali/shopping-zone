
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Shield, Headphones } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              ShopZone
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Your ultimate online marketplace for everything you need. 
            Quality products, unbeatable prices, and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/products"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Shopping
            </Link>
            <Link
              to="/categories"
              className="border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Browse Categories
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
              <Truck className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
            <p className="text-blue-200 text-sm">On orders over $50</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
            <p className="text-blue-200 text-sm">100% secure transactions</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
              <Headphones className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-blue-200 text-sm">Always here to help</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
            <p className="text-blue-200 text-sm">30-day return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
