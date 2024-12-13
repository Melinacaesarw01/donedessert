<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  href: string
  name: string
}>()
</script>

<template>
  <RouterLink
    :to="href"
    class="text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
  >
    {{ name }}
  </RouterLink>
</template>