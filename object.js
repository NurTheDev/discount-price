const vat = 0.15;

const foodItems = {
  burger: {
    price: 500,
    elementId: "burger",
  },
  pizza: {
    price: 300,
    elementId: "pizza",
  },
  chicken: {
    price: 200,
    elementId: "chicken",
  },
  sandwich: {
    price: 100,
    elementId: "sandwich",
  },
  biriyani: {
    price: 250,
    elementId: "biriyani",
  },
  noodles: {
    price: 150,
    elementId: "noodles",
  },
  pasta: {
    price: 180,
    elementId: "pasta",
  },
  friedRice: {
    price: 120,
    elementId: "friedRice",
  },
  donut: {
    price: 80,
    elementId: "donut",
  },
  iceCream: {
    price: 320,
    elementId: "iceCream",
  },
};

const calculatePrice = (item, quantity) => {
  let vatAmount = quantity * item.price * vat + quantity * item.price;
  let discountPrice = 0;

  if (quantity >= 10) {
    discountPrice = vatAmount - vatAmount * 0.2;
  } else if (quantity <= 5) {
    discountPrice = vatAmount - vatAmount * 0.1;
  } else {
    discountPrice = vatAmount;
  }

  return { vatAmount, discountPrice };
};

const purchaseItem = (item) => {
  let input = prompt(
    `Do You Want to Buy ${item}? Enter Yes or No`
  ).toLowerCase();
  if (input === "yes") {
    let confirmPurchase = confirm(
      `${item} Price is ${foodItems[item].price}tk. Do you want to buy? Click Ok to continue`
    );
    if (confirmPurchase) {
      let quantity = +prompt(`How many ${item} do you want to buy?`);
      if (isNaN(quantity) || quantity <= 0) {
        alert("Please Enter a valid Number");
        return;
      }

      const { vatAmount, discountPrice } = calculatePrice(
        foodItems[item],
        quantity
      );
      alert(
        `You have bought ${quantity} ${item}. Your total price is ${discountPrice}tk`
      );

      let recipe = `
            <------------------------- Invoice Resit-------------------------->
                    Your Product Price is : ${foodItems[item].price} Tk
                    Vat for this Product  : ${vat * 100} %
                    Vat Amount            : ${
                      vatAmount - foodItems[item].price
                    } Tk
                    Total Price with Vat  : ${vatAmount} Tk
                    Price After Discount  : ${discountPrice} Tk
            <------------------------- Invoice Resit--------------------------> 
        `;
      console.log(recipe);
    } else {
      alert("Thanks for visiting our site");
    }
  } else if (input === "no") {
    alert("Thank you for visiting our site");
  } else {
    alert("Please Enter Yes or No");
  }
};

Object.keys(foodItems).forEach((item) => {
  document
    .getElementById(foodItems[item].elementId)
    .addEventListener("click", () => purchaseItem(item));
});
    