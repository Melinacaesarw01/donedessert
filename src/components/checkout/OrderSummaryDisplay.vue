<script setup lang="ts">
import { computed } from 'vue';
import { useCart } from '../../composables/useCart';
import { formatPrice } from '../../utils/format';

const cart = useCart();

const items = computed(() => cart.items.value);
const subtotal = computed(() => cart.subtotal.value);
const discount = computed(() => cart.discount.value);
const total = computed(() => cart.total.value);
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg p-6">
    <h2 class="text-xl font-semibold mb-6">Ringkasan Pesanan</h2>
    
    <div class="space-y-4">
      <!-- Items List -->
      <div class="space-y-3">
        <div v-for="item in items" :key="item.id" class="flex justify-between text-gray-600">
          <span>{{ item.name }} x{{ item.quantity }}</span>
          <span>Rp {{ formatPrice(item.price * item.quantity) }}</span>
        </div>
      </div>

      <!-- Totals -->
      <div class="border-t pt-4 space-y-2">
        <div class="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>Rp {{ formatPrice(subtotal) }}</span>
        </div>
        <div class="flex justify-between text-green-600">
          <span>Diskon</span>
          <span>-Rp {{ formatPrice(discount) }}</span>
        </div>
        <div class="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>Rp {{ formatPrice(total) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>