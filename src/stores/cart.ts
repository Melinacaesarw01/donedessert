import { defineStore } from 'pinia'
import type { CartItem, Product } from '../types'

interface CartState {
  items: CartItem[]
  discountCode: string
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: [],
    discountCode: ''
  }),
  
  getters: {
    subtotal(): number {
      return this.items.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0)
    },
    
    discount(): number {
      if (this.discountCode === 'DESSERT10') {
        return Math.round(this.subtotal * 0.1)
      }
      return 0
    },
    
    total(): number {
      return Math.max(0, this.subtotal - this.discount)
    },
    
    itemCount(): number {
      return this.items.reduce((count, item) => count + item.quantity, 0)
    }
  },
  
  actions: {
    addToCart(product: Product) {
      const existingItem = this.items.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({
          ...product,
          quantity: 1
        })
      }
    },
    
    removeFromCart(productId: number) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index > -1) {
        this.items.splice(index, 1)
      }
    },
    
    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(productId)
        } else {
          item.quantity = quantity
        }
      }
    },
    
    applyDiscount(code: string) {
      this.discountCode = code
    },
    
    clearCart() {
      this.items = []
      this.discountCode = ''
    }
  },
  
  persist: true
})