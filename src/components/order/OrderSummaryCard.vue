<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
    <div class="space-y-3">
      <slot></slot>
    </div>
  </div>
</template>