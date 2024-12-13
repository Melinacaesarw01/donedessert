import type { CartItem } from '../types';

export const calculateSubtotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const calculateDiscount = (subtotal: number, discountCode: string): number => {
  if (discountCode === 'DESSERT10') {
    return Math.round(subtotal * 0.1);
  }
  return 0;
};

export const calculateTotal = (subtotal: number, discount: number): number => {
  return Math.max(0, subtotal - discount);
};