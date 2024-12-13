<script setup lang="ts">
import type { Order } from '../types'
import { formatPrice } from '../utils/format'

defineProps<{
  order: Order
}>()
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold text-primary">Order Confirmed!</h2>
      <p class="text-gray-600">Thank you for your order, {{ order.customerName }}</p>
    </div>
    
    <div class="space-y-4">
      <div>
        <h3 class="font-semibold">Order Details</h3>
        <div class="mt-2 space-y-2">
          <p><span class="text-gray-600">Email:</span> {{ order.email }}</p>
          <p><span class="text-gray-600">Phone:</span> {{ order.phone }}</p>
          <p><span class="text-gray-600">Delivery Address:</span> {{ order.address }}</p>
        </div>
      </div>
      
      <div>
        <h3 class="font-semibold">Items</h3>
        <div class="mt-2 space-y-2">
          <div v-for="item in order.items" :key="item.id" class="flex justify-between">
            <span>{{ item.name }} x{{ item.quantity }}</span>
            <span>Rp {{ formatPrice(item.price * (item.quantity || 0)) }}</span>
          </div>
        </div>
      </div>
      
      <div class="border-t pt-4">
        <div class="flex justify-between">
          <span>Subtotal:</span>
          <span>Rp {{ formatPrice(order.subtotal) }}</span>
        </div>
        <div class="flex justify-between text-green-600">
          <span>Discount:</span>
          <span>-Rp {{ formatPrice(order.discount) }}</span>
        </div>
        <div class="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>Rp {{ formatPrice(order.total) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>