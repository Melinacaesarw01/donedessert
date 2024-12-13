<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const continueShopping = () => {
  router.push('/menu');
};

const proceedToCheckout = () => {
  router.push('/checkout');
};
</script>

<template>
  <div class="space-y-3">
    <button
      @click="proceedToCheckout"
      class="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition flex items-center justify-center gap-2"
    >
      Lanjut ke Pembayaran
    </button>
    
    <button
      @click="continueShopping"
      class="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-200 transition"
    >
      Lanjut Belanja
    </button>
  </div>
</template>