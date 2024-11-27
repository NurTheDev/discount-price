// Code for burger
const vat = 0.15;
let burger = () => {
  let burgerPrice = 500;
  let discountPrice = 0;
  let vatAmount = 0;
  let input = prompt(
    "Do You Want to Buy Burger? Enter Yes or No"
  ).toLowerCase();
  if (input === "yes") {
    let confirmPurchase = confirm(
      "Burger Price is 500tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let burgerInput = +prompt("How many Burger do you want to buy?");

      if (isNaN(burgerInput) || burgerInput <= 0) {
        alert("Please Enter a valid Number");
        return;
      } else if (burgerInput >= 10) {
        vatAmount = burgerInput * burgerPrice * vat + burgerInput * burgerPrice;
        discountPrice = vatAmount - vatAmount * 0.2;
        alert(
          `You have bought ${burgerInput} Burger. and you got 20% discount. Your total price is ${discountPrice}tk`
        );
      } else if (burgerInput <= 5) {
        vatAmount = burgerInput * burgerPrice * vat + burgerInput * burgerPrice;
        discountPrice = vatAmount - vatAmount * 0.1;
        alert(
          `You have bought ${burgerInput} Burger. and you got 10% discount. Your total price is ${discountPrice}tk`
        );
      } else {
        vatAmount = burgerInput * burgerPrice * vat + burgerPrice * burgerInput;
        alert(
          `You have bought ${burgerInput} Burger. Your total price is ${vatAmount}tk`
        );
      }
      let recipe = `
      <------------------------- Invoice Resit-------------------------->
          Your Product Price is : ${burgerPrice} Tk
          Vat for this Product  : ${vat * 100} %
          Vat Amount            : ${vatAmount - burgerPrice} Tk
          Total Price with Vat  : ${vatAmount} Tk
          Price After Discount  : ${discountPrice} Tk
      <------------------------- Invoice Resit--------------------------> 
    `;
      console.log(recipe);
    } else {
      alert("Thanks for visit our site");
    }
  } else if (input === "no") {
    alert("Thank you for visiting our site");
  } else {
    alert("Please Enter Yes or No");
  }
};
document.getElementById("burger").addEventListener("click", burger);
// Code for pizza
let pizza = () => {
  let pizzaPrice = 300;
  let discountPrice = 0;
  let vatAmount = 0;
  let input = prompt("Do You Want to Buy Pizza? Enter Yes or No").toLowerCase();
  if (input === "yes") {
    let confirmPurchase = confirm(
      "Pizza Price is 300tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let pizzaInput = +prompt("How many Pizza do you want to buy?");
      if (isNaN(pizzaInput) || pizzaInput <= 0) {
        alert("Please Enter a valid Number");
        return;
      } else if (pizzaInput >= 10) {
        vatAmount = pizzaInput * pizzaPrice * vat + pizzaInput * pizzaPrice;
        discountPrice = vatAmount - vatAmount * 0.2;
        alert(
          `You have bought ${pizzaInput} Pizza. and you got 20% discount. Your total price is ${discountPrice}tk`
        );
      } else if (pizzaInput <= 5) {
        vatAmount = pizzaInput * pizzaPrice * vat + pizzaInput * pizzaPrice;
        discountPrice = vatAmount - vatAmount * 0.1;
        alert(
          `You have bought ${pizzaInput} Pizza. and you got 10% discount. Your total price is ${discountPrice}tk`
        );
      } else {
        vatAmount = pizzaInput * pizzaPrice * vat + pizzaPrice * pizzaInput;
        alert(
          `You have bought ${pizzaInput} Pizza. Your total price is ${vatAmount}tk`
        );
      }
      let recipe = `
      <------------------------- Invoice Resit-------------------------->
          Your Product Price is : ${pizzaPrice} Tk
          Vat for this Product  : ${vat * 100} %
          Vat Amount            : ${vatAmount - pizzaPrice} Tk
          Total Price with Vat  : ${vatAmount} Tk
          Price After Discount  : ${discountPrice} Tk
      <------------------------- Invoice Resit--------------------------> 
    `;
      console.log(recipe);
    } else {
      alert("Thanks for visit our site");
    }
  } else if (input === "no") {
    alert("Thank you for visiting our site");
  } else {
    alert("Please Enter Yes or No");
  }
};
document.getElementById("pizza").addEventListener("click", pizza);
// Code for Chicken
let chicken = () => {
  let chickenPrice = 200;
  let discountPrice = 0;
  let vatAmount = 0;
  let input = prompt(
    "Do You Want to Buy Chicken? Enter Yes or No"
  ).toLowerCase();
  if (input === "yes") {
    let confirmPurchase = confirm(
      "Chicken Price is 200tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let chickenInput = +prompt("How many Chicken do you want to buy?");
      if (isNaN(chickenInput) || chickenInput <= 0) {
        alert("Please Enter a valid Number");
        return;
      } else if (chickenInput >= 10) {
        vatAmount =
          chickenInput * chickenPrice * vat + chickenInput * chickenPrice;
        discountPrice = vatAmount - vatAmount * 0.2;
        alert(
          `You have bought ${chickenInput} Chicken. and you got 20% discount. Your total price is ${discountPrice}tk`
        );
      } else if (chickenInput <= 5) {
        vatAmount =
          chickenInput * chickenPrice * vat + chickenInput * chickenPrice;
        discountPrice = vatAmount - vatAmount * 0.1;
        alert(
          `You have bought ${chickenInput} Chicken. and you got 10% discount. Your total price is ${discountPrice}tk`
        );
      } else {
        vatAmount =
          chickenInput * chickenPrice * vat + chickenPrice * chickenInput;
        alert(
          `You have bought ${chickenInput} Chicken. Your total price is ${vatAmount}tk`
        );
      }
      let recipe = `
      <------------------------- Invoice Resit-------------------------->
          Your Product Price is : ${chickenPrice} Tk
          Vat for this Product  : ${vat * 100} %
          Vat Amount            : ${vatAmount - chickenPrice} Tk
          Total Price with Vat  : ${vatAmount} Tk
          Price After Discount  : ${discountPrice} Tk
      <------------------------- Invoice Resit--------------------------> 
    `;
      console.log(recipe);
    } else {
      alert("Thanks for visit our site");
    }
  } else if (input === "no") {
    alert("Thank you for visiting our site");
  } else {
    alert("Please Enter Yes or No");
  }
};
document.getElementById("chicken").addEventListener("click", chicken);
// Code for Sandwich
let sandwich = () => {
  let sandwichPrice = 100;
  let discountPrice = 0;
  let vatAmount = 0;
  let input = prompt(
    "Do You Want to Buy Sandwich? Enter Yes or No"
  ).toLowerCase();
  if (input === "yes") {
    let confirmPurchase = confirm(
      "Sandwich Price is 100tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let sandwichInput = +prompt("How many Sandwich do you want to buy?");
      if (isNaN(sandwichInput) || sandwichInput <= 0) {
        alert("Please Enter a valid Number");
        return;
      } else if (sandwichInput >= 10) {
        vatAmount =
          sandwichInput * sandwichPrice * vat + sandwichInput * sandwichPrice;
        discountPrice = vatAmount - vatAmount * 0.2;
        alert(
          `You have bought ${sandwichInput} Sandwich. and you got 20% discount. Your total price is ${discountPrice}tk`
        );
      } else if (sandwichInput <= 5) {
        vatAmount =
          sandwichInput * sandwichPrice * vat + sandwichInput * sandwichPrice;
        discountPrice = vatAmount - vatAmount * 0.1;
        alert(
          `You have bought ${sandwichInput} Sandwich. and you got 10% discount. Your total price is ${discountPrice}tk`
        );
      } else {
        vatAmount =
          sandwichInput * sandwichPrice * vat + sandwichPrice * sandwichInput;
        alert(
          `You have bought ${sandwichInput} Sandwich. Your total price is ${vatAmount}tk`
        );
      }
      let recipe = `
      <------------------------- Invoice Resit-------------------------->
          Your Product Price is : ${sandwichPrice} Tk
          Vat for this Product  : ${vat * 100} %
          Vat Amount            : ${vatAmount - sandwichPrice} Tk
          Total Price with Vat  : ${vatAmount} Tk
          Price After Discount  : ${discountPrice} Tk
      <------------------------- Invoice Resit--------------------------> 
    `;
      console.log(recipe);
    } else {
      alert("Thanks for visit our site");
    }
  } else if (input === "no") {
    alert("Thank you for visiting our site");
  } else {
    alert("Please Enter Yes or No");
  }
};
document.getElementById("sandwich").addEventListener("click", sandwich);
// code for biriyani
let biriyani = () => {
  let biriyaniPrice = 250;
  let discountPrice = 0;
  let vatAmount = 0;
  let input = prompt(
    "Do You Want to Buy Biriyani? Enter Yes or No"
  ).toLowerCase();
  if (input === "yes") {
    let confirmPurchase = confirm(
      "Biriyani Price is 250tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let biriyaniInput = +prompt("How many Biriyani do you want to buy?");
      if (isNaN(biriyaniInput) || biriyaniInput <= 0) {
        alert("Please Enter a valid Number");
        return;
      } else if (biriyaniInput >= 10) {
        vatAmount =
          biriyaniInput * biriyaniPrice * vat + biriyaniInput * biriyaniPrice;
        discountPrice = vatAmount - vatAmount * 0.2;
        alert(
          `You have bought ${biriyaniInput} Biriyani. and you got 20% discount. Your total price is ${discountPrice}tk`
        );
      } else if (biriyaniInput <= 5) {
        vatAmount =
          biriyaniInput * biriyaniPrice * vat + biriyaniInput * biriyaniPrice;
        discountPrice = vatAmount - vatAmount * 0.1;
        alert(
          `You have bought ${biriyaniInput} Biriyani. and you got 10% discount. Your total price is ${discountPrice}tk`
        );
      } else {
        vatAmount =
          biriyaniInput * biriyaniPrice * vat + biriyaniPrice * biriyaniInput;
        alert(
          `You have bought ${biriyaniInput} Biriyani. Your total price is ${vatAmount}tk`
        );
      }
      let recipe = `
      <------------------------- Invoice Resit-------------------------->
          Your Product Price is : ${biriyaniPrice} Tk
          Vat for this Product  : ${vat * 100} %
          Vat Amount            : ${vatAmount - biriyaniPrice} Tk
          Total Price with Vat  : ${vatAmount} Tk
          Price After Discount  : ${discountPrice} Tk
        <------------------------- Invoice Resit-------------------------->
    `;
      console.log(recipe);
    } else {
      alert("Thanks for visit our site");
    }
  } else if (input === "no") {
    alert("Thank you for visiting our site");
  } else {
    alert("Please Enter Yes or No");
  }
};
document.getElementById("biriyani").addEventListener("click", biriyani);
// code for Noodles
let noodles = () => {
  let noodlesPrice = 150;
  let discountPrice = 0;
  let vatAmount = 0;
  let input = prompt(
    "Do You Want to Buy Noodles? Enter Yes or No"
  ).toLowerCase();
  if (input === "yes") {
    let confirmPurchase = confirm(
      "Noodles Price is 150tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let noodlesInput = +prompt("How many Noodles do you want to buy?");
      if (isNaN(noodlesInput) || noodlesInput <= 0) {
        alert("Please Enter a valid Number");
        return;
      } else if (noodlesInput >= 10) {
        vatAmount =
          noodlesInput * noodlesPrice * vat + noodlesInput * noodlesPrice;
        discountPrice = vatAmount - vatAmount * 0.2;
        alert(
          `You have bought ${noodlesInput} Noodles. and you got 20% discount. Your total price is ${discountPrice}tk`
        );
      } else if (noodlesInput <= 5) {
        vatAmount =
          noodlesInput * noodlesPrice * vat + noodlesInput * noodlesPrice;
        discountPrice = vatAmount - vatAmount * 0.1;
        alert(
          `You have bought ${noodlesInput} Noodles. and you got 10% discount. Your total price is ${discountPrice}tk`
        );
      } else {
        vatAmount =
          noodlesInput * noodlesPrice * vat + noodlesPrice * noodlesInput;
        alert(
          `You have bought ${noodlesInput} Noodles. Your total price is ${vatAmount}tk`
        );
      }
      let recipe = `
      <------------------------- Invoice Resit-------------------------->
          Your Product Price is : ${noodlesPrice} Tk
          Vat for this Product  : ${vat * 100} %
          Vat Amount            : ${vatAmount - noodlesPrice} Tk
          Total Price with Vat  : ${vatAmount} Tk
          Price After Discount  : ${discountPrice} Tk
      <------------------------- Invoice Resit--------------------------> 
    `;
      console.log(recipe);
    } else {
      alert("Thanks for visit our site");
    }
  } else if (input === "no") {
    alert("Thank you for visiting our site");
  } else {
    alert("Please Enter Yes or No");
  }
};
document.getElementById("noodles").addEventListener("click", noodles);
// code for pasta
let pasta = () => {
  let pastaPrice = 180;
  let discountPrice = 0;
  let vatAmount = 0;
  let input = prompt("Do You Want to Buy Pasta? Enter Yes or No").toLowerCase();
  if (input === "yes") {
    let confirmPurchase = confirm(
      "Pasta Price is 180tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let pastaInput = +prompt("How many Pasta do you want to buy?");
      if (isNaN(pastaInput) || pastaInput <= 0) {
        alert("Please Enter a valid Number");
        return;
      } else if (pastaInput >= 10) {
        vatAmount = pastaInput * pastaPrice * vat + pastaInput * pastaPrice;
        discountPrice = vatAmount - vatAmount * 0.2;
        alert(
          `You have bought ${pastaInput} Pasta. and you got 20% discount. Your total price is ${discountPrice}tk`
        );
      } else if (pastaInput <= 5) {
        vatAmount = pastaInput * pastaPrice * vat + pastaInput * pastaPrice;
        discountPrice = vatAmount - vatAmount * 0.1;
        alert(
          `You have bought ${pastaInput} Pasta. and you got 10% discount. Your total price is ${discountPrice}tk`
        );
      } else {
        vatAmount = pastaInput * pastaPrice * vat + pastaPrice * pastaInput;
        alert(
          `You have bought ${pastaInput} Pasta. Your total price is ${vatAmount}tk`
        );
      }
      let recipe = `
      <------------------------- Invoice Resit-------------------------->
          Your Product Price is : ${pastaPrice} Tk
          Vat for this Product  : ${vat * 100} %
          Vat Amount            : ${vatAmount - pastaPrice} Tk
          Total Price with Vat  : ${vatAmount} Tk
          Price After Discount  : ${discountPrice} Tk
      <------------------------- Invoice Resit--------------------------> 
    `;
      console.log(recipe);
    } else {
      alert("Thanks for visit our site");
    }
  } else if (input === "no") {
    alert("Thank you for visiting our site");
  } else {
    alert("Please Enter Yes or No");
  }
};
document.getElementById("pasta").addEventListener("click", pasta);
// code for Fried Rice
let friedRice = () => {
  let friedRicePrice = 120;
  let discountPrice = 0;
  let vatAmount = 0;
  let input = prompt(
    "Do You Want to Buy Fried Rice? Enter Yes or No"
  ).toLowerCase();
  if (input === "yes") {
    let confirmPurchase = confirm(
      "Fried Rice Price is 120tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let friedRiceInput = +prompt("How many Fried Rice do you want to buy?");
      if (isNaN(friedRiceInput) || friedRiceInput <= 0) {
        alert("Please Enter a valid Number");
        return;
      } else if (friedRiceInput >= 10) {
        vatAmount =
          friedRiceInput * friedRicePrice * vat +
          friedRiceInput * friedRicePrice;
        discountPrice = vatAmount - vatAmount * 0.2;
        alert(
          `You have bought ${friedRiceInput} Fried Rice. and you got 20% discount. Your total price is ${discountPrice}tk`
        );
      } else if (friedRiceInput <= 5) {
        vatAmount =
          friedRiceInput * friedRicePrice * vat +
          friedRiceInput * friedRicePrice;
        discountPrice = vatAmount - vatAmount * 0.1;
        alert(
          `You have bought ${friedRiceInput} Fried Rice. and you got 10% discount. Your total price is ${discountPrice}tk`
        );
      } else {
        vatAmount =
          friedRiceInput * friedRicePrice * vat +
          friedRicePrice * friedRiceInput;
        alert(
          `You have bought ${friedRiceInput} Fried Rice. Your total price is ${vatAmount}tk`
        );
      }
      let recipe = `
      <------------------------- Invoice Resit-------------------------->
          Your Product Price is : ${friedRicePrice} Tk
          Vat for this Product  : ${vat * 100} %
          Vat Amount            : ${vatAmount - friedRicePrice} Tk
          Total Price with Vat  : ${vatAmount} Tk
          Price After Discount  : ${discountPrice} Tk
      <------------------------- Invoice Resit ------------------------->
    `;
      console.log(recipe);
    } else {
      alert("Thanks for visit our site");
    }
  } else if (input === "no") {
    alert("Thank you for visiting our site");
  } else {
    alert("Please Enter Yes or No");
  }
};
document.getElementById("friedRice").addEventListener("click", friedRice);
// code for donut
let donut = () => {
  let donutPrice = 80;
  let discountPrice = 0;
  let vatAmount = 0;
  let input = prompt("Do You Want to Buy Donut? Enter Yes or No").toLowerCase();
  if (input === "yes") {
    let confirmPurchase = confirm(
      "Donut Price is 80tk. Do you want to buy? Click Ok to continue"
    );
    if (confirmPurchase) {
      let donutInput = +prompt("How many Donut do you want to buy?");
      if (isNaN(donutInput) || donutInput <= 0) {
        alert("Please Enter a valid Number");
        return;
      } else if (donutInput >= 10) {
        vatAmount = donutInput * donutPrice * vat + donutInput * donutPrice;
        discountPrice = vatAmount - vatAmount * 0.2;
        alert(
          `You have bought ${donutInput} Donut. and you got 20% discount. Your total price is ${discountPrice}tk`
        );
      } else if (donutInput <= 5) {
        vatAmount = donutInput * donutPrice * vat + donutInput * donutPrice;
        discountPrice = vatAmount - vatAmount * 0.1;
        alert(
          `You have bought ${donutInput} Donut. and you got 10% discount. Your total price is ${discountPrice}tk`
        );
      } else {
        vatAmount = donutInput * donutPrice * vat + donutPrice * donutInput;
        alert(
          `You have bought ${donutInput} Donut. Your total price is ${vatAmount}tk`
        );
      }
      let recipe = `
      <------------------------- Invoice Resit-------------------------->
          Your Product Price is : ${donutPrice} Tk
          Vat for this Product  : ${vat * 100} %
          Vat Amount            : ${vatAmount - donutPrice} Tk
          Total Price with Vat  : ${vatAmount} Tk
          Price After Discount  : ${discountPrice} Tk
      <------------------------- Invoice Resit-------------------------->
    `;
      console.log(recipe);
    } else {
      alert("Thanks for visit our site");
    }
  } else if (input === "no") {
    alert("Thank you for visiting our site");
  }
};
document.getElementById("donut").addEventListener("click", donut);
// code for Ice Cream
let IceCriem = () => {
  let input = prompt(
    "Do You Want to Bue Ice Cream? Enter Yes or No"
  ).toLowerCase();
  let iceCreamPrice = 320;
  let discountPrice = 0;
  let vatAmount = 0;
  if (input === "yes") {
    let confirmPurchase = confirm(
      `Ice Cream Price is ${iceCreamPrice} TK. Do you Want to bue? Click ok to continue`
    );
    if (confirmPurchase) {
      let input1 = +prompt("How many Ice Cream do you want to buy");
      if (isNaN(input1) || input1 <= 0) {
        alert("Please Enter a valid Number");
        return;
      }
      if (input1 >= 10) {
        vatAmount = input1 * iceCreamPrice * vat + input1 * iceCreamPrice;
        discountPrice = vatAmount - vatAmount * 0.2;
        alert(
          `You have bought ${input1} Ice Cream. and you got 20% discount. Your total price is ${discountPrice}tk`
        );
      } else if (input1 <= 5) {
        vatAmount = input1 * iceCreamPrice * vat + input1 * iceCreamPrice;
        discountPrice = vatAmount - vatAmount * 0.1;
        alert(
          `You have bought ${input1} Ice Cream. and you got 10% discount. Your total price is ${discountPrice}tk`
        );
      } else {
        vatAmount = input1 * iceCreamPrice * vat + iceCreamPrice * input1;
        alert(
          `You have bought ${input1} Ice Cream. Your total price is ${vatAmount}tk`
        );
      }
      let recipe = `
      <------------------------- Invoice Resit-------------------------->
          Your Product Price is : ${iceCreamPrice} Tk
          Vat for this Product  : ${vat * 100} %
          Vat Amount            : ${vatAmount - iceCreamPrice} Tk
          Total Price with Vat  : ${vatAmount} Tk
          Price After Discount  : ${discountPrice} Tk
      <------------------------- Invoice Resit-------------------------->
    `;
      console.log(recipe);
    }
  } else if (input === "no") {
    alert("Thank you for visiting our site");
  } else {
    alert("Please Enter Yes or No");
  }
};
document.getElementById("iceCream").addEventListener("click", IceCriem);
