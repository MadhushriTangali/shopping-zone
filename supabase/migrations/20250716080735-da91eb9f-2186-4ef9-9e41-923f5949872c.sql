
-- Create products table
CREATE TABLE public.products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image TEXT NOT NULL,
  category TEXT NOT NULL,
  rating DECIMAL(2,1) NOT NULL DEFAULT 0,
  description TEXT,
  reviews INTEGER NOT NULL DEFAULT 0,
  stock INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create categories table for better data organization
CREATE TABLE public.categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create rating options table
CREATE TABLE public.rating_options (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (make products publicly readable since it's an e-commerce catalog)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rating_options ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Products are publicly readable" ON public.products FOR SELECT USING (true);
CREATE POLICY "Categories are publicly readable" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Rating options are publicly readable" ON public.rating_options FOR SELECT USING (true);

-- Insert categories
INSERT INTO public.categories (id, name) VALUES
('ALL', 'All Categories'),
('ELECTRONICS', 'Electronics'),
('BOOKS', 'Books'),
('CLOTHING', 'Clothing'),
('KITCHEN', 'Kitchen'),
('TOYS', 'Toys'),
('KIDS_WEAR', 'Kids Wear'),
('WATCHES', 'Watches'),
('ACCESSORIES', 'Accessories');

-- Insert rating options
INSERT INTO public.rating_options (id, name, image_url) VALUES
('', 'All Ratings', ''),
('4', '4★ & above', 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=30'),
('3', '3★ & above', 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=30'),
('2', '2★ & above', 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=30'),
('1', '1★ & above', 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=30');

-- Insert all the existing products data
INSERT INTO public.products (id, name, price, image, category, rating, description, reviews, stock) VALUES
-- Electronics
('electronics-1', 'iPhone 15 Pro Max', 134900, 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1024&h=1024&fit=crop&crop=center', 'Electronics', 4.8, 'Latest iPhone with A17 Pro chip and titanium design', 2543, 25),
('electronics-2', 'Samsung Galaxy S24 Ultra', 124999, 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=1024&h=1024&fit=crop&crop=center', 'Electronics', 4.7, 'Premium Android phone with S Pen and AI features', 1876, 18),
('electronics-3', 'MacBook Air M2', 114900, 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1024&h=1024&fit=crop&crop=center', 'Electronics', 4.9, 'Ultra-thin laptop with M2 chip for professionals', 3421, 12),
('electronics-4', 'Dell XPS 13', 89999, 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1024&h=1024&fit=crop&crop=center', 'Electronics', 4.6, 'Premium Windows laptop with InfinityEdge display', 987, 15),
('electronics-5', 'iPad Pro 12.9"', 112900, 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=1024&h=1024&fit=crop&crop=center', 'Electronics', 4.8, 'Professional tablet with M2 chip and Apple Pencil support', 1654, 20),
('electronics-6', 'Sony WH-1000XM5 Headphones', 32990, 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1024&h=1024&fit=crop&crop=center', 'Electronics', 4.7, 'Premium noise-canceling wireless headphones', 2341, 35),
('electronics-7', 'Samsung 55" QLED TV', 74999, 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=1024&h=1024&fit=crop&crop=center', 'Electronics', 4.5, '4K QLED Smart TV with HDR and built-in streaming', 876, 8),
('electronics-8', 'Gaming Laptop RTX 4080', 149999, 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1024&h=1024&fit=crop&crop=center', 'Electronics', 4.6, 'High-performance gaming laptop with RTX 4080 graphics', 1234, 10),
('electronics-9', 'Canon EOS R6 Mark II', 219999, 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=1024&h=1024&fit=crop&crop=center', 'Electronics', 4.9, 'Professional mirrorless camera for photography enthusiasts', 567, 6),
('electronics-10', 'Apple Watch Series 9', 41900, 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1024&h=1024&fit=crop&crop=center', 'Electronics', 4.7, 'Advanced smartwatch with health monitoring features', 4532, 45),
('electronics-11', 'Wireless Earbuds Pro', 18999, 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=1024&h=1024&fit=crop&crop=center', 'Electronics', 4.5, 'Premium wireless earbuds with noise cancellation', 3421, 60),
('electronics-12', 'Gaming Monitor 27" 4K', 45999, 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1024&h=1024&fit=crop&crop=center', 'Electronics', 4.6, '4K gaming monitor with 144Hz refresh rate', 876, 25),

-- Books
('book-1', 'The Alchemist', 299, 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1024&h=1024&fit=crop&crop=center', 'Books', 4.6, 'A philosophical book about following your dreams', 12543, 150),
('book-2', 'Atomic Habits', 450, 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1024&h=1024&fit=crop&crop=center', 'Books', 4.8, 'Transform your life with tiny changes and remarkable results', 8765, 200),
('book-3', 'Think and Grow Rich', 350, 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1024&h=1024&fit=crop&crop=center', 'Books', 4.5, 'Classic self-help book on achieving financial success', 5432, 120),
('book-4', 'The Power of Habit', 399, 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=1024&h=1024&fit=crop&crop=center', 'Books', 4.7, 'Why we do what we do and how to change', 3456, 180),
('book-5', 'Rich Dad Poor Dad', 320, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1024&h=1024&fit=crop&crop=center', 'Books', 4.4, 'Financial education and investing basics', 9876, 250),
('book-6', 'The 7 Habits of Highly Effective People', 425, 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1024&h=1024&fit=crop&crop=center', 'Books', 4.6, 'Personal development and leadership principles', 6543, 140),
('book-7', 'Steve Jobs Biography', 599, 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1024&h=1024&fit=crop&crop=center', 'Books', 4.7, 'The official biography of Apple''s co-founder', 4321, 95),

-- Clothing
('clothing-1', 'Men''s Cotton T-Shirt', 799, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1024&h=1024&fit=crop&crop=center', 'Clothing', 4.3, 'Comfortable 100% cotton t-shirt for everyday wear', 2341, 100),
('clothing-2', 'Women''s Denim Jacket', 2499, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1024&h=1024&fit=crop&crop=center', 'Clothing', 4.5, 'Classic denim jacket with modern fit', 876, 45),
('clothing-3', 'Men''s Formal Shirt', 1599, 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1024&h=1024&fit=crop&crop=center', 'Clothing', 4.4, 'Professional cotton formal shirt for office wear', 1234, 75),
('clothing-4', 'Women''s Summer Dress', 1899, 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1024&h=1024&fit=crop&crop=center', 'Clothing', 4.6, 'Light and breezy dress perfect for summer', 654, 60),
('clothing-5', 'Men''s Jeans', 2199, 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=1024&h=1024&fit=crop&crop=center', 'Clothing', 4.2, 'Classic fit jeans with stretch comfort', 3456, 80),
('clothing-6', 'Women''s Blazer', 3999, 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1024&h=1024&fit=crop&crop=center', 'Clothing', 4.7, 'Professional blazer for business occasions', 987, 35),
('clothing-7', 'Casual Sneakers', 3499, 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1024&h=1024&fit=crop&crop=center', 'Clothing', 4.5, 'Comfortable sneakers for daily wear', 2134, 120),
('clothing-8', 'Women''s Handbag', 2999, 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1024&h=1024&fit=crop&crop=center', 'Clothing', 4.4, 'Stylish leather handbag for everyday use', 1543, 65),

-- Kitchen
('kitchen-1', 'Instant Pot Pressure Cooker', 8999, 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1024&h=1024&fit=crop&crop=center', 'Kitchen', 4.7, '7-in-1 electric pressure cooker for quick meals', 4567, 25),
('kitchen-2', 'Non-Stick Cookware Set', 4599, 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1024&h=1024&fit=crop&crop=center', 'Kitchen', 4.4, '5-piece non-stick cookware set with glass lids', 2134, 40),
('kitchen-3', 'KitchenAid Stand Mixer', 32999, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1024&h=1024&fit=crop&crop=center', 'Kitchen', 4.8, 'Professional stand mixer for baking enthusiasts', 876, 12),
('kitchen-4', 'Coffee Machine', 15999, 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=1024&h=1024&fit=crop&crop=center', 'Kitchen', 4.5, 'Automatic espresso machine with milk frother', 1543, 18),
('kitchen-5', 'Air Fryer', 6999, 'https://images.unsplash.com/photo-1605751479126-9ba88f67a76d?w=1024&h=1024&fit=crop&crop=center', 'Kitchen', 4.6, 'Healthy cooking with 80% less oil', 3421, 35),
('kitchen-6', 'Blender High Speed', 4999, 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=1024&h=1024&fit=crop&crop=center', 'Kitchen', 4.3, 'High-speed blender for smoothies and soups', 1876, 45),

-- Toys
('toys-1', 'LEGO Creator Expert Set', 12999, 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=1024&h=1024&fit=crop&crop=center', 'Toys', 4.9, 'Advanced building set for ages 16+ with detailed instructions', 2341, 15),
('toys-2', 'Remote Control Car', 3999, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1024&h=1024&fit=crop&crop=center', 'Toys', 4.4, 'High-speed RC car with rechargeable battery', 876, 30),
('toys-3', 'Educational Robot Kit', 8999, 'https://images.unsplash.com/photo-1563396983906-b3795482a632?w=1024&h=1024&fit=crop&crop=center', 'Toys', 4.7, 'STEM robotics kit for learning programming', 543, 20),
('toys-4', 'Wooden Puzzle Set', 1499, 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1024&h=1024&fit=crop&crop=center', 'Toys', 4.3, 'Educational wooden puzzles for cognitive development', 765, 50),
('toys-5', 'Action Figure Collection', 2799, 'https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=1024&h=1024&fit=crop&crop=center', 'Toys', 4.5, 'Premium action figures with articulated joints', 1234, 25),

-- Kids Wear
('kids-1', 'Kids Cotton T-Shirt Set', 899, 'https://images.unsplash.com/photo-1622290291468-a28f7cd67cfc?w=1024&h=1024&fit=crop&crop=center', 'Kids Wear', 4.4, 'Soft cotton t-shirts in vibrant colors for kids', 1876, 100),
('kids-2', 'Girls Summer Dress', 1299, 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=1024&h=1024&fit=crop&crop=center', 'Kids Wear', 4.6, 'Cute floral dress perfect for summer outings', 654, 60),
('kids-3', 'Boys Denim Shorts', 999, 'https://images.unsplash.com/photo-1519278407-2636bebc315e?w=1024&h=1024&fit=crop&crop=center', 'Kids Wear', 4.2, 'Comfortable denim shorts for active kids', 432, 80),
('kids-4', 'Kids Winter Jacket', 2499, 'https://images.unsplash.com/photo-1519925610903-381054cc2a1a?w=1024&h=1024&fit=crop&crop=center', 'Kids Wear', 4.7, 'Warm and cozy jacket for winter season', 321, 40),
('kids-5', 'School Uniform Set', 1799, 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1024&h=1024&fit=crop&crop=center', 'Kids Wear', 4.3, 'Complete school uniform set with shirt and pants', 987, 120),
('kids-6', 'Baby Onesie Pack', 699, 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1024&h=1024&fit=crop&crop=center', 'Kids Wear', 4.8, 'Soft cotton onesies for babies, pack of 3', 2341, 150),
('kids-7', 'Kids Rain Boots', 1199, 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1024&h=1024&fit=crop&crop=center', 'Kids Wear', 4.5, 'Waterproof rain boots with fun animal designs', 876, 75),
('kids-8', 'Girls Party Dress', 1899, 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=1024&h=1024&fit=crop&crop=center', 'Kids Wear', 4.6, 'Elegant party dress for special occasions', 543, 30),
('kids-9', 'Boys Polo Shirt', 799, 'https://images.unsplash.com/photo-1522706604291-210a56c3b376?w=1024&h=1024&fit=crop&crop=center', 'Kids Wear', 4.4, 'Classic polo shirt for boys in multiple colors', 654, 90),
('kids-10', 'Kids Pajama Set', 1099, 'https://images.unsplash.com/photo-1596627116790-af6593f09953?w=1024&h=1024&fit=crop&crop=center', 'Kids Wear', 4.7, 'Comfortable cotton pajama set for good night''s sleep', 1234, 85),

-- Watches
('watches-1', 'Rolex Submariner', 850000, 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=1024&h=1024&fit=crop&crop=center', 'Watches', 4.9, 'Luxury diving watch with automatic movement', 234, 3),
('watches-2', 'Casio G-Shock', 12999, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1024&h=1024&fit=crop&crop=center', 'Watches', 4.6, 'Rugged sports watch with shock resistance', 3456, 50),
('watches-3', 'Fossil Leather Watch', 8999, 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1024&h=1024&fit=crop&crop=center', 'Watches', 4.4, 'Classic leather strap watch for formal occasions', 876, 30),
('watches-4', 'Apple Watch Ultra', 89900, 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1024&h=1024&fit=crop&crop=center', 'Watches', 4.8, 'Advanced smartwatch for extreme sports and adventures', 2341, 25),
('watches-5', 'Seiko Automatic Watch', 24999, 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1024&h=1024&fit=crop&crop=center', 'Watches', 4.7, 'Japanese automatic watch with exhibition caseback', 654, 15),

-- Accessories
('accessories-1', 'Leather Wallet', 1999, 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=1024&h=1024&fit=crop&crop=center', 'Accessories', 4.5, 'Genuine leather wallet with RFID protection', 2134, 75),
('accessories-2', 'Designer Sunglasses', 4999, 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1024&h=1024&fit=crop&crop=center', 'Accessories', 4.3, 'UV protection sunglasses with polarized lenses', 876, 40),
('accessories-3', 'Leather Belt', 1599, 'https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=1024&h=1024&fit=crop&crop=center', 'Accessories', 4.4, 'Premium leather belt with reversible design', 543, 60),
('accessories-4', 'Travel Backpack', 3999, 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1024&h=1024&fit=crop&crop=center', 'Accessories', 4.6, 'Waterproof travel backpack with multiple compartments', 1234, 35),
('accessories-5', 'Phone Case', 799, 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1024&h=1024&fit=crop&crop=center', 'Accessories', 4.2, 'Protective phone case with shock absorption', 3456, 150);
