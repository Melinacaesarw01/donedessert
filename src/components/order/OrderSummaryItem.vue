<script setup lang="ts">
defineProps<{
  label: string
  value: string | number
  highlight?: boolean
  bold?: boolean
}>()
</script>

<template>
  <div class="flex justify-between" :class="{
    'text-gray-600': !highlight && !bold,
    'text-green-600': highlight,
    'font-bold text-lg': bold
  }">
    <span>{{ label }}:</span>
    <span>{{ value }}</span>
  </div>
</template>