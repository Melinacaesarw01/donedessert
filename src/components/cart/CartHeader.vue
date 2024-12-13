<script setup lang="ts">
import { computed } from 'vue';
import { useCart } from '../../composables/useCart';

const cart = useCart();
const totalItems = computed(() => cart.itemCount.value);
</script>

<template>
  <div class="bg-white p-4 rounded-lg shadow-sm mb-4">
    <div class="flex items-center">
      <div>
        <h2 class="text-xl font-semibold text-gray-800">Keranjang Belanja</h2>
        <p class="text-sm text-gray-600 mt-1">
          {{ totalItems }} item dalam keranjang
        </p>
      </div>
    </div>
  </div>
</template>