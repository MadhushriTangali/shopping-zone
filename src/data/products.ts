
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  subcategory: string;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  brand: string;
  features: string[];
  specifications?: Record<string, string>;
}

export const products: Product[] = [
  // Books
  {
    id: '1',
    name: 'The Great Gatsby',
    price: 12.99,
    originalPrice: 16.99,
    description: 'A classic American novel by F. Scott Fitzgerald set in the Jazz Age.',
    category: 'books',
    subcategory: 'fiction',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    images: ['https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400'],
    rating: 4.5,
    reviewCount: 1234,
    stock: 50,
    brand: 'Scribner',
    features: ['Paperback', '180 pages', 'Classic Literature']
  },
  {
    id: '2',
    name: 'To Kill a Mockingbird',
    price: 14.99,
    description: 'Harper Lee\'s Pulitzer Prize-winning novel about racial injustice.',
    category: 'books',
    subcategory: 'fiction',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
    images: ['https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400'],
    rating: 4.8,
    reviewCount: 2156,
    stock: 75,
    brand: 'Harper Perennial',
    features: ['Paperback', '324 pages', 'Pulitzer Prize Winner']
  },
  
  // Electronics
  {
    id: '3',
    name: 'Wireless Bluetooth Headphones',
    price: 89.99,
    originalPrice: 129.99,
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
    category: 'electronics',
    subcategory: 'audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'],
    rating: 4.6,
    reviewCount: 892,
    stock: 120,
    brand: 'AudioTech',
    features: ['Noise Cancellation', '30-hour Battery', 'Bluetooth 5.0', 'Quick Charge']
  },
  {
    id: '4',
    name: 'Smartphone 5G Pro',
    price: 699.99,
    originalPrice: 799.99,
    description: 'Latest 5G smartphone with triple camera system and all-day battery.',
    category: 'electronics',
    subcategory: 'phones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400'],
    rating: 4.4,
    reviewCount: 567,
    stock: 85,
    brand: 'TechPro',
    features: ['5G Ready', 'Triple Camera', '128GB Storage', 'Face ID'],
    specifications: {
      'Screen Size': '6.1 inches',
      'Storage': '128GB',
      'Camera': '48MP Triple Camera',
      'Battery': '4000mAh'
    }
  },

  // Clothing
  {
    id: '5',
    name: 'Men\'s Cotton T-Shirt',
    price: 19.99,
    description: 'Comfortable cotton t-shirt in various colors and sizes.',
    category: 'clothing',
    subcategory: 'mens',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400'],
    rating: 4.3,
    reviewCount: 445,
    stock: 200,
    brand: 'ComfortWear',
    features: ['100% Cotton', 'Machine Washable', 'Available in 8 Colors']
  },
  {
    id: '6',
    name: 'Women\'s Summer Dress',
    price: 49.99,
    originalPrice: 69.99,
    description: 'Elegant summer dress perfect for casual and formal occasions.',
    category: 'clothing',
    subcategory: 'womens',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
    images: ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400'],
    rating: 4.7,
    reviewCount: 389,
    stock: 150,
    brand: 'StyleCo',
    features: ['Breathable Fabric', 'Multiple Sizes', 'Wrinkle Resistant']
  },

  // Kitchen
  {
    id: '7',
    name: 'Stainless Steel Cookware Set',
    price: 149.99,
    originalPrice: 199.99,
    description: '10-piece stainless steel cookware set with non-stick coating.',
    category: 'kitchen',
    subcategory: 'cookware',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400'],
    rating: 4.5,
    reviewCount: 678,
    stock: 45,
    brand: 'KitchenPro',
    features: ['10-Piece Set', 'Non-Stick', 'Dishwasher Safe', 'Oven Safe']
  },
  {
    id: '8',
    name: 'Electric Coffee Maker',
    price: 79.99,
    description: 'Programmable coffee maker with 12-cup capacity and auto-shutoff.',
    category: 'kitchen',
    subcategory: 'appliances',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400'],
    rating: 4.2,
    reviewCount: 334,
    stock: 60,
    brand: 'BrewMaster',
    features: ['12-Cup Capacity', 'Programmable', 'Auto-Shutoff', 'Glass Carafe']
  },

  // Toys
  {
    id: '9',
    name: 'Building Blocks Set',
    price: 29.99,
    description: 'Creative building blocks set for children aged 3-10 years.',
    category: 'toys',
    subcategory: 'educational',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'],
    rating: 4.8,
    reviewCount: 567,
    stock: 180,
    brand: 'PlayTime',
    features: ['500+ Pieces', 'Educational', 'Safe Materials', 'Age 3-10']
  },
  {
    id: '10',
    name: 'Remote Control Car',
    price: 45.99,
    originalPrice: 59.99,
    description: 'High-speed remote control car with LED lights and rechargeable battery.',
    category: 'toys',
    subcategory: 'vehicles',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'],
    rating: 4.4,
    reviewCount: 289,
    stock: 95,
    brand: 'SpeedToys',
    features: ['Remote Control', 'LED Lights', 'Rechargeable', 'High Speed']
  },

  // Kids Wear
  {
    id: '11',
    name: 'Kids Cotton Pajama Set',
    price: 24.99,
    description: 'Soft cotton pajama set for kids with fun cartoon prints.',
    category: 'kids-wear',
    subcategory: 'sleepwear',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400',
    images: ['https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400'],
    rating: 4.6,
    reviewCount: 234,
    stock: 120,
    brand: 'KidsComfort',
    features: ['100% Cotton', 'Cartoon Prints', 'Machine Washable', 'Sizes 2T-8T']
  },
  {
    id: '12',
    name: 'Kids Sneakers',
    price: 39.99,
    description: 'Comfortable and durable sneakers perfect for active kids.',
    category: 'kids-wear',
    subcategory: 'shoes',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400',
    images: ['https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400'],
    rating: 4.3,
    reviewCount: 456,
    stock: 80,
    brand: 'ActiveKids',
    features: ['Durable', 'Non-Slip Sole', 'Breathable', 'Multiple Colors']
  },

  // Watches
  {
    id: '13',
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: 249.99,
    description: 'Advanced fitness watch with heart rate monitor and GPS tracking.',
    category: 'watches',
    subcategory: 'smart',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'],
    rating: 4.5,
    reviewCount: 892,
    stock: 65,
    brand: 'FitTech',
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Waterproof', '7-Day Battery']
  },
  {
    id: '14',
    name: 'Classic Analog Watch',
    price: 129.99,
    description: 'Elegant analog watch with leather strap and water resistance.',
    category: 'watches',
    subcategory: 'analog',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400',
    images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400'],
    rating: 4.7,
    reviewCount: 445,
    stock: 40,
    brand: 'TimeClassic',
    features: ['Leather Strap', 'Water Resistant', 'Analog Display', 'Classic Design']
  },

  // Accessories
  {
    id: '15',
    name: 'Leather Wallet',
    price: 49.99,
    description: 'Genuine leather wallet with multiple card slots and coin pocket.',
    category: 'accessories',
    subcategory: 'wallets',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400'],
    rating: 4.4,
    reviewCount: 267,
    stock: 90,
    brand: 'LeatherCraft',
    features: ['Genuine Leather', 'Multiple Card Slots', 'Coin Pocket', 'RFID Blocking']
  },
  {
    id: '16',
    name: 'Sunglasses UV Protection',
    price: 34.99,
    originalPrice: 49.99,
    description: 'Stylish sunglasses with UV protection and polarized lenses.',
    category: 'accessories',
    subcategory: 'eyewear',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
    images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400'],
    rating: 4.2,
    reviewCount: 156,
    stock: 110,
    brand: 'SunStyle',
    features: ['UV Protection', 'Polarized Lenses', 'Lightweight Frame', 'Case Included']
  }
];

