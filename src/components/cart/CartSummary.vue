<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCart } from '../../composables/useCart';
import { formatPrice } from '../../utils/format';
import { generateWhatsAppMessage, openWhatsApp } from '../../utils/whatsapp';

const router = useRouter();
const cart = useCart();
const discountCode = ref('');
const showCheckoutForm = ref(false);
const customerInfo = ref({
  name: '',
  address: '',
  phone: '',
  email: '',
  notes: ''
});

const applyDiscount = () => {
  if (discountCode.value) {
    cart.applyDiscount(discountCode.value);
    discountCode.value = '';
  }
};

const handleCheckout = () => {
  if (!customerInfo.value.name || !customerInfo.value.address) {
    return;
  }

  const message = generateWhatsAppMessage(
    cart.items.value,
    cart.subtotal.value,
    cart.discount.value,
    cart.total.value,
    customerInfo.value
  );

  openWhatsApp(message);
  cart.clearCart();
  router.push('/menu');
};
</script>

<template>
  <div class="mt-4">
    <div v-if="!showCheckoutForm">
      <div class="flex gap-2">
        <input
          v-model="discountCode"
          type="text"
          placeholder="Kode diskon"
          class="flex-1 border rounded px-3 py-2"
        >
        <button
          @click="applyDiscount"
          class="bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
        >
          Gunakan
        </button>
      </div>
      
      <div class="mt-4 space-y-2">
        <div class="flex justify-between">
          <span>Subtotal:</span>
          <span>Rp {{ formatPrice(cart.subtotal) }}</span>
        </div>
        <div class="flex justify-between text-green-600">
          <span>Diskon:</span>
          <span>-Rp {{ formatPrice(cart.discount) }}</span>
        </div>
        <div class="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>Rp {{ formatPrice(cart.total) }}</span>
        </div>
      </div>
    </div>

    <div v-else class="space-y-4">
      <!-- Form fields remain unchanged -->
    </div>
  </div>
</template>