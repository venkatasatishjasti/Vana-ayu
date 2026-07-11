export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviewsCount: number;
  nutrition: Record<string, string>;
  ingredients: string[];
  origin: string;
  weight: string;
  inStock: boolean;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  review: string;
  rating: number;
}

export interface Recipe {
  id: string;
  title: string;
  category: string;
  image: string;
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Expert';
  summary: string;
  ingredients: string[];
  instructions: string[];
  author: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
