
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type Product = Tables<'products'>;
export type Category = Tables<'categories'>;
export type RatingOption = Tables<'rating_options'>;

export const productsService = {
  // Get all products
  async getAllProducts(): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error);
      throw error;
    }

    return data || [];
  },

  // Get products by category
  async getProductsByCategory(category: string): Promise<Product[]> {
    if (category === 'all' || !category) {
      return this.getAllProducts();
    }

    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }

    return data || [];
  },

  // Search products
  async searchProducts(searchTerm: string): Promise<Product[]> {
    if (!searchTerm) {
      return this.getAllProducts();
    }

    const { data, error } = await supabase
      .from('products')
      .select('*')
      .or(`name.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%,category.ilike.%${searchTerm}%`)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error searching products:', error);
      throw error;
    }

    return data || [];
  },

  // Get featured products (high rating products)
  async getFeaturedProducts(): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .gte('rating', 4.7)
      .order('rating', { ascending: false })
      .limit(8);

    if (error) {
      console.error('Error fetching featured products:', error);
      throw error;
    }

    return data || [];
  },

  // Get all categories
  async getCategories(): Promise<Category[]> {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }

    return data || [];
  },

  // Get rating options
  async getRatingOptions(): Promise<RatingOption[]> {
    const { data, error } = await supabase
      .from('rating_options')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.error('Error fetching rating options:', error);
      throw error;
    }

    return data || [];
  },
};
