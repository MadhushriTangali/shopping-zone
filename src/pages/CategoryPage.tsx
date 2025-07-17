
import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ProductCard from '../components/Products/ProductCard';
import { useProductsByCategory, useCategories, useRatingOptions } from '../hooks/useProducts';
import { Filter, SortAsc, X } from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRating, setSelectedRating] = useState('');

  // Fetch data from Supabase
  const { data: products = [], isLoading: productsLoading } = useProductsByCategory(category || 'all');
  const { data: categories = [], isLoading: categoriesLoading } = useCategories();
  const { data: ratingOptions = [], isLoading: ratingOptionsLoading } = useRatingOptions();

  const categoryMap: Record<string, string> = {
    'books': 'Books',
    'electronics': 'Electronics',
    'clothing': 'Clothing',
    'kitchen': 'Kitchen',
    'toys': 'Toys',
    'kids-wear': 'Kids Wear',
    'watches': 'Watches',
    'accessories': 'Accessories'
  };

  // Set the selected category based on URL parameter
  useEffect(() => {
    if (category && category !== 'all') {
      const mappedCategory = categoryMap[category];
      if (mappedCategory) {
        setSelectedCategory(mappedCategory);
      }
    } else {
      setSelectedCategory('All Categories');
    }
  }, [category]);

  const filteredProducts = useMemo(() => {
    if (productsLoading) return [];
    
    let filtered = [...products];

    console.log('Original products:', filtered.length);
    console.log('Selected category:', selectedCategory);

    // Filter by additional category selection (if different from URL category)
    if (selectedCategory && selectedCategory !== 'All Categories') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by rating
    if (selectedRating) {
      const minRating = parseFloat(selectedRating);
      filtered = filtered.filter(product => product.rating >= minRating);
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    filtered.sort((a, b) => {
      let aValue: number | string = a[sortBy];
      let bValue: number | string = b[sortBy];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    console.log('Filtered products:', filtered.length);
    return filtered;
  }, [products, productsLoading, sortBy, sortOrder, priceRange, selectedCategory, selectedRating]);

  const clearFilters = () => {
    setSelectedCategory(category && category !== 'all' ? categoryMap[category] || 'All Categories' : 'All Categories');
    setSelectedRating('');
    setPriceRange([0, 200000]);
    setSortBy('name');
    setSortOrder('asc');
  };

  const loading = productsLoading || categoriesLoading || ratingOptionsLoading;

  // Convert categories data to match the legacy format (remove duplicate All Categories)
  const categoryOptionsFormatted = [
    { categoryId: "ALL", name: "All Categories" },
    ...categories.map(cat => ({
      categoryId: cat.id,
      name: cat.name
    }))
  ];

  // Convert rating options data to match the legacy format
  const ratingOptionsFormatted = [
    { ratingId: "", name: "All Ratings" },
    ...ratingOptions.map(rating => ({
      ratingId: rating.id,
      imageUrl: rating.image_url || '',
      name: rating.name
    }))
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg">
              Discover amazing products - All prices in Indian Rupees (₹)
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  {categoryOptionsFormatted.map((cat) => (
                    <option key={cat.categoryId} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div className="relative">
                <select
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  {ratingOptionsFormatted.map((rating) => (
                    <option key={rating.ratingId} value={rating.ratingId}>
                      {rating.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="relative">
                <SortAsc className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={`${sortBy}-${sortOrder}`}
                  onChange={(e) => {
                    const [field, order] = e.target.value.split('-');
                    setSortBy(field as 'name' | 'price' | 'rating');
                    setSortOrder(order as 'asc' | 'desc');
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                  <option value="rating-desc">Rating (High to Low)</option>
                  <option value="rating-asc">Rating (Low to High)</option>
                </select>
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="200000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="200000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="flex-1"
                />
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={clearFilters}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              <X className="h-4 w-4" />
              <span>Clear All Filters</span>
            </button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">Loading products...</span>
            </div>
          )}

          {/* Products Grid */}
          {!loading && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* No Products Found */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl text-gray-300 mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or browse other categories.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Results Count */}
              {filteredProducts.length > 0 && (
                <div className="text-center mt-8 text-gray-600">
                  Showing {filteredProducts.length} products
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
