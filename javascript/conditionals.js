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

/* 2. Write code for a function that checks whether given number is odd or even and prints out "[number] is even" or "[number] is odd"
In this task you can assume input to be of correct data type (numeric) and error handling is not necessary. */

function oddOrEven(number) {
  "var=";
  Number(number);
  if (number % 2 == 0) {
    console.log(+number + " is even");
  } else {
    console.log(+number + " is odd");
  }
}

oddOrEven(2); // 2 is even
oddOrEven(5); // 5 is odd
