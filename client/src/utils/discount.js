export const discount = (price, discount) => {
  const percentage = discount / 100;
  return Math.round(price - price * percentage);
};
