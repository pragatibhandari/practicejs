// Problem 1.
// Program that prints 1 to 100
// for multiple of 3 print Fizz
// for multiple of 5 print Buzz
// for multiple of both 3 and 5 print FizzBuzz

function printnum() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
printnum();

// Problem 2
// Create a prompt where you can write twitter like text limited to 10 words.

function limitText() {
  var text = prompt("Write your tweet");
  var shortText = text.slice(0, 11);
  return console.log(shortText);
}

// 1 line solution for problem 2
console.log(prompt("Write a short tweet").slice(0, 11));

// Problem 3
/* Write code for a function that checks whether a given string is a valid email (NOTE! the validation doesn't need to perfect, it's enough that it fulfills the requirements listed here).

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

// Problem 4
// Write code for a function that checks whether given number is odd or even and prints out "[number] is even" or "[number] is odd"

// In this task you can assume input to be of correct data type (numeric) and error handling is not necessary.

function oddOrEven(number) {
  "var=";
  Number(number);
  if (number % 2 == 0) {
    console.log(+number + " is even");
  } else {
    console.log(+number + " is odd");
  }
}

oddOrEven(2); //2 is even
oddOrEven(5); //5 is odd

// Problem 5
// Write code for a function calculate() that accepts three parameters: number1, number2 and calculation. Calculation is +, -, / or *.
// Function prints out the result of the calculation.

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

calculate(8, 12, "+");
calculate(8, 12, "-");
calculate(8, 12, "*");
calculate(8, 12, "/");

// Problem 6

// Create a function divisibility() that takes three input parameters: divider, min, and max and prints out all the numbers between min and max that are divisible by given divider. Print each number on a new line.
