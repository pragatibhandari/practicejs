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
/* console.log(prompt("Write a short tweet").slice(0, 11));
 */
// Write code for a function that gets three parameters: firstWeekDay (a number, 1 meaning Monday, 2 for Tuesday etc.), month and numberOfDays and will then print out each date accompanied by the weekday name. Each week is on a new line.

// In this task you can assume input to be of correct data type (numeric) and error handling is not necessary.
function calendar(firstWeekDay, month, numberOfDays) {
  // Let's create a new variable for current weekday
  let weekday = firstWeekDay;

  for (let i = 1; i <= numberOfDays; i++) {
    if (weekday == 1) {
      process.stdout.write("Monday ");
    } else if (weekday == 2) {
      process.stdout.write("Tuesday ");
    } else if (weekday == 3) {
      process.stdout.write("Wednesday ");
    } else if (weekday == 4) {
      process.stdout.write("Thursday ");
    } else if (weekday == 5) {
      process.stdout.write("Friday ");
    } else if (weekday == 6) {
      process.stdout.write("Saturday ");
    } else {
      process.stdout.write("Sunday ");
    }
    weekday++;
    process.stdout.write(i + "." + month + ".");
    if (weekday > 7) {
      // We have reached the end of the week -> go back to Monday
      weekday = 1;
      // Let's print out new line
      process.stdout.write("\n");
    }
  }
}
calendar(4, 9, 30);

// Create a JS array that has the following items: "banana", "apple", "kiwi", "orange".
let fruits = ["watermelon", "banana", "apple", "kiwi", "orange"];
// Print out "First item in the array is [first item]".
process.stdout.write("First item in the array is " + fruits[0]);
// Loop through the array and print out the items.
for (let i = 0; i < fruits.length; i++) {
  process.stdout.write("\n" + fruits[i]);
}
process.stdout.write("\n--Array backwards--");
// Loop through the array backwards and print out the items.
for (let i = fruits.length - 1; i >= 0; i--) {
  process.stdout.write("\n" + fruits[i]);
}

// Add a new element grapefruit in the beginning of the array.
fruits.unshift("grapefruit");
process.stdout.write("\n--Grapefruit added--");
// Loop through the array and print out the items.
for (let i = 0; i < fruits.length; i++) {
  process.stdout.write("\n" + fruits[i]);
}
// Add a new element watermelon in the end of the array.
fruits.push("watermelon");
process.stdout.write("\n--Watermelon added--");
// Loop through the array and print out the items.
for (let i = 0; i < fruits.length; i++) {
  process.stdout.write("\n" + fruits[i]);
}
// Sort the array in descending alphabetical order (z-a).
fruits.sort();
fruits.reverse();
process.stdout.write("\n--Array sorted--");
// Loop through the array and print out the items.
for (let i = 0; i < fruits.length; i++) {
  process.stdout.write("\n" + fruits[i]);
}

// Create a function hello()
function hello() {
  // that prints out text "Hello"
  process.stdout.write("Hello");
}

// Call the function
hello();

// Create a function that takes two numbers as input
function sum(number1, number2) {
  // calculates the sum of the two numbers
  let sum = number1 + number2;
  number1 = 1;
  // prints out the result
  process.stdout.write("\n" + number1 + " + " + number2 + " = " + sum);
}

// Call the function to test it
let number1 = 2;
let number2 = 5;
sum(number1, number2);
process.stdout.write("Value of the original variable is " + number1);
sum(28, 59);

// Create a function that takes two numbers as input
function sum2(number1, number2) {
  // calculates the sum of the two numbers
  let sum = number1 + number2;
  // return the result
  return sum;
}

// Call the function
let result = sum2(10, 10);
process.stdout.write("\nSum is " + result);
process.stdout.write("\nSum is " + sum2(100, 5));
let average = sum2(10, 55, 456, 10) / 4;
process.stdout.write("\nAverage is " + average);

let numbers = [];
process.stdout.write(
  "\n\nPlease enter a number (zero terminates the program): "
);

process.stdin.on("data", function (inputFromUser) {
  let userInput = inputFromUser.toString().trim();

  if (userInput == 0) {
    // Find the largest value in the array using a loop and print it out
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
    process.stdout.write("\nLargest number is " + largest + "\n");

    // Find the smallest value in the array using a loop and print it out
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
    process.stdout.write("Smallest number is " + smallest + "\n\n");
    process.exit();
  } else {
    // Add the number into array
    numbers.push(userInput);
    // Keep asking for numbers
    process.stdout.write(
      "\n\nPlease enter a number (zero terminates the program): "
    );
  }
});

/*1.1 Task 1: Number Guessing Game
Create a simple game in which the user has to guess the secret number. Game has the following functionality: 
1.	Program asks the user to enter a number.
2.	Set secret number to be entered number plus one.
3.	Print out whether the user won or not.
Modified from Game.js (c) Kari Laitinen http://www.naturalprogramming.com
*/

// Here we print out a message
process.stdout.write(
  "\n This program is a computer game. Please, " + "\n type in a number : "
);

// Here we create an event handler to listen to on event of stdin
// inputFromUser carries the input given by the user
process.stdin.on("data", function (inputFromUser) {
  // The statements below will be executed automatically after
  // the user has typed in a number.

  // Here we create a number to store the user input
  let givenNumber = Number(inputFromUser);
  // Let's create a constant for our secret number and set the value
  const SECRET_NUMBER = givenNumber + 1;

  // Let's print out the message about losing/winning
  process.stdout.write(
    "\n You typed in " +
      givenNumber +
      "." +
      "\n My number is " +
      SECRET_NUMBER +
      "." +
      "\n Sorry, you lost. I won. The game is over.\n\n"
  );

  process.exit();
});
