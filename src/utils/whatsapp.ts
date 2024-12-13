import type { CartItem } from '../types';

export interface CustomerInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  notes?: string;
}

export function generateWhatsAppMessage(
  items: CartItem[],
  subtotal: number,
  discount: number,
  total: number,
  customerInfo: CustomerInfo
): string {
  const itemsList = items
    .map(item => `• ${item.name} (${item.quantity}x) - Rp ${(item.price * item.quantity).toLocaleString('id-ID')}`)
    .join('\n');

  const message = `*Pesanan Baru dari DessertBox*
  
*Informasi Pelanggan:*
Nama: ${customerInfo.name}
Email: ${customerInfo.email}
WhatsApp: ${customerInfo.phone}
Alamat: ${customerInfo.address}
${customerInfo.notes ? `\nCatatan: ${customerInfo.notes}` : ''}

*Detail Pesanan:*
${itemsList}

Subtotal: Rp ${subtotal.toLocaleString('id-ID')}
Diskon: -Rp ${discount.toLocaleString('id-ID')}
*Total: Rp ${total.toLocaleString('id-ID')}*

Terima kasih telah berbelanja di DessertBox! 🎂`;

  return encodeURIComponent(message);
}

export function openWhatsApp(message: string): void {
  const phoneNumber = "62895387214502"; // Updated phone number
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}