export const formatPrice = (price: number | undefined | null): string => {
  if (typeof price !== 'number') return '0'
  return price.toLocaleString('id-ID')
}