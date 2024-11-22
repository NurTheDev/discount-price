let input = parseInt(prompt("Enter your Product Price"));

let vatPrice = (userPrice = 0, vat = 0.15) => {
  const vatAmount = userPrice * vat;
  const priceWithVat = userPrice + vatAmount;
  return priceWithVat;
};
let discount = (discountPrice = 0) => {
  if (isNaN(discountPrice)) {
    alert("Enter your Price in Number");
    window.location.reload();
  } else if (discountPrice > 10000) {
    discountPrice = discountPrice - discountPrice * 0.8;
  } else if (discountPrice > 9000) {
    discountPrice = discountPrice - discountPrice * 0.7;
  } else if (discountPrice > 8000) {
    discountPrice = discountPrice - discountPrice * 0.6;
  } else if (discountPrice > 7000) {
    discountPrice = discountPrice - discountPrice * 0.5;
  } else if (discountPrice > 6000) {
    discountPrice = discountPrice - discountPrice * 0.4;
  } else if (discountPrice > 5000) {
    discountPrice = discountPrice - discountPrice * 0.45;
  } else if (discountPrice > 4000) {
    discountPrice = discountPrice - discountPrice * 0.3;
  } else if (discountPrice > 3000) {
    discountPrice = discountPrice - discountPrice * 0.2;
  } else if (discountPrice > 2000) {
    discountPrice = discountPrice - discountPrice * 0.15;
  } else if (discountPrice > 1000) {
    discountPrice = discountPrice - discountPrice * 0.1;
  } else if (discountPrice < 500) {
    alert("No discount available for this price");
    discountPrice = discountPrice;
  } else {
    alert("Sorry, No discount available");
    window.location.reload();
  }
  return discountPrice;
};
const priceWithVat = vatPrice(input);
const priceAfterDiscount = discount(priceWithVat);
let array = [priceWithVat, priceAfterDiscount];
const showPrice = (array) => {
  console.log(`
        ----------------------------- invoice -----------------------------
                            Your Main Price is  : ${input}
                            Vat 15%             : ${
                              Math.round(array[0]) - input
                            }
                            Price with VAT      : ${Math.round(array[0])}
                            Discount            : ${
                              Math.round(array[0]) - Math.round(array[1])
                            }
                            Price after Discount: ${Math.round(array[1])}
        --------------------------------------------------------------------
        `);
};
showPrice(array);
