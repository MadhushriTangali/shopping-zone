
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">About NxtTrends</h3>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Your trusted online marketplace for all your shopping needs. 
              Quality products, great prices, and excellent service delivered right to your doorstep.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 NxtTrends. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
