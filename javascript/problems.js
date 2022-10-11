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
