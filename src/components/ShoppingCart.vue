<script setup lang="ts">
import { useCart } from '../composables/useCart'
import CartItem from './cart/CartItem.vue'
import CartSummary from './cart/CartSummary.vue'

const cart = useCart()
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold mb-4">Keranjang Belanja</h2>
    
    <div v-if="!cart.items.length" class="text-gray-500 text-center py-8">
      Keranjang belanja Anda kosong
    </div>
    
    <div v-else>
      <div class="space-y-4">
        <CartItem
          v-for="item in cart.items"
          :key="item.id"
          :item="item"
        />
      </div>
      
      <CartSummary />
    </div>
  </div>
</template>