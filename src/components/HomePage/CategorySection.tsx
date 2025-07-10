
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Smartphone, Shirt, ChefHat, Gamepad2, Baby, Watch, Glasses } from 'lucide-react';

const CategorySection = () => {
  const categories = [
    { name: 'Books', icon: Book, slug: 'books', color: 'from-purple-500 to-purple-600' },
    { name: 'Electronics', icon: Smartphone, slug: 'electronics', color: 'from-blue-500 to-blue-600' },
    { name: 'Clothing', icon: Shirt, slug: 'clothing', color: 'from-pink-500 to-pink-600' },
    { name: 'Kitchen', icon: ChefHat, slug: 'kitchen', color: 'from-green-500 to-green-600' },
    { name: 'Toys', icon: Gamepad2, slug: 'toys', color: 'from-yellow-500 to-yellow-600' },
    { name: 'Kids Wear', icon: Baby, slug: 'kids-wear', color: 'from-indigo-500 to-indigo-600' },
    { name: 'Watches', icon: Watch, slug: 'watches', color: 'from-red-500 to-red-600' },
    { name: 'Accessories', icon: Glasses, slug: 'accessories', color: 'from-teal-500 to-teal-600' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our wide range of products across different categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <div className={`bg-gradient-to-r ${category.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