// Add more products to reach 100+ items
const additionalProducts: Product[] = [
  // More Books
  {
    id: '17', name: 'Harry Potter Collection', price: 89.99, originalPrice: 120.00,
    description: 'Complete Harry Potter book series in hardcover edition.',
    category: 'books', subcategory: 'fiction',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
    images: ['https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400'],
    rating: 4.9, reviewCount: 3456, stock: 30, brand: 'Scholastic',
    features: ['Complete Series', 'Hardcover', 'Collector\'s Edition']
  },
  {
    id: '18', name: 'Programming Guide: JavaScript', price: 39.99,
    description: 'Complete guide to modern JavaScript programming.',
    category: 'books', subcategory: 'technical',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    images: ['https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400'],
    rating: 4.6, reviewCount: 789, stock: 45, brand: 'TechBooks',
    features: ['Latest ES6+', '500+ Pages', 'Code Examples']
  },
  
  // More Electronics
  {
    id: '19', name: '4K Gaming Monitor', price: 349.99, originalPrice: 429.99,
    description: '27-inch 4K gaming monitor with 144Hz refresh rate.',
    category: 'electronics', subcategory: 'monitors',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
    images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400'],
    rating: 4.7, reviewCount: 456, stock: 25, brand: 'GameDisplay',
    features: ['4K Resolution', '144Hz', 'HDR Support', 'Gaming Mode']
  },
  {
    id: '20', name: 'Wireless Mouse', price: 29.99,
    description: 'Ergonomic wireless mouse with precision tracking.',
    category: 'electronics', subcategory: 'accessories',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
    images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400'],
    rating: 4.3, reviewCount: 234, stock: 150, brand: 'TechMouse',
    features: ['Wireless', 'Ergonomic', 'Long Battery Life', 'Precision Tracking']
  }
];

// Generate more products programmatically to reach 100+
for (let i = 21; i <= 120; i++) {
  const categories = ['books', 'electronics', 'clothing', 'kitchen', 'toys', 'kids-wear', 'watches', 'accessories'];
  const category = categories[i % categories.length];
  
  additionalProducts.push({
    id: i.toString(),
    name: `${category.charAt(0).toUpperCase() + category.slice(1)} Product ${i}`,
    price: Math.floor(Math.random() * 200) + 10,
    originalPrice: Math.floor(Math.random() * 200) + 50,
    description: `High-quality ${category} product with excellent features and great value.`,
    category,
    subcategory: 'general',
    image: `https://images.unsplash.com/photo-${1500000000000 + i}?w=400`,
    images: [`https://images.unsplash.com/photo-${1500000000000 + i}?w=400`],
    rating: 3.5 + Math.random() * 1.5,
    reviewCount: Math.floor(Math.random() * 1000) + 50,
    stock: Math.floor(Math.random() * 200) + 10,
    brand: `Brand${i % 10 + 1}`,
    features: ['High Quality', 'Great Value', 'Popular Choice']
  });
}

export const allProducts = [...products, ...additionalProducts];

export const getProductsByCategory = (category: string) => {
  return allProducts.filter(product => product.category === category);
};

export const searchProducts = (query: string) => {
  return allProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) ||
    product.brand.toLowerCase().includes(query.toLowerCase())
  );
};

export const getProductById = (id: string) => {
  return allProducts.find(product => product.id === id);
};

export const getFeaturedProducts = () => {
  return allProducts.filter(product => product.rating >= 4.5).slice(0, 8);
};

export const getBestDeals = () => {
  return allProducts.filter(product => product.originalPrice && product.originalPrice > product.price).slice(0, 6);
};
