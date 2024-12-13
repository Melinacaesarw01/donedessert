<script setup lang="ts">
import { computed } from 'vue';
import { useCart } from '../../composables/useCart';
import CartOrderSummaryItem from './CartOrderSummaryItem.vue';

const cart = useCart();

const summaryData = computed(() => [
  {
    label: 'Total Items',
    value: cart.itemCount.value,
    type: 'count'
  },
  {
    label: 'Subtotal',
    value: cart.subtotal.value,
    type: 'currency'
  },
  {
    label: 'Diskon',
    value: cart.discount.value,
    type: 'discount'
  },
  {
    label: 'Total',
    value: cart.total.value,
    type: 'total'
  }
]);
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <h3 class="text-lg font-semibold mb-4">Ringkasan Pesanan</h3>
    <div class="space-y-3">
      <CartOrderSummaryItem
        v-for="item in summaryData"
        :key="item.label"
        :label="item.label"
        :value="item.value"
        :type="item.type"
      />
    </div>
  </div>
</template>