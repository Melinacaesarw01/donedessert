import { computed } from 'vue'
import { useCartStore } from '../stores/cart'
import type { Product } from '../types'

export function useCart() {
  const cart = useCartStore()
  
  const addToCart = (product: Product) => {
    cart.addToCart(product)
  }
  
  const removeFromCart = (productId: number) => {
    cart.removeFromCart(productId)
  }
  
  const updateQuantity = (productId: number, quantity: number) => {
    cart.updateQuantity(productId, quantity)
  }
  
  const clearCart = () => {
    cart.clearCart()
  }
  
  const applyDiscount = (code: string) => {
    cart.applyDiscount(code)
  }
  
  return {
    items: computed(() => cart.items),
    subtotal: computed(() => cart.subtotal),
    discount: computed(() => cart.discount),
    total: computed(() => cart.total),
    itemCount: computed(() => cart.items.reduce((total, item) => total + item.quantity, 0)),
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    applyDiscount
  }
}