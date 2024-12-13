<script setup lang="ts">
import { useCart } from '../../composables/useCart';
import { formatPrice } from '../../utils/format';
import type { CartItem } from '../../types';

const props = defineProps<{
  item: CartItem
}>();

const cart = useCart();
</script>

<template>
  <div class="flex items-center gap-4 py-4 border-b">
    <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded">
    <div class="flex-1">
      <h3 class="font-semibold">{{ item.name }}</h3>
      <p class="text-gray-600">Rp {{ formatPrice(item.price) }}</p>
    </div>
    <div class="flex items-center gap-2">
      <button
        @click="cart.updateQuantity(item.id, item.quantity - 1)"
        class="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition"
      >-</button>
      <span class="w-8 text-center">{{ item.quantity }}</span>
      <button
        @click="cart.updateQuantity(item.id, item.quantity + 1)"
        class="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition"
      >+</button>
    </div>
    <div class="text-right min-w-[100px]">
      <p class="font-semibold">Rp {{ formatPrice(item.price * item.quantity) }}</p>
    </div>
    <button
      @click="cart.removeFromCart(item.id)"
      class="text-red-500 hover:text-red-700 transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  </div>
</template>