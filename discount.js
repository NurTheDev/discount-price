let userInput = parseInt(prompt("Enter The Food Number"));

let foodFun = (foodInput) => {
  if (userInput === 1) {
    let confirmPurchase = confirm(
      "Burger Price is 500tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let burgerPrice = 500;
      return burgerPrice;
    } else {
      alert("Thank you for visiting our site");
    }
  } else if (userInput === 2) {
    let confirmPurchase = confirm(
      "Pizza Price is 800tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let pizzaPrice = 800;
      return pizzaPrice;
    } else {
      alert("Thank you for visiting our site");
    }
  } else if (userInput === 3) {
    let confirmPurchase = confirm(
      "Chicken Price is 600tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let chickenPrice = 600;
      return chickenPrice;
    } else {
      alert("Thank you for visiting our site");
    }
  } else if (userInput === 4) {
    let confirmPurchase = confirm(
      "Sandwich Price is 400tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let sandwichPrice = 400;
      return sandwichPrice;
    } else {
      alert("Thank you for visiting our site");
    }
  } else if (userInput === 5) {
    let confirmPurchase = confirm(
      "Biriyani Price is 1000tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let biriyaniPrice = 1000;
      return biriyaniPrice;
    } else {
      alert("Thank you for visiting our site");
    }
  } else if (userInput === 6) {
    let confirmPurchase = confirm(
      "Noodles Price is 700tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let noodlesPrice = 700;
      return noodlesPrice;
    } else {
      alert("Thank you for visiting our site");
    }
  } else if (userInput === 7) {
    let confirmPurchase = confirm(
      "Pasta Price is 900tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let pastaPrice = 900;
      return pastaPrice;
    } else {
      alert("Thank you for visiting our site");
    }
  } else if (userInput === 8) {
    let confirmPurchase = confirm(
      "Fried Rice Price is 800tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let friedRicePrice = 800;
      return friedRicePrice;
    } else {
      alert("Thank you for visiting our site");
    }
  } else if (userInput === 9) {
    let confirmPurchase = confirm(
      "Donut Price is 1200tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let DonutPrice = 1200;
      return DonutPrice;
    } else {
      alert("Thank you for visiting our site");
    }
  } else if (userInput === 10) {
    let confirmPurchase = confirm(
      "Ice Cream Price is 300tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let iceCreamPrice = 300;
      return iceCreamPrice;
    } else {
      alert("Thank you for visiting our site");
    }
  } else {
    alert("Invalid food number");
    window.location.reload();
  }
};

let price = foodFun(userInput);
let vatPrice = (price = 0) => {
  let vat = 0;
  if (price > 100) {
    vat = 0.25;
  } else if (price > 500) {
    vat = 0.2;
  } else if (price > 1000) {
    vat = 0.15;
  } else {
    vat = 0.1;
  }
  const vatAmount = price * vat;
  const priceWithVat = price + vatAmount;
  return { priceWithVat, vatAmount, vat };
};
let { priceWithVat, vatAmount, vat } = vatPrice(price);
let discount = (price = 0) => {
  let discountAmount = 0;
  if (price > 100) {
    discountAmount = price - price * 0.1;
  } else if (price > 500) {
    discountAmount = price - price * 0.2;
  } else if (price > 1000) {
    discountAmount = price - price * 0.3;
  } else {
    discountAmount = price;
  }
  return discountAmount;
};

let priceWithDiscount = discount(priceWithVat);

let showPrice = () => {
  console.log(`
    ----------------------------- invoice -----------------------------
                        Your Main Price is  : ${price}
                        Vat %               : ${vat * 100}%
                        Vat Amount          : ${vatAmount}
                        Price with VAT      : ${priceWithVat}
                        Discount            : ${
                          priceWithVat - priceWithDiscount
                        }
                        Price after Discount: ${priceWithDiscount}
    --------------------------------------------------------------------
    `);
};
showPrice();
