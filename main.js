/**
 * todo 1: Create a function named discount
 * todo 2: add 15% vat to the price
 * todo 3: if the price is greater than 1000, apply a 10% discount
 * todo 4: if the price is greater than 5000, apply a 20% discount
 * todo 5: if the price is greater than 10000, apply a 30% discount
 * todo 6: if the price is greater than 20000, apply a 40% discount
 * todo 7: if the price is greater than 50000, apply a 50% discount
 * todo 8: if the price is greater than 100000, apply a 60% discount
 * todo 9: add a function which will show the discounted price
 * todo 10: add a function which will show the final price
 */
let input = +prompt("Enter your product Price: ");
let vatPrice = (userPrice = 0, vat = 0.15) => {
  const vatAmount = userPrice * vat;
  let price = userPrice + vatAmount;
  return price;
};
let discount = (discountPrice = 0) => {
  if (isNaN(discountPrice)) {
    alert("Please Enter a valid Price");
    window.location.reload();
  } else if (discountPrice < 500) {
    alert("No Discount Available");
    discountPrice = discountPrice;
  } else if (discountPrice > 1000) {
    discountPrice = discountPrice - discountPrice * 0.1;
  } else if (discountPrice > 5000) {
    discountPrice = discountPrice - discountPrice * 0.2;
  } else if (discountPrice > 10000) {
    discountPrice = discountPrice - discountPrice * 0.3;
  } else if (discountPrice > 20000) {
    discountPrice = discountPrice - discountPrice * 0.4;
  } else if (discountPrice > 50000) {
    discountPrice = discountPrice - discountPrice * 0.5;
  } else if (discountPrice > 100000) {
    discountPrice = discountPrice - discountPrice * 0.6;
  } else {
    alert("No Discount Available");
    window.location.reload();
  }
  return discountPrice;
};
let priceWithVat = vatPrice(input);
let priceWithDiscount = discount(priceWithVat);
let array = [priceWithVat, priceWithDiscount];
let showPrice = (array) => {
  console.log(`
    ----------------------------- invoice -----------------------------
                        Your Main Price is  : ${input}
                        Vat 15%             : ${array[0] - input}
                        Price with VAT      : ${array[0]}
                        Discount            : ${array[0] - array[1]}
                        Price after Discount: ${array[1]}
    --------------------------------------------------------------------
    `);
};
showPrice(array);
