 // Convert string to currency format
 export const currency = function (number: any) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  }).format(number);
};