<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { formatPrice } from '../utils/format'
import type { Product } from '../types'

const props = defineProps<{
  product: Product
}>()

const router = useRouter()
const cart = useCartStore()
const quantity = ref(1)

const addToCart = () => {
  for (let i = 0; i < quantity.value; i++) {
    cart.addToCart(props.product)
  }
  quantity.value = 1
  router.push('/cart')
}

const incrementQuantity = () => {
  quantity.value++
}

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-lg font-semibold">{{ product.name }}</h3>
      <p class="text-gray-600 mt-1">{{ product.description }}</p>
      <div class="mt-4 flex justify-between items-center">
        <span class="text-primary font-bold">Rp {{ formatPrice(product.price) }}</span>
        <div class="flex items-center space-x-2">
          <button
            @click="decrementQuantity"
            class="bg-gray-200 text-gray-600 px-2 py-1 rounded-l hover:bg-gray-300 transition"
          >
            -
          </button>
          <span class="bg-gray-100 px-4 py-1">{{ quantity }}</span>
          <button
            @click="incrementQuantity"
            class="bg-gray-200 text-gray-600 px-2 py-1 rounded-r hover:bg-gray-300 transition"
          >
            +
          </button>
        </div>
      </div>
      <button
        @click="addToCart"
        class="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Tambah ke Keranjang
      </button>
    </div>
  </div>
</template>