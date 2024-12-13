<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCart } from '../composables/useCart';
import CheckoutForm from '../components/checkout/CheckoutForm.vue';
import OrderSummary from '../components/checkout/OrderSummary.vue';
import { generateWhatsAppMessage, openWhatsApp } from '../utils/whatsapp';
import type { Order } from '../types';

const router = useRouter();
const cart = useCart();

// Redirect if cart is empty
if (cart.items.value.length === 0) {
  router.push('/menu');
}

const handleOrderSubmit = (order: Order) => {
  const message = generateWhatsAppMessage(
    cart.items.value,
    cart.subtotal.value,
    cart.discount.value,
    cart.total.value,
    {
      name: order.customerName,
      email: order.email,
      phone: order.phone,
      address: order.address,
      notes: order.notes
    }
  );

  openWhatsApp(message);
  cart.clearCart();
  router.push('/menu');
};
</script>

<template>
  <div class="bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Checkout Pesanan</h1>
        <p class="mt-2 text-gray-600">
          Lengkapi informasi pengiriman Anda untuk melanjutkan ke WhatsApp
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CheckoutForm @submit="handleOrderSubmit" />
        <OrderSummary />
      </div>
    </div>
  </div>
</template>