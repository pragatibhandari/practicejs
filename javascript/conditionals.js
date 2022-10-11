/* 1. Write code for a function calculateDiscount() that calculates a discount for a given price. Function takes one input parameter, 
price, and prints out the discounted price with two decimals. 
Discount percentages are dependent on the price according to the table below: */

function calculateDiscount(price) {
  discountPrice = Number(price);
  if (discountPrice <= 50) {
    console.log(discountPrice.toFixed(2));
  } else if (51 <= discountPrice && discountPrice <= 100) {
    console.log(
      (discountPrice = discountPrice - (10 / 100) * discountPrice).toFixed(2)
    );
  } else if (101 <= discountPrice && discountPrice <= 500) {
    console.log(
      (discountPrice = discountPrice - (20 / 100) * discountPrice).toFixed(2)
    );
  } else {
    console.log(
      (discountPrice = discountPrice - (50 / 100) * discountPrice).toFixed(2)
    );
  }
}

calculateDiscount(51); //45.90
