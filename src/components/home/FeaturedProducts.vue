<script setup lang="ts">
import { products } from '../../data/products'
import { useCartStore } from '../../stores/cart'
import { formatPrice } from '../../utils/format'

const cart = useCartStore()
const featuredProducts = products.slice(0, 3)
</script>

<template>
  <section id="featured-products" class="bg-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">
          Dessert Unggulan
        </h2>
        <p class="mt-4 text-xl text-gray-500">
          Kreasi terbaik kami yang akan memanjakan hari Anda
        </p>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="product in featuredProducts"
          :key="product.id"
          class="group relative"
        >
          <div class="relative w-full h-80 rounded-lg overflow-hidden">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover object-center group-hover:opacity-75 transition"
            >
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-lg font-medium text-gray-900">
                {{ product.name }}
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                {{ product.description }}
              </p>
            </div>
            <p class="text-lg font-medium text-primary">
              Rp {{ formatPrice(product.price) }}
            </p>
          </div>
          <button
            @click="cart.addToCart(product)"
            class="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition"
          >
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  </section>
</template>