export interface Product {
  id: string;
  barcode: string;
  name: string;
  description: string;
  composition: string;
  image_url: string;
  average_rating: number;
  created_at: Date;
  updated_at: Date;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  created_at: Date;
}

export interface Price {
  id: string;
  product_id: string;
  store_id: string;
  price: number; // в рублях
  updated_at: Date;
}

export interface Review {
  id: string;
  product_id: string;
  author: string;
  text: string;
  rating: number;
  date: Date;
}

export interface PopularProduct {
  product_id: string;
  scan_count: number;
  period: string; // 'day', 'week', 'month'
}