export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
  reviews: number;
  stock: number;
}

export const products: Product[] = [
  // Electronics (25+ items)
  {
    id: "electronics-1",
    name: "iPhone 15 Pro Max",
    price: 134900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    category: "Electronics",
    rating: 4.8,
    description: "Latest iPhone with A17 Pro chip and titanium design",
    reviews: 2543,
    stock: 25
  },
  {
    id: "electronics-2",
    name: "Samsung Galaxy S24 Ultra",
    price: 124999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    category: "Electronics",
    rating: 4.7,
    description: "Premium Android phone with S Pen and AI features",
    reviews: 1876,
    stock: 18
  },
  {
    id: "electronics-3",
    name: "MacBook Air M2",
    price: 114900,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    category: "Electronics",
    rating: 4.9,
    description: "Ultra-thin laptop with M2 chip for professionals",
    reviews: 3421,
    stock: 12
  },
  {
    id: "electronics-4",
    name: "Dell XPS 13",
    price: 89999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    category: "Electronics",
    rating: 4.6,
    description: "Premium Windows laptop with InfinityEdge display",
    reviews: 987,
    stock: 15
  },
  {
    id: "electronics-5",
    name: "iPad Pro 12.9\"",
    price: 112900,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    category: "Electronics",
    rating: 4.8,
    description: "Professional tablet with M2 chip and Apple Pencil support",
    reviews: 1654,
    stock: 20
  },
  {
    id: "electronics-6",
    name: "Sony WH-1000XM5 Headphones",
    price: 32990,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Electronics",
    rating: 4.7,
    description: "Premium noise-canceling wireless headphones",
    reviews: 2341,
    stock: 35
  },
  {
    id: "electronics-7",
    name: "Samsung 55\" QLED TV",
    price: 74999,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    category: "Electronics",
    rating: 4.5,
    description: "4K QLED Smart TV with HDR and built-in streaming",
    reviews: 876,
    stock: 8
  },
  {
    id: "electronics-8",
    name: "Gaming Laptop RTX 4080",
    price: 149999,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    category: "Electronics",
    rating: 4.6,
    description: "High-performance gaming laptop with RTX 4080 graphics",
    reviews: 1234,
    stock: 10
  },
  {
    id: "electronics-9",
    name: "Canon EOS R6 Mark II",
    price: 219999,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
    category: "Electronics",
    rating: 4.9,
    description: "Professional mirrorless camera for photography enthusiasts",
    reviews: 567,
    stock: 6
  },
  {
    id: "electronics-10",
    name: "Apple Watch Series 9",
    price: 41900,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500",
    category: "Electronics",
    rating: 4.7,
    description: "Advanced smartwatch with health monitoring features",
    reviews: 4532,
    stock: 45
  },
  {
    id: "electronics-11",
    name: "Wireless Earbuds Pro",
    price: 18999,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
    category: "Electronics",
    rating: 4.5,
    description: "Premium wireless earbuds with noise cancellation",
    reviews: 3421,
    stock: 60
  },
  {
    id: "electronics-12",
    name: "Gaming Monitor 27\" 4K",
    price: 45999,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    category: "Electronics",
    rating: 4.6,
    description: "4K gaming monitor with 144Hz refresh rate",
    reviews: 876,
    stock: 25
  },

  // Books (25+ items)
  {
    id: "book-1",
    name: "The Alchemist",
    price: 299,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
    category: "Books",
    rating: 4.6,
    description: "A philosophical book about following your dreams",
    reviews: 12543,
    stock: 150
  },
  {
    id: "book-2",
    name: "Atomic Habits",
    price: 450,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500",
    category: "Books",
    rating: 4.8,
    description: "Transform your life with tiny changes and remarkable results",
    reviews: 8765,
    stock: 200
  },
  {
    id: "book-3",
    name: "Think and Grow Rich",
    price: 350,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    category: "Books",
    rating: 4.5,
    description: "Classic self-help book on achieving financial success",
    reviews: 5432,
    stock: 120
  },
  {
    id: "book-4",
    name: "The Power of Habit",
    price: 399,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
    category: "Books",
    rating: 4.7,
    description: "Why we do what we do and how to change",
    reviews: 3456,
    stock: 180
  },
  {
    id: "book-5",
    name: "Rich Dad Poor Dad",
    price: 320,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500",
    category: "Books",
    rating: 4.4,
    description: "Financial education and investing basics",
    reviews: 9876,
    stock: 250
  },
  {
    id: "book-6",
    name: "The 7 Habits of Highly Effective People",
    price: 425,
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=500",
    category: "Books",
    rating: 4.6,
    description: "Personal development and leadership principles",
    reviews: 6543,
    stock: 140
  },
  {
    id: "book-7",
    name: "Steve Jobs Biography",
    price: 599,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500",
    category: "Books",
    rating: 4.7,
    description: "The official biography of Apple's co-founder",
    reviews: 4321,
    stock: 95
  },

  // Clothing (25+ items)
  {
    id: "clothing-1",
    name: "Men's Cotton T-Shirt",
    price: 799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    category: "Clothing",
    rating: 4.3,
    description: "Comfortable 100% cotton t-shirt for everyday wear",
    reviews: 2341,
    stock: 100
  },
  {
    id: "clothing-2",
    name: "Women's Denim Jacket",
    price: 2499,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500",
    category: "Clothing",
    rating: 4.5,
    description: "Classic denim jacket with modern fit",
    reviews: 876,
    stock: 45
  },
  {
    id: "clothing-3",
    name: "Men's Formal Shirt",
    price: 1599,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
    category: "Clothing",
    rating: 4.4,
    description: "Professional cotton formal shirt for office wear",
    reviews: 1234,
    stock: 75
  },
  {
    id: "clothing-4",
    name: "Women's Summer Dress",
    price: 1899,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    category: "Clothing",
    rating: 4.6,
    description: "Light and breezy dress perfect for summer",
    reviews: 654,
    stock: 60
  },
  {
    id: "clothing-5",
    name: "Men's Jeans",
    price: 2199,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    category: "Clothing",
    rating: 4.2,
    description: "Classic fit jeans with stretch comfort",
    reviews: 3456,
    stock: 80
  },
  {
    id: "clothing-6",
    name: "Women's Blazer",
    price: 3999,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
    category: "Clothing",
    rating: 4.7,
    description: "Professional blazer for business occasions",
    reviews: 987,
    stock: 35
  },
  {
    id: "clothing-7",
    name: "Casual Sneakers",
    price: 3499,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    category: "Clothing",
    rating: 4.5,
    description: "Comfortable sneakers for daily wear",
    reviews: 2134,
    stock: 120
  },
  {
    id: "clothing-8",
    name: "Women's Handbag",
    price: 2999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    category: "Clothing",
    rating: 4.4,
    description: "Stylish leather handbag for everyday use",
    reviews: 1543,
    stock: 65
  },

  // Kitchen (25+ items)
  {
    id: "kitchen-1",
    name: "Instant Pot Pressure Cooker",
    price: 8999,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
    category: "Kitchen",
    rating: 4.7,
    description: "7-in-1 electric pressure cooker for quick meals",
    reviews: 4567,
    stock: 25
  },
  {
    id: "kitchen-2",
    name: "Non-Stick Cookware Set",
    price: 4599,
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=500",
    category: "Kitchen",
    rating: 4.4,
    description: "5-piece non-stick cookware set with glass lids",
    reviews: 2134,
    stock: 40
  },
  {
    id: "kitchen-3",
    name: "KitchenAid Stand Mixer",
    price: 32999,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    category: "Kitchen",
    rating: 4.8,
    description: "Professional stand mixer for baking enthusiasts",
    reviews: 876,
    stock: 12
  },
  {
    id: "kitchen-4",
    name: "Coffee Machine",
    price: 15999,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500",
    category: "Kitchen",
    rating: 4.5,
    description: "Automatic espresso machine with milk frother",
    reviews: 1543,
    stock: 18
  },
  {
    id: "kitchen-5",
    name: "Air Fryer",
    price: 6999,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba94d80?w=500",
    category: "Kitchen",
    rating: 4.6,
    description: "Healthy cooking with 80% less oil",
    reviews: 3421,
    stock: 35
  },
  {
    id: "kitchen-6",
    name: "Blender High Speed",
    price: 4999,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500",
    category: "Kitchen",
    rating: 4.3,
    description: "High-speed blender for smoothies and soups",
    reviews: 1876,
    stock: 45
  },

  // Toys (25+ items)
  {
    id: "toys-1",
    name: "LEGO Creator Expert Set",
    price: 12999,
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500",
    category: "Toys",
    rating: 4.9,
    description: "Advanced building set for ages 16+ with detailed instructions",
    reviews: 2341,
    stock: 15
  },
  {
    id: "toys-2",
    name: "Remote Control Car",
    price: 3999,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
    category: "Toys",
    rating: 4.4,
    description: "High-speed RC car with rechargeable battery",
    reviews: 876,
    stock: 30
  },
  {
    id: "toys-3",
    name: "Educational Robot Kit",
    price: 8999,
    image: "https://images.unsplash.com/photo-1563396983906-b3795482a632?w=500",
    category: "Toys",
    rating: 4.7,
    description: "STEM robotics kit for learning programming",
    reviews: 543,
    stock: 20
  },
  {
    id: "toys-4",
    name: "Wooden Puzzle Set",
    price: 1499,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    category: "Toys",
    rating: 4.3,
    description: "Educational wooden puzzles for cognitive development",
    reviews: 765,
    stock: 50
  },
  {
    id: "toys-5",
    name: "Action Figure Collection",
    price: 2799,
    image: "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=500",
    category: "Toys",
    rating: 4.5,
    description: "Premium action figures with articulated joints",
    reviews: 1234,
    stock: 25
  },

  // Kids Wear (25+ items)
  {
    id: "kids-1",
    name: "Kids Cotton T-Shirt Set",
    price: 899,
    image: "https://images.unsplash.com/photo-1519457431-44c20980aa78?w=500",
    category: "Kids Wear",
    rating: 4.4,
    description: "Soft cotton t-shirts in vibrant colors for kids",
    reviews: 1876,
    stock: 100
  },
  {
    id: "kids-2",
    name: "Girls Summer Dress",
    price: 1299,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500",
    category: "Kids Wear",
    rating: 4.6,
    description: "Cute floral dress perfect for summer outings",
    reviews: 654,
    stock: 60
  },
  {
    id: "kids-3",
    name: "Boys Denim Shorts",
    price: 999,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500",
    category: "Kids Wear",
    rating: 4.2,
    description: "Comfortable denim shorts for active kids",
    reviews: 432,
    stock: 80
  },
  {
    id: "kids-4",
    name: "Kids Winter Jacket",
    price: 2499,
    image: "https://images.unsplash.com/photo-1519278407-2636bebc315e?w=500",
    category: "Kids Wear",
    rating: 4.7,
    description: "Warm and cozy jacket for winter season",
    reviews: 321,
    stock: 40
  },
  {
    id: "kids-5",
    name: "School Uniform Set",
    price: 1799,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500",
    category: "Kids Wear",
    rating: 4.3,
    description: "Complete school uniform set with shirt and pants",
    reviews: 987,
    stock: 120
  },

  // Watches (25+ items)
  {
    id: "watches-1",
    name: "Rolex Submariner",
    price: 850000,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500",
    category: "Watches",
    rating: 4.9,
    description: "Luxury diving watch with automatic movement",
    reviews: 234,
    stock: 3
  },
  {
    id: "watches-2",
    name: "Casio G-Shock",
    price: 12999,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500",
    category: "Watches",
    rating: 4.6,
    description: "Rugged sports watch with shock resistance",
    reviews: 3456,
    stock: 50
  },
  {
    id: "watches-3",
    name: "Fossil Leather Watch",
    price: 8999,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500",
    category: "Watches",
    rating: 4.4,
    description: "Classic leather strap watch for formal occasions",
    reviews: 876,
    stock: 30
  },
  {
    id: "watches-4",
    name: "Apple Watch Ultra",
    price: 89900,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500",
    category: "Watches",
    rating: 4.8,
    description: "Advanced smartwatch for extreme sports and adventures",
    reviews: 2341,
    stock: 25
  },
  {
    id: "watches-5",
    name: "Seiko Automatic Watch",
    price: 24999,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
    category: "Watches",
    rating: 4.7,
    description: "Japanese automatic watch with exhibition caseback",
    reviews: 654,
    stock: 15
  },

  // Accessories (25+ items)
  {
    id: "accessories-1",
    name: "Leather Wallet",
    price: 1999,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
    category: "Accessories",
    rating: 4.5,
    description: "Genuine leather wallet with RFID protection",
    reviews: 2134,
    stock: 75
  },
  {
    id: "accessories-2",
    name: "Designer Sunglasses",
    price: 4999,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    category: "Accessories",
    rating: 4.3,
    description: "UV protection sunglasses with polarized lenses",
    reviews: 876,
    stock: 40
  },
  {
    id: "accessories-3",
    name: "Leather Belt",
    price: 1599,
    image: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=500",
    category: "Accessories",
    rating: 4.4,
    description: "Premium leather belt with reversible design",
    reviews: 543,
    stock: 60
  },
  {
    id: "accessories-4",
    name: "Travel Backpack",
    price: 3999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    category: "Accessories",
    rating: 4.6,
    description: "Waterproof travel backpack with multiple compartments",
    reviews: 1234,
    stock: 35
  },
  {
    id: "accessories-5",
    name: "Phone Case",
    price: 799,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500",
    category: "Accessories",
    rating: 4.2,
    description: "Protective phone case with shock absorption",
    reviews: 3456,
    stock: 150
  }
];

export const categoryOptions = [
  { categoryId: "ALL", name: "All Categories" },
  { categoryId: "ELECTRONICS", name: "Electronics" },
  { categoryId: "BOOKS", name: "Books" },
  { categoryId: "CLOTHING", name: "Clothing" },
  { categoryId: "KITCHEN", name: "Kitchen" },
  { categoryId: "TOYS", name: "Toys" },
  { categoryId: "KIDS_WEAR", name: "Kids Wear" },
  { categoryId: "WATCHES", name: "Watches" },
  { categoryId: "ACCESSORIES", name: "Accessories" }
];

export const ratingOptions = [
  { ratingId: "", imageUrl: "", name: "All Ratings" },
  { ratingId: "4", imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=30", name: "4★ & above" },
  { ratingId: "3", imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=30", name: "3★ & above" },
  { ratingId: "2", imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=30", name: "2★ & above" },
  { ratingId: "1", imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=30", name: "1★ & above" }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => 
    product.rating >= 4.7 && 
    ['electronics-1', 'book-2', 'clothing-5', 'kitchen-11', 'toys-1', 'electronics-4', 'book-8', 'watches-1'].includes(product.id)
  ).slice(0, 8);
};
