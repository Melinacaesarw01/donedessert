<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  isOpen: boolean
  items: Array<{ name: string; href: string }>
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div
    v-show="isOpen"
    class="md:hidden"
  >
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
      <RouterLink
        v-for="item in items"
        :key="item.name"
        :to="item.href"
        @click="$emit('close')"
        class="text-gray-700 hover:text-primary hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
      >
        {{ item.name }}
      </RouterLink>
    </div>
  </div>
</template>