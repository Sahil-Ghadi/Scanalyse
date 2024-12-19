export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  rating: number;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  riskLevel: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  concerns: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}