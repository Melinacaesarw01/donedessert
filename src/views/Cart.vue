<script setup lang="ts">
import { computed } from 'vue';
import { useCart } from '../composables/useCart';
import CartHeader from '../components/cart/CartHeader.vue';
import CartItemList from '../components/cart/CartItemList.vue';
import CartActions from '../components/cart/CartActions.vue';
import CartOrderSummary from '../components/cart/CartOrderSummary.vue';
import CartDiscountInput from '../components/cart/CartDiscountInput.vue';

const cart = useCart();
const hasItems = computed(() => cart.items.value.length > 0);
</script>

<template>
  <div class="bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CartHeader />

      <div v-if="!hasItems" class="bg-white rounded-lg shadow-md p-6 text-center">
        <div class="mb-4">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <p class="text-gray-600 mb-4">Keranjang belanja Anda kosong</p>
        <router-link
          to="/menu"
          class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 transition"
        >
          Lanjut Belanja
        </router-link>
      </div>

      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <CartItemList />
        </div>

        <div class="lg:col-span-1 space-y-4">
          <CartDiscountInput />
          <CartOrderSummary />
          <CartActions />
        </div>
      </div>
    </div>
  </div>
</template>