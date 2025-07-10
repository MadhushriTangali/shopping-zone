
import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/HomePage/Hero';
import FeaturedProducts from '../components/HomePage/FeaturedProducts';
import CategorySection from '../components/HomePage/CategorySection';

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section with updated title */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to NxtTrendz Pro
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your ultimate destination for premium shopping experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/browse-categories"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Shopping
              </a>
              <a
                href="/category/electronics"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Browse Electronics
              </a>
            </div>
          </div>
        </section>

        <Hero />
        <CategorySection />
        <FeaturedProducts />
      </div>
    </Layout>
  );
};

export default Home;
