
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const categories = [
    'Books', 'Electronics', 'Clothing', 'Kitchen', 'Toys', 'Kids Wear', 'Watches', 'Accessories'
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Get user's display name from Supabase user object
  const getUserDisplayName = () => {
    if (!user) return 'User';
    return user.user_metadata?.full_name || user.email?.split('@')[0] || 'User';
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white sticky top-0 z-50 shadow-lg">
      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 px-3 py-2 rounded-lg font-bold text-xl">
              ShopZone
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, brands and more..."
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md transition-colors"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="hidden md:flex items-center space-x-4">
                <span className="text-sm">Hello, {getUserDisplayName()}</span>
                <Link to="/wishlist" className="relative hover:text-orange-300 transition-colors">
                  <Heart className="h-6 w-6" />
                </Link>
                <Link to="/cart" className="relative hover:text-orange-300 transition-colors">
                  <ShoppingCart className="h-6 w-6" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
                <button
                  onClick={logout}
                  className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md transition-colors text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link
                  to="/login"
                  className="flex items-center space-x-1 hover:text-orange-300 transition-colors"
                >
                  <User className="h-6 w-6" />
                  <span className="text-sm">Sign In</span>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded-md transition-colors"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Categories bar */}
      <div className="bg-blue-800 border-t border-blue-700">
        <div className="container mx-auto px-4">
          <div className="flex space-x-6 py-2 overflow-x-auto">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase().replace(' ', '-')}`}
                className="whitespace-nowrap text-sm hover:text-orange-300 transition-colors py-1"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 border-t border-blue-700">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {isAuthenticated ? (
              <>
                <div className="text-sm">Hello, {getUserDisplayName()}</div>
                <Link to="/wishlist" className="flex items-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>Wishlist</span>
                </Link>
                <Link to="/cart" className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Cart ({cartItemCount})</span>
                </Link>
                <button onClick={logout} className="text-left w-full">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
