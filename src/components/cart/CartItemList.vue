<script setup lang="ts">
import { computed } from 'vue';
import { useCart } from '../../composables/useCart';
import CartItem from './CartItem.vue';

const cart = useCart();
const items = computed(() => cart.items.value);
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="p-6 space-y-4">
      <CartItem
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>