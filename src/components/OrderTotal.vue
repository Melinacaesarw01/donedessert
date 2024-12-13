<script setup lang="ts">
import { computed } from 'vue';
import { useCart } from '../composables/useCart';
import { formatPrice } from '../utils/format';
import OrderSummaryCard from './order/OrderSummaryCard.vue';
import OrderSummaryItem from './order/OrderSummaryItem.vue';

const cart = useCart();

const formattedSubtotal = computed(() => `Rp ${formatPrice(cart.subtotal)}`);
const formattedDiscount = computed(() => `-Rp ${formatPrice(cart.discount)}`);
const formattedTotal = computed(() => `Rp ${formatPrice(cart.total)}`);
</script>

<template>
  <OrderSummaryCard title="Ringkasan Pesanan">
    <OrderSummaryItem label="Jumlah Item" :value="cart.itemCount" />
    <OrderSummaryItem label="Subtotal" :value="formattedSubtotal" />
    <OrderSummaryItem label="Diskon" :value="formattedDiscount" highlight />
    <div class="pt-3 border-t">
      <OrderSummaryItem label="Total" :value="formattedTotal" bold />
    </div>
  </OrderSummaryCard>
</template>