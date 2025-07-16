
// Re-export types from the service for backward compatibility
export type { Product, Category, RatingOption } from '@/services/productsService';

// Legacy interface for backward compatibility
export interface ProductLegacy {
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

// Legacy exports for backward compatibility - these now return empty arrays
// All data should be fetched from Supabase using the hooks
export const products: ProductLegacy[] = [];

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

// Legacy function - now returns empty array
// Use useFeaturedProducts hook instead
export const getFeaturedProducts = (): ProductLegacy[] => {
  return [];
};
