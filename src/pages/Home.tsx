
import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/HomePage/Hero';
import CategorySection from '../components/HomePage/CategorySection';
import FeaturedProducts from '../components/HomePage/FeaturedProducts';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
    </Layout>
  );
};

export default Home;
