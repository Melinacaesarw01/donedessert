<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'
import type { Order } from '../types'

const cart = useCartStore()
const emit = defineEmits<{
  (e: 'submit', order: Order): void
}>()

const form = ref({
  customerName: '',
  email: '',
  phone: '',
  address: ''
})

const submitOrder = () => {
  const order: Order = {
    ...form.value,
    items: [...cart.items],
    subtotal: cart.subtotal,
    discount: cart.discount,
    total: cart.total
  }
  emit('submit', order)
}
</script>

<template>
  <form @submit.prevent="submitOrder" class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">Name</label>
      <input
        v-model="form.customerName"
        type="text"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
      >
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700">Email</label>
      <input
        v-model="form.email"
        type="email"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
      >
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700">Phone</label>
      <input
        v-model="form.phone"
        type="tel"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
      >
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700">Delivery Address</label>
      <textarea
        v-model="form.address"
        required
        rows="3"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
      ></textarea>
    </div>
    
    <button
      type="submit"
      class="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition"
    >
      Place Order
    </button>
  </form>
</template>