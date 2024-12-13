<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'
import NavigationLink from './navigation/NavigationLink.vue'
import CartIcon from './navigation/CartIcon.vue'
import MobileMenu from './navigation/MobileMenu.vue'

const cart = useCartStore()
const isMobileMenuOpen = ref(false)

const navigationItems = [
  { name: 'Menu', href: '/menu' },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Cara Pesan', href: '/how-to-order' },
  { name: 'Kontak', href: '/contact' }
]
</script>

<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0 flex items-center">
          <RouterLink to="/" class="text-2xl font-bold text-primary">
            DessertBox
          </RouterLink>
        </div>

        <div class="hidden md:flex md:items-center md:space-x-8">
          <NavigationLink 
            v-for="item in navigationItems"
            :key="item.name"
            :href="item.href"
            :name="item.name"
          />
        </div>

        <div class="flex items-center space-x-4">
          <CartIcon :itemCount="cart.items.length" />
          
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
          >
            <span class="sr-only">Buka menu utama</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <MobileMenu 
      :isOpen="isMobileMenuOpen"
      :items="navigationItems"
      @close="isMobileMenuOpen = false"
    />
  </nav>
</template>