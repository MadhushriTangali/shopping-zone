
import { useQuery } from '@tanstack/react-query';
import { productsService, type Product } from '@/services/productsService';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => productsService.getAllProducts(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['products', 'category', category],
    queryFn: () => productsService.getProductsByCategory(category),
    staleTime: 5 * 60 * 1000,
  });
};

export const useSearchProducts = (searchTerm: string) => {
  return useQuery({
    queryKey: ['products', 'search', searchTerm],
    queryFn: () => productsService.searchProducts(searchTerm),
    enabled: !!searchTerm,
    staleTime: 5 * 60 * 1000,
  });
};

export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ['products', 'featured'],
    queryFn: () => productsService.getFeaturedProducts(),
    staleTime: 10 * 60 * 1000, // 10 minutes for featured products
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => productsService.getCategories(),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
};

export const useRatingOptions = () => {
  return useQuery({
    queryKey: ['rating-options'],
    queryFn: () => productsService.getRatingOptions(),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
};
