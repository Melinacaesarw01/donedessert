<script setup lang="ts">
import { ref } from 'vue';
import { useCart } from '../../composables/useCart';

const cart = useCart();
const discountCode = ref('');

const applyDiscount = () => {
  if (discountCode.value) {
    cart.applyDiscount(discountCode.value);
    discountCode.value = '';
  }
};
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <h3 class="text-lg font-semibold mb-4">Kode Diskon</h3>
    <div class="flex gap-2">
      <input
        v-model="discountCode"
        type="text"
        placeholder="Masukkan kode diskon"
        class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      >
      <button
        @click="applyDiscount"
        class="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors duration-200"
      >
        Gunakan
      </button>
    </div>
    <p class="mt-2 text-sm text-gray-500">
      Gunakan kode "DESSERT10" untuk mendapatkan diskon 10%
    </p>
  </div>
</template>