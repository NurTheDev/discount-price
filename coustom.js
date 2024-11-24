let inputPrice = parseInt(prompt("Enter your product price: "));
let vatCal = (price = 0) => {
  let vat = 0.15;
  if (price >= 1000 && price <= 10000) {
    vat = 0.2;
  } else {
    vat = 0.25;
  }
  const vatPrice = price * vat;
  const priceWithVat = price + vatPrice;

  return { priceWithVat, vatPrice, vat };
};
let { priceWithVat, vatPrice, vat } = vatCal(inputPrice);
let discountCal = (priceWithDiscount = 0) => {
  if (isNaN(priceWithVat)) {
    alert("Please enter a valid price in number");
    window.location.reload();
  } else if (priceWithVat < 500) {
    alert("Sorry, Discount is Not available ");
    confirm("Do you still want to buy. click ok to continue");
    priceWithDiscount = priceWithDiscount;
  } else if (priceWithVat < 2000) {
    priceWithDiscount = priceWithDiscount - priceWithVat * 0.1;
  } else if (priceWithVat < 4000) {
    priceWithDiscount = priceWithDiscount - priceWithVat * 0.2;
  } else if (priceWithVat < 6000) {
    priceWithDiscount = priceWithDiscount - priceWithVat * 0.3;
  } else if (priceWithVat < 8000) {
    priceWithDiscount = priceWithDiscount - priceWithVat * 0.4;
  } else if (priceWithVat < 10000) {
    priceWithDiscount = priceWithDiscount - priceWithVat * 0.5;
  } else if (priceWithVat < 12000) {
    priceWithDiscount = priceWithDiscount - priceWithVat * 0.6;
  } else {
    alert("Sorry discount is not available");
    window.location.reload();
  }
  return priceWithDiscount;
};

const totalVatPrice = vatCal(inputPrice);
const totalDiscount = discountCal(priceWithVat);
const array = [totalVatPrice, totalDiscount];
let showPrice = (array) => {
  console.log(`
      <------------------------- Invoice Resit-------------------------->
          Your Product Price is : ${inputPrice} Tk 
          Vat for this Product  : ${vat * 100} %
          Vat Amount            : ${vatPrice}
          Total Price with Vat  : ${priceWithVat} Tk
          Discount Price        : ${priceWithVat - totalDiscount} tk
          Price After Discount  : ${array[1]}
      <------------------------- Invoice Resit-------------------------->
          `);
};
showPrice(array);
