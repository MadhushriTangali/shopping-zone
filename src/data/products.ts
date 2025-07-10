
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
  // Books (15 items)
  {
    id: "book-1",
    name: "The Psychology of Money",
    price: 399,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    category: "Books",
    rating: 4.8,
    description: "Timeless lessons on wealth, greed, and happiness",
    reviews: 2847,
    stock: 50
  },
  {
    id: "book-2",
    name: "Atomic Habits",
    price: 450,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    category: "Books",
    rating: 4.9,
    description: "An easy & proven way to build good habits & break bad ones",
    reviews: 3521,
    stock: 30
  },
  {
    id: "book-3",
    name: "Think and Grow Rich",
    price: 299,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    category: "Books",
    rating: 4.7,
    description: "The classic guide to wealth and success",
    reviews: 1892,
    stock: 40
  },
  {
    id: "book-4",
    name: "Rich Dad Poor Dad",
    price: 350,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400",
    category: "Books",
    rating: 4.6,
    description: "What the rich teach their kids about money",
    reviews: 2156,
    stock: 35
  },
  {
    id: "book-5",
    name: "The 7 Habits of Highly Effective People",
    price: 425,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
    category: "Books",
    rating: 4.8,
    description: "Powerful lessons in personal change",
    reviews: 1743,
    stock: 25
  },
  {
    id: "book-6",
    name: "How to Win Friends and Influence People",
    price: 380,
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
    category: "Books",
    rating: 4.7,
    description: "The classic self-help book",
    reviews: 2234,
    stock: 45
  },
  {
    id: "book-7",
    name: "The Power of Now",
    price: 320,
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400",
    category: "Books",
    rating: 4.5,
    description: "A guide to spiritual enlightenment",
    reviews: 1567,
    stock: 30
  },
  {
    id: "book-8",
    name: "Sapiens",
    price: 499,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
    category: "Books",
    rating: 4.9,
    description: "A brief history of humankind",
    reviews: 3789,
    stock: 20
  },
  {
    id: "book-9",
    name: "The Alchemist",
    price: 275,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    category: "Books",
    rating: 4.8,
    description: "A magical story about following your dreams",
    reviews: 4123,
    stock: 60
  },
  {
    id: "book-10",
    name: "1984",
    price: 250,
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
    category: "Books",
    rating: 4.6,
    description: "George Orwell's dystopian masterpiece",
    reviews: 2876,
    stock: 40
  },
  {
    id: "book-11",
    name: "To Kill a Mockingbird",
    price: 325,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    category: "Books",
    rating: 4.7,
    description: "Harper Lee's timeless classic",
    reviews: 2345,
    stock: 35
  },
  {
    id: "book-12",
    name: "The Great Gatsby",
    price: 280,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    category: "Books",
    rating: 4.4,
    description: "F. Scott Fitzgerald's American classic",
    reviews: 1987,
    stock: 45
  },
  {
    id: "book-13",
    name: "Pride and Prejudice",
    price: 300,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    category: "Books",
    rating: 4.8,
    description: "Jane Austen's beloved romance",
    reviews: 3456,
    stock: 30
  },
  {
    id: "book-14",
    name: "The Catcher in the Rye",
    price: 290,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400",
    category: "Books",
    rating: 4.3,
    description: "J.D. Salinger's coming-of-age story",
    reviews: 1876,
    stock: 25
  },
  {
    id: "book-15",
    name: "Lord of the Flies",
    price: 270,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
    category: "Books",
    rating: 4.5,
    description: "William Golding's haunting tale",
    reviews: 2123,
    stock: 40
  },

  // Electronics (20 items)
  {
    id: "electronics-1",
    name: "iPhone 15 Pro Max",
    price: 134900,
    image: "https://images.unsplash.com/photo-1592286904263-caa9a893adb6?w=400",
    category: "Electronics",
    rating: 4.8,
    description: "Latest iPhone with A17 Pro chip and titanium design",
    reviews: 5234,
    stock: 15
  },
  {
    id: "electronics-2",
    name: "Samsung Galaxy S24 Ultra",
    price: 124999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    category: "Electronics",
    rating: 4.7,
    description: "Premium Android flagship with S Pen",
    reviews: 4567,
    stock: 20
  },
  {
    id: "electronics-3",
    name: "MacBook Air M3",
    price: 114900,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    category: "Electronics",
    rating: 4.9,
    description: "Ultra-thin laptop with M3 chip",
    reviews: 3456,
    stock: 10
  },
  {
    id: "electronics-4",
    name: "Sony WH-1000XM5",
    price: 29990,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category: "Electronics",
    rating: 4.8,
    description: "Industry-leading noise canceling headphones",
    reviews: 6789,
    stock: 25
  },
  {
    id: "electronics-5",
    name: "iPad Pro 12.9\"",
    price: 112900,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    category: "Electronics",
    rating: 4.8,
    description: "Professional tablet with M2 chip",
    reviews: 2876,
    stock: 18
  },
  {
    id: "electronics-6",
    name: "AirPods Pro 2nd Gen",
    price: 24900,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
    category: "Electronics",
    rating: 4.7,
    description: "Wireless earbuds with active noise cancellation",
    reviews: 8234,
    stock: 50
  },
  {
    id: "electronics-7",
    name: "Dell XPS 13",
    price: 89999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    category: "Electronics",
    rating: 4.6,
    description: "Premium ultrabook with InfinityEdge display",
    reviews: 1987,
    stock: 12
  },
  {
    id: "electronics-8",
    name: "Canon EOS R5",
    price: 329999,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    category: "Electronics",
    rating: 4.9,
    description: "Professional mirrorless camera",
    reviews: 1234,
    stock: 8
  },
  {
    id: "electronics-9",
    name: "Nintendo Switch OLED",
    price: 32999,
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400",
    category: "Electronics",
    rating: 4.8,
    description: "Gaming console with vibrant OLED screen",
    reviews: 4567,
    stock: 30
  },
  {
    id: "electronics-10",
    name: "Samsung 65\" 4K Smart TV",
    price: 89999,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
    category: "Electronics",
    rating: 4.7,
    description: "Crystal UHD Smart TV with Tizen OS",
    reviews: 3456,
    stock: 15
  },
  {
    id: "electronics-11",
    name: "Google Pixel 8 Pro",
    price: 84999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    category: "Electronics",
    rating: 4.6,
    description: "AI-powered Android phone with pure Google experience",
    reviews: 2345,
    stock: 22
  },
  {
    id: "electronics-12",
    name: "JBL Charge 5",
    price: 12999,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    category: "Electronics",
    rating: 4.5,
    description: "Portable Bluetooth speaker with powerbank",
    reviews: 5678,
    stock: 40
  },
  {
    id: "electronics-13",
    name: "HP Pavilion Gaming",
    price: 65999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    category: "Electronics",
    rating: 4.4,
    description: "Gaming laptop with RTX graphics",
    reviews: 1876,
    stock: 18
  },
  {
    id: "electronics-14",
    name: "Fitbit Versa 4",
    price: 19999,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
    category: "Electronics",
    rating: 4.3,
    description: "Health and fitness smartwatch",
    reviews: 3210,
    stock: 35
  },
  {
    id: "electronics-15",
    name: "Kindle Paperwhite",
    price: 14999,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    category: "Electronics",
    rating: 4.8,
    description: "Waterproof e-reader with adjustable warm light",
    reviews: 7890,
    stock: 45
  },
  {
    id: "electronics-16",
    name: "Logitech MX Master 3S",
    price: 8999,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    category: "Electronics",
    rating: 4.7,
    description: "Advanced wireless mouse for professionals",
    reviews: 2345,
    stock: 60
  },
  {
    id: "electronics-17",
    name: "Razer BlackWidow V4",
    price: 15999,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
    category: "Electronics",
    rating: 4.6,
    description: "Mechanical gaming keyboard with RGB",
    reviews: 1567,
    stock: 25
  },
  {
    id: "electronics-18",
    name: "Bose SoundLink Revolve+",
    price: 21999,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    category: "Electronics",
    rating: 4.5,
    description: "360-degree Bluetooth speaker",
    reviews: 3456,
    stock: 30
  },
  {
    id: "electronics-19",
    name: "GoPro Hero 12",
    price: 44999,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    category: "Electronics",
    rating: 4.8,
    description: "Ultra-compact action camera with 5.3K video",
    reviews: 2890,
    stock: 20
  },
  {
    id: "electronics-20",
    name: "DJI Mini 4 Pro",
    price: 89999,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400",
    category: "Electronics",
    rating: 4.9,
    description: "Compact drone with 4K camera and obstacle sensing",
    reviews: 1234,
    stock: 12
  },

  // Clothing (15 items)
  {
    id: "clothing-1",
    name: "Premium Cotton T-Shirt",
    price: 899,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    category: "Clothing",
    rating: 4.5,
    description: "100% organic cotton comfortable t-shirt",
    reviews: 2345,
    stock: 100
  },
  {
    id: "clothing-2",
    name: "Denim Jacket",
    price: 2499,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    category: "Clothing",
    rating: 4.6,
    description: "Classic blue denim jacket for all seasons",
    reviews: 1876,
    stock: 75
  },
  {
    id: "clothing-3",
    name: "Formal Shirt White",
    price: 1599,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
    category: "Clothing",
    rating: 4.7,
    description: "Crisp white formal shirt for office wear",
    reviews: 3456,
    stock: 80
  },
  {
    id: "clothing-4",
    name: "Casual Jeans",
    price: 1999,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    category: "Clothing",
    rating: 4.4,
    description: "Comfortable slim-fit jeans",
    reviews: 4567,
    stock: 90
  },
  {
    id: "clothing-5",
    name: "Winter Hoodie",
    price: 1899,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    category: "Clothing",
    rating: 4.8,
    description: "Warm and cozy hoodie for winter",
    reviews: 2890,
    stock: 60
  },
  {
    id: "clothing-6",
    name: "Summer Dress",
    price: 2299,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    category: "Clothing",
    rating: 4.6,
    description: "Flowy summer dress in floral print",
    reviews: 1987,
    stock: 45
  },
  {
    id: "clothing-7",
    name: "Sports Track Suit",
    price: 2799,
    image: "https://images.unsplash.com/photo-1506629905607-44d17d2e1c6d?w=400",
    category: "Clothing",
    rating: 4.5,
    description: "Comfortable tracksuit for workouts",
    reviews: 3210,
    stock: 55
  },
  {
    id: "clothing-8",
    name: "Leather Jacket",
    price: 8999,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    category: "Clothing",
    rating: 4.8,
    description: "Genuine leather jacket with classic styling",
    reviews: 876,
    stock: 25
  },
  {
    id: "clothing-9",
    name: "Polo Shirt",
    price: 1299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    category: "Clothing",
    rating: 4.4,
    description: "Classic polo shirt in multiple colors",
    reviews: 2345,
    stock: 85
  },
  {
    id: "clothing-10",
    name: "Formal Blazer",
    price: 4999,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    category: "Clothing",
    rating: 4.7,
    description: "Professional blazer for business meetings",
    reviews: 1234,
    stock: 35
  },
  {
    id: "clothing-11",
    name: "Yoga Pants",
    price: 1499,
    image: "https://images.unsplash.com/photo-1506629905607-44d17d2e1c6d?w=400",
    category: "Clothing",
    rating: 4.6,
    description: "Stretchable yoga pants for comfort",
    reviews: 3890,
    stock: 70
  },
  {
    id: "clothing-12",
    name: "Cotton Kurta",
    price: 1799,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
    category: "Clothing",
    rating: 4.5,
    description: "Traditional cotton kurta for festivals",
    reviews: 2456,
    stock: 50
  },
  {
    id: "clothing-13",
    name: "Party Gown",
    price: 5999,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    category: "Clothing",
    rating: 4.8,
    description: "Elegant party gown for special occasions",
    reviews: 987,
    stock: 20
  },
  {
    id: "clothing-14",
    name: "Cargo Pants",
    price: 2199,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    category: "Clothing",
    rating: 4.3,
    description: "Utility cargo pants with multiple pockets",
    reviews: 1567,
    stock: 65
  },
  {
    id: "clothing-15",
    name: "Silk Saree",
    price: 12999,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    category: "Clothing",
    rating: 4.9,
    description: "Pure silk saree with intricate embroidery",
    reviews: 543,
    stock: 15
  },

  // Kitchen (15 items)
  {
    id: "kitchen-1",
    name: "Non-Stick Cookware Set",
    price: 4999,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    category: "Kitchen",
    rating: 4.6,
    description: "5-piece non-stick cookware set",
    reviews: 3456,
    stock: 40
  },
  {
    id: "kitchen-2",
    name: "Electric Rice Cooker",
    price: 2799,
    image: "https://images.unsplash.com/photo-1585515656914-a7d31c67283a?w=400",
    category: "Kitchen",
    rating: 4.7,
    description: "Automatic rice cooker with steamer",
    reviews: 4567,
    stock: 50
  },
  {
    id: "kitchen-3",
    name: "Mixer Grinder",
    price: 3999,
    image: "https://images.unsplash.com/photo-1556909190-4eeb2cf30b80?w=400",
    category: "Kitchen",
    rating: 4.5,
    description: "750W mixer grinder with 3 jars",
    reviews: 2890,
    stock: 35
  },
  {
    id: "kitchen-4",
    name: "Pressure Cooker",
    price: 1999,
    image: "https://images.unsplash.com/photo-1556909190-4eeb2cf30b80?w=400",
    category: "Kitchen",
    rating: 4.8,
    description: "5L aluminum pressure cooker",
    reviews: 5678,
    stock: 60
  },
  {
    id: "kitchen-5",
    name: "Electric Kettle",
    price: 1299,
    image: "https://images.unsplash.com/photo-1585515656914-a7d31c67283a?w=400",
    category: "Kitchen",
    rating: 4.4,
    description: "1.7L stainless steel electric kettle",
    reviews: 3210,
    stock: 75
  },
  {
    id: "kitchen-6",
    name: "Microwave Oven",
    price: 8999,
    image: "https://images.unsplash.com/photo-1556909192-37c5bde7b43c?w=400",
    category: "Kitchen",
    rating: 4.6,
    description: "20L convection microwave oven",
    reviews: 1876,
    stock: 25
  },
  {
    id: "kitchen-7",
    name: "Induction Cooktop",
    price: 2499,
    image: "https://images.unsplash.com/photo-1556909190-4eeb2cf30b80?w=400",
    category: "Kitchen",
    rating: 4.5,
    description: "2000W portable induction cooktop",
    reviews: 2345,
    stock: 45
  },
  {
    id: "kitchen-8",
    name: "Food Processor",
    price: 5999,
    image: "https://images.unsplash.com/photo-1556909190-4eeb2cf30b80?w=400",
    category: "Kitchen",
    rating: 4.7,
    description: "Multi-function food processor",
    reviews: 1567,
    stock: 30
  },
  {
    id: "kitchen-9",
    name: "Toaster",
    price: 1899,
    image: "https://images.unsplash.com/photo-1585515656914-a7d31c67283a?w=400",
    category: "Kitchen",
    rating: 4.3,
    description: "2-slice pop-up toaster",
    reviews: 2890,
    stock: 55
  },
  {
    id: "kitchen-10",
    name: "Coffee Maker",
    price: 4599,
    image: "https://images.unsplash.com/photo-1556909192-37c5bde7b43c?w=400",
    category: "Kitchen",
    rating: 4.8,
    description: "Drip coffee maker with glass carafe",
    reviews: 987,
    stock: 20
  },
  {
    id: "kitchen-11",
    name: "Air Fryer",
    price: 6999,
    image: "https://images.unsplash.com/photo-1585515656914-a7d31c67283a?w=400",
    category: "Kitchen",
    rating: 4.9,
    description: "Digital air fryer with timer",
    reviews: 3456,
    stock: 35
  },
  {
    id: "kitchen-12",
    name: "Blender",
    price: 2299,
    image: "https://images.unsplash.com/photo-1556909190-4eeb2cf30b80?w=400",
    category: "Kitchen",
    rating: 4.4,
    description: "High-speed blender for smoothies",
    reviews: 2134,
    stock: 40
  },
  {
    id: "kitchen-13",
    name: "Water Purifier",
    price: 12999,
    image: "https://images.unsplash.com/photo-1585515656914-a7d31c67283a?w=400",
    category: "Kitchen",
    rating: 4.7,
    description: "RO water purifier with UV sterilization",
    reviews: 1678,
    stock: 25
  },
  {
    id: "kitchen-14",
    name: "Gas Stove",
    price: 3599,
    image: "https://images.unsplash.com/photo-1556909190-4eeb2cf30b80?w=400",
    category: "Kitchen",
    rating: 4.5,
    description: "4-burner stainless steel gas stove",
    reviews: 2890,
    stock: 30
  },
  {
    id: "kitchen-15",
    name: "Refrigerator",
    price: 24999,
    image: "https://images.unsplash.com/photo-1556909192-37c5bde7b43c?w=400",
    category: "Kitchen",
    rating: 4.8,
    description: "Double door frost-free refrigerator",
    reviews: 1234,
    stock: 15
  },

  // Toys (15 items)
  {
    id: "toys-1",
    name: "LEGO Creator Set",
    price: 3999,
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400",
    category: "Toys",
    rating: 4.8,
    description: "3-in-1 LEGO building set",
    reviews: 2345,
    stock: 45
  },
  {
    id: "toys-2",
    name: "Remote Control Car",
    price: 2499,
    image: "https://images.unsplash.com/photo-1592522622212-28bbf14ada7a?w=400",
    category: "Toys",
    rating: 4.6,
    description: "High-speed RC car with rechargeable battery",
    reviews: 3456,
    stock: 35
  },
  {
    id: "toys-3",
    name: "Barbie Doll Set",
    price: 1599,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
    category: "Toys",
    rating: 4.7,
    description: "Barbie doll with accessories and outfits",
    reviews: 4567,
    stock: 60
  },
  {
    id: "toys-4",
    name: "Board Game - Monopoly",
    price: 1299,
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400",
    category: "Toys",
    rating: 4.5,
    description: "Classic Monopoly board game for families",
    reviews: 2890,
    stock: 50
  },
  {
    id: "toys-5",
    name: "Teddy Bear",
    price: 899,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
    category: "Toys",
    rating: 4.8,
    description: "Soft and cuddly teddy bear",
    reviews: 5678,
    stock: 80
  },
  {
    id: "toys-6",
    name: "Action Figure Set",
    price: 1999,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
    category: "Toys",
    rating: 4.4,
    description: "Superhero action figures with accessories",
    reviews: 1876,
    stock: 40
  },
  {
    id: "toys-7",
    name: "Puzzle 1000 Pieces",
    price: 699,
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400",
    category: "Toys",
    rating: 4.6,
    description: "Challenging jigsaw puzzle for adults",
    reviews: 2345,
    stock: 70
  },
  {
    id: "toys-8",
    name: "Drone for Kids",
    price: 3499,
    image: "https://images.unsplash.com/photo-1592522622212-28bbf14ada7a?w=400",
    category: "Toys",
    rating: 4.7,
    description: "Safe and easy-to-fly drone for children",
    reviews: 1567,
    stock: 25
  },
  {
    id: "toys-9",
    name: "Building Blocks Set",
    price: 1799,
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400",
    category: "Toys",
    rating: 4.5,
    description: "Colorful building blocks for creativity",
    reviews: 3210,
    stock: 55
  },
  {
    id: "toys-10",
    name: "Musical Keyboard",
    price: 2799,
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400",
    category: "Toys",
    rating: 4.6,
    description: "Electronic keyboard with learning modes",
    reviews: 1890,
    stock: 30
  },
  {
    id: "toys-11",
    name: "Toy Train Set",
    price: 2199,
    image: "https://images.unsplash.com/photo-1592522622212-28bbf14ada7a?w=400",
    category: "Toys",
    rating: 4.4,
    description: "Electric train set with tracks",
    reviews: 2456,
    stock: 35
  },
  {
    id: "toys-12",
    name: "Art and Craft Kit",
    price: 1299,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
    category: "Toys",
    rating: 4.7,
    description: "Complete art supplies for creative kids",
    reviews: 3456,
    stock: 45
  },
  {
    id: "toys-13",
    name: "Basketball Hoop",
    price: 1899,
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400",
    category: "Toys",
    rating: 4.3,
    description: "Adjustable basketball hoop for kids",
    reviews: 1678,
    stock: 20
  },
  {
    id: "toys-14",
    name: "Robot Toy",
    price: 3299,
    image: "https://images.unsplash.com/photo-1592522622212-28bbf14ada7a?w=400",
    category: "Toys",
    rating: 4.8,
    description: "Interactive robot with voice commands",
    reviews: 987,
    stock: 25
  },
  {
    id: "toys-15",
    name: "Dollhouse",
    price: 4999,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
    category: "Toys",
    rating: 4.9,
    description: "Multi-story dollhouse with furniture",
    reviews: 765,
    stock: 15
  },

  // Kids Wear (10 items)
  {
    id: "kids-1",
    name: "Kids Cotton T-Shirt",
    price: 499,
    image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400",
    category: "Kids Wear",
    rating: 4.5,
    description: "Soft cotton t-shirt for kids",
    reviews: 3456,
    stock: 100
  },
  {
    id: "kids-2",
    name: "Baby Romper Set",
    price: 799,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400",
    category: "Kids Wear",
    rating: 4.7,
    description: "Comfortable romper set for babies",
    reviews: 2345,
    stock: 80
  },
  {
    id: "kids-3",
    name: "Kids Jeans",
    price: 1299,
    image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400",
    category: "Kids Wear",
    rating: 4.4,
    description: "Durable denim jeans for active kids",
    reviews: 1876,
    stock: 60
  },
  {
    id: "kids-4",
    name: "Girls Party Dress",
    price: 1599,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400",
    category: "Kids Wear",
    rating: 4.8,
    description: "Beautiful party dress for special occasions",
    reviews: 987,
    stock: 40
  },
  {
    id: "kids-5",
    name: "Kids Winter Jacket",
    price: 1899,
    image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400",
    category: "Kids Wear",
    rating: 4.6,
    description: "Warm winter jacket with hood",
    reviews: 1567,
    stock: 50
  },
  {
    id: "kids-6",
    name: "School Uniform Set",
    price: 1199,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400",
    category: "Kids Wear",
    rating: 4.5,
    description: "Complete school uniform set",
    reviews: 2890,
    stock: 70
  },
  {
    id: "kids-7",
    name: "Kids Pajama Set",
    price: 899,
    image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400",
    category: "Kids Wear",
    rating: 4.7,
    description: "Comfortable nightwear for kids",
    reviews: 3210,
    stock: 85
  },
  {
    id: "kids-8",
    name: "Baby Onesie Pack",
    price: 999,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400",
    category: "Kids Wear",
    rating: 4.8,
    description: "Pack of 5 cotton onesies",
    reviews: 4567,
    stock: 90
  },
  {
    id: "kids-9",
    name: "Kids Sports Shorts",
    price: 699,
    image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400",
    category: "Kids Wear",
    rating: 4.3,
    description: "Athletic shorts for active kids",
    reviews: 1789,
    stock: 75
  },
  {
    id: "kids-10",
    name: "Kids Ethnic Wear",
    price: 1799,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400",
    category: "Kids Wear",
    rating: 4.9,
    description: "Traditional ethnic wear for festivals",
    reviews: 876,
    stock: 30
  },

  // Watches (10 items)
  {
    id: "watches-1",
    name: "Apple Watch Series 9",
    price: 41900,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400",
    category: "Watches",
    rating: 4.8,
    description: "Advanced smartwatch with health monitoring",
    reviews: 3456,
    stock: 25
  },
  {
    id: "watches-2",
    name: "Samsung Galaxy Watch 6",
    price: 32999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "Watches",
    rating: 4.6,
    description: "Android smartwatch with rotating bezel",
    reviews: 2345,
    stock: 30
  },
  {
    id: "watches-3",
    name: "Fossil Analog Watch",
    price: 8999,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400",
    category: "Watches",
    rating: 4.5,
    description: "Classic analog watch with leather strap",
    reviews: 1876,
    stock: 45
  },
  {
    id: "watches-4",
    name: "Titan Steel Watch",
    price: 5999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "Watches",
    rating: 4.4,
    description: "Elegant steel watch for formal occasions",
    reviews: 2890,
    stock: 50
  },
  {
    id: "watches-5",
    name: "Casio G-Shock",
    price: 12999,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400",
    category: "Watches",
    rating: 4.7,
    description: "Rugged sports watch with shock resistance",
    reviews: 4567,
    stock: 35
  },
  {
    id: "watches-6",
    name: "Fitbit Sense 2",
    price: 24999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "Watches",
    rating: 4.6,
    description: "Health-focused smartwatch with ECG",
    reviews: 1567,
    stock: 40
  },
  {
    id: "watches-7",
    name: "Seiko Automatic",
    price: 18999,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400",
    category: "Watches",
    rating: 4.8,
    description: "Premium automatic mechanical watch",
    reviews: 987,
    stock: 20
  },
  {
    id: "watches-8",
    name: "Digital Sports Watch",
    price: 2999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "Watches",
    rating: 4.3,
    description: "Water-resistant digital watch for sports",
    reviews: 3210,
    stock: 60
  },
  {
    id: "watches-9",
    name: "Luxury Gold Watch",
    price: 45999,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400",
    category: "Watches",
    rating: 4.9,
    description: "Luxury gold-plated watch with diamonds",
    reviews: 234,
    stock: 10
  },
  {
    id: "watches-10",
    name: "Kids Learning Watch",
    price: 1999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "Watches",
    rating: 4.5,
    description: "Educational watch for kids with games",
    reviews: 1890,
    stock: 55
  },

  // Accessories (10 items)
  {
    id: "accessories-1",
    name: "Leather Wallet",
    price: 1999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    category: "Accessories",
    rating: 4.6,
    description: "Genuine leather bi-fold wallet",
    reviews: 3456,
    stock: 60
  },
  {
    id: "accessories-2",
    name: "Designer Sunglasses",
    price: 2999,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    category: "Accessories",
    rating: 4.5,
    description: "UV protection designer sunglasses",
    reviews: 2345,
    stock: 45
  },
  {
    id: "accessories-3",
    name: "Phone Case iPhone 15",
    price: 799,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400",
    category: "Accessories",
    rating: 4.4,
    description: "Protective case with drop protection",
    reviews: 4567,
    stock: 80
  },
  {
    id: "accessories-4",
    name: "Bluetooth Earphones",
    price: 3999,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
    category: "Accessories",
    rating: 4.7,
    description: "Wireless earphones with noise cancellation",
    reviews: 2890,
    stock: 55
  },
  {
    id: "accessories-5",
    name: "Travel Backpack",
    price: 2499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    category: "Accessories",
    rating: 4.8,
    description: "Durable travel backpack with laptop compartment",
    reviews: 1876,
    stock: 35
  },
  {
    id: "accessories-6",
    name: "Power Bank 10000mAh",
    price: 1499,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400",
    category: "Accessories",
    rating: 4.6,
    description: "Fast charging portable power bank",
    reviews: 3210,
    stock: 70
  },
  {
    id: "accessories-7",
    name: "Wireless Charger",
    price: 1999,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
    category: "Accessories",
    rating: 4.5,
    description: "Fast wireless charging pad",
    reviews: 1567,
    stock: 50
  },
  {
    id: "accessories-8",
    name: "Fitness Tracker Band",
    price: 2299,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
    category: "Accessories",
    rating: 4.4,
    description: "Silicone band for fitness trackers",
    reviews: 2456,
    stock: 65
  },
  {
    id: "accessories-9",
    name: "Car Phone Holder",
    price: 899,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400",
    category: "Accessories",
    rating: 4.3,
    description: "Universal car mount for smartphones",
    reviews: 3890,
    stock: 85
  },
  {
    id: "accessories-10",
    name: "USB Cable Set",
    price: 699,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
    category: "Accessories",
    rating: 4.5,
    description: "Multi-type USB charging cables",
    reviews: 4123,
    stock: 100
  }
];

export const categoryOptions = [
  { categoryId: "", name: "All Categories" },
  { categoryId: "books", name: "Books" },
  { categoryId: "electronics", name: "Electronics" },
  { categoryId: "clothing", name: "Clothing" },
  { categoryId: "kitchen", name: "Kitchen" },
  { categoryId: "toys", name: "Toys" },
  { categoryId: "kids-wear", name: "Kids Wear" },
  { categoryId: "watches", name: "Watches" },
  { categoryId: "accessories", name: "Accessories" }
];

export const ratingOptions = [
  { ratingId: "", imageUrl: "", name: "All Ratings" },
  { ratingId: "4", imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=30", name: "4★ & above" },
  { ratingId: "3", imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=30", name: "3★ & above" },
  { ratingId: "2", imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=30", name: "2★ & above" },
  { ratingId: "1", imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=30", name: "1★ & above" }
];
