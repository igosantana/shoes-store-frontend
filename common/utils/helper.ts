export const getDiscountedPricePercentage = (originalPrice: number, discountedPrice: number): number => {
  const discount = originalPrice - discountedPrice;

  const discountPercentage = ((discount / originalPrice) * 100).toFixed(2);

  return Number(discountPercentage);
}
