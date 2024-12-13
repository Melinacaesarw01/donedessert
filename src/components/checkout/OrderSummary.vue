<script setup lang="ts">
import OrderSummaryDisplay from './OrderSummaryDisplay.vue';
</script>

<template>
  <div class="space-y-6">
    <OrderSummaryDisplay />
    <p class="text-sm text-gray-500">
      * Harga sudah termasuk pajak dan biaya pengiriman
    </p>
  </div>
</template>