<script setup lang="ts">
import { products } from '../data/products'
import MenuProductGrid from '../components/menu/MenuProductGrid.vue'
import MenuHeader from '../components/menu/MenuHeader.vue'
</script>

<template>
  <div class="bg-gray-100 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <MenuHeader />
      <MenuProductGrid :products="products" />
    </div>
  </div>
</template>