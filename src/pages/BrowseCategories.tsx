
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { Book, Smartphone, Shirt, ChefHat, Gamepad2, Baby, Watch, Glasses } from 'lucide-react';

const BrowseCategories = () => {
  const categories = [
    { 
      name: 'Books', 
      icon: Book, 
      slug: 'books', 
      color: 'from-purple-500 to-purple-600',
      description: 'Discover amazing books across all genres',
      count: '1,200+ items'
    },
    { 
      name: 'Electronics', 
      icon: Smartphone, 
      slug: 'electronics', 
      color: 'from-blue-500 to-blue-600',
      description: 'Latest gadgets and electronic devices',
      count: '850+ items'
    },
    { 
      name: 'Clothing', 
      icon: Shirt, 
      slug: 'clothing', 
      color: 'from-pink-500 to-pink-600',
      description: 'Fashion and apparel for everyone',
      count: '2,100+ items'
    },
    { 
      name: 'Kitchen', 
      icon: ChefHat, 
      slug: 'kitchen', 
      color: 'from-green-500 to-green-600',
      description: 'Kitchen essentials and cookware',
      count: '650+ items'
    },
    { 
      name: 'Toys', 
      icon: Gamepad2, 
      slug: 'toys', 
      color: 'from-yellow-500 to-yellow-600',
      description: 'Fun toys and games for all ages',
      count: '750+ items'
    },
    { 
      name: 'Kids Wear', 
      icon: Baby, 
      slug: 'kids-wear', 
      color: 'from-indigo-500 to-indigo-600',
      description: 'Comfortable clothing for children',
      count: '450+ items'
    },
    { 
      name: 'Watches', 
      icon: Watch, 
      slug: 'watches', 
      color: 'from-red-500 to-red-600',
      description: 'Stylish watches and timepieces',
      count: '300+ items'
    },
    { 
      name: 'Accessories', 
      icon: Glasses, 
      slug: 'accessories', 
      color: 'from-teal-500 to-teal-600',
      description: 'Fashion accessories and more',
      count: '890+ items'
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Browse Categories
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover thousands of products across our wide range of categories. 
              Find exactly what you're looking for with ease.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.slug}
                  to={`/category/${category.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full">
                    <div className={`bg-gradient-to-r ${category.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    
                    <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="bg-gray-100 rounded-full px-4 py-2 inline-block">
                      <span className="text-gray-700 font-medium text-sm">
                        {category.count}
                      </span>
                    </div>
                    
                    <div className="mt-6">
                      <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold group-hover:bg-blue-700 transition-colors">
                        Shop Now
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Featured Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Use our powerful search feature to find products across all categories. 
              We have thousands of items waiting to be discovered!
            </p>
            <Link
              to="/"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Search All Products
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BrowseCategories;
