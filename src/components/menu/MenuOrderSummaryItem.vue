<script setup lang="ts">
import { computed } from 'vue';
import { formatPrice } from '../../utils/format';

const props = defineProps<{
  label: string;
  value: number;
  type: 'count' | 'currency' | 'discount' | 'total';
}>();

const formattedValue = computed(() => {
  switch (props.type) {
    case 'count':
      return props.value;
    case 'currency':
      return `Rp ${formatPrice(props.value)}`;
    case 'discount':
      return `-Rp ${formatPrice(props.value)}`;
    case 'total':
      return `Rp ${formatPrice(props.value)}`;
    default:
      return props.value;
  }
});

const itemClasses = computed(() => ({
  'flex justify-between items-center py-2': true,
  'text-gray-600': props.type === 'count' || props.type === 'currency',
  'text-green-600': props.type === 'discount',
  'text-lg font-bold border-t border-gray-200 pt-3 mt-3': props.type === 'total'
}));
</script>

<template>
  <div :class="itemClasses">
    <span>{{ label }}</span>
    <span>{{ formattedValue }}</span>
  </div>
</template>