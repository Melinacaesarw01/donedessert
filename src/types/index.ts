export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  customerName: string;
  email: string;
  phone: string;
  address: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
}