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

/* 3. Write code for function that checks given number and prints out "Number is positive", "Number is negative" or "Number is zero" respectively.
In this task you can assume input to be of correct data type (numeric) and error handling is not necessary. */

function negativeOrPositive(number) {
  // Your code goes here
  var a = Number(number);
  if (a === 0) {
    console.log("number is zero");
  } else if (a > 0) {
    console.log("number is positive");
  } else {
    console.log("number is negative");
  }
}
negativeOrPositive(0); // Number is zero
negativeOrPositive(1); // Number is positive
negativeOrPositive(-1); // Number is negative

// Problem 4
/* Write code for a function that checks whether a given string is a valid email (NOTE! the validation doesn't need to perfect, 
it's enough that it fulfills the requirements listed here).
The requirements are:
String must contain following characters: ".", "@"
There must be at least two characters after the period.
The first letter cannot be a "." or a "@". */

function checkEmail(email) {
  var re = /[A-Z]/gim;
  var [email1, email2] = email.split(".");
  if (
    email.includes("@") &&
    email.includes(".") &&
    email2.length >= 2 &&
    email.charAt(0) != "@" &&
    email.charAt(0) != "." &&
    re.test(email2) == true
  ) {
    console.log("Email ok");
  } else {
    console.log("Email invalid");
  }
}
checkEmail("foo"); //Email invalid
checkEmail("email@test.fi"); //Email ok
checkEmail("email@test."); //Email invalid

// Problem 5
/* Write code for a function calculate() that accepts three parameters: number1, number2 and calculation. Calculation is +, -, / or *.
 Function prints out the result of the calculation. */

function calculate(number1, number2, calculation) {
  var num1 = Number(number1);
  var num2 = Number(number2);
  var calc = String(calculation);
  let sum = num1 + num2;
  let diff = num1 - num2;
  let product = num1 * num2;
  let divide = num1 / num2;

  if (calc == "+") {
    return console.log(sum);
  } else if (calc == "-") {
    console.log(diff);
  } else if (calc == "*") {
    console.log(product);
  } else {
    console.log(divide);
  }
}
calculate(8, 12, "+"); // 20
calculate(8, 12, "-"); // -4
calculate(8, 12, "*"); // 96
calculate(10, 5, "/"); //2

// Ask the user to input a number.
process.stdout.write("Please enter a number: ");
// Read the input given by the user and store it in a variable
process.stdin.on("data", function (inputFromUser) {
  // The statements below will be executed automatically after
  // the user has typed in something.
  let enteredNumber = Number(inputFromUser);
  if (enteredNumber >= 1 && enteredNumber <= 10) {
    process.stdout.write("Entered number is between 1-10");
  }
  if (enteredNumber < 1 || enteredNumber > 10) {
    process.stdout.write("Entered number is outside 1-10");
  }
  process.exit();
});
