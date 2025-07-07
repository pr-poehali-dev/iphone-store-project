export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  condition: "new" | "used";
  image: string;
  storage: string;
  color: string;
  rating: number;
  inStock: boolean;
}

export interface Accessory {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface FilterState {
  priceRange: [number, number];
  condition: "all" | "new" | "used";
  sortBy: "popularity" | "price-asc" | "price-desc" | "rating";
}
