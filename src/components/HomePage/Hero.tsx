
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Shield, Headphones } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Welcome to <span className="text-orange-400">NxtTrendz Pro</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover amazing products at unbeatable prices. Shop from thousands of items across multiple categories with fast delivery and secure payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/browse-categories"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Link>
              <Link
                to="/category/electronics"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
              >
                Explore Electronics
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop"
                alt="Shopping"
                className="rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=300&h=200&fit=crop"
                alt="Products"
                className="rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8"
              />
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-blue-700">
          <div className="text-center">
            <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
            <p className="text-blue-200">Free shipping on orders above ₹500</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-blue-200">100% secure and trusted payment methods</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-blue-200">Round the clock customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
