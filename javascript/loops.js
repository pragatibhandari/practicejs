/* Problem 1
 Create a function divisibility() that takes three input parameters: divider, min, and max and prints out all the numbers between min and max that are divisible by given divider. Print each number on a new line. */

function divisibility(divider, min, max) {
  var x = min;
  var y = max;
  let z = divider;

  for (x; x <= y; x++) {
    if (x % z == 0) {
      console.log(x);
    }
  }
}
divisibility(10, 10, 100);
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
// 100

/* Problem 2
Create a function countDigits() that counts the number of digits in a given number and returns the number of digits. */

function countDigits(givendigit) {
  let digit = givendigit;
  let count = String(digit).length;
  return count;
}
process.stdout.write("Number of digits: " + countDigits(10) + ".");

/* Problem 3
- Write code for a function that gets two parameters, start and end. The function then prints out numbers from start to end, each of them on their respective line.
 - In this task you can assume input to be of correct data type (numeric) and error handling is not necessary. */

function printNumbers(start, end) {
  let num1 = start;
  let num2 = end;

  for (num1; num1 <= num2; num1++) {
    console.log(num1);
  }
}
printNumbers(1, 10); //Prints 1 to 10

/* Problem 4
Write code for a function that gets three parameters: firstWeekDay (a number, 1 meaning Monday, 2 for Tuesday etc.), month and numberOfDaysand will then print out each date accompanied by the weekday name
In this task you can assume input to be of correct data type (numeric) and error handling is not necessary. */

function calendar(firstWeekDay, month, numberOfDays) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let k = 1;
  let start = 1;

  for (j = 0; j < 5; j++) {
    for (i = 0; i < days.length; i++) {
      if (k <= numberOfDays) {
        var pointer = (i + firstWeekDay) % days.length;
        console.log(days[pointer] + " " + k + "." + month + ".");
      }
      k++;
    }
  }
}
calendar(1, 2, 28);

/* Problem 5
Write code for a function that gets three parameters: firstWeekDay (a number, 1 meaning Monday, 2 for Tuesday etc.), month and numberOfDays and will then print out each date accompanied by the weekday name. Each week is on a new line. */

function calendar(firstWeekDay, month, numberOfDays) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let k = 1;
  let start = 1;

  for (j = 0; j < 5; j++) {
    for (i = 0; i < days.length; i++) {
      if (k <= numberOfDays) {
        var pointer = (i + firstWeekDay) % days.length;
        process.stdout.write(days[pointer] + " " + k + "." + month + ". ");
        if (pointer == 0) {
          console.log("");
        }
      }
      k++;
    }
  }
}
calendar(3, 2, 30);

// another way
// Write code for a function that gets three parameters: firstWeekDay (a number, 1 meaning Monday, 2 for Tuesday etc.), month and numberOfDays and will then print out each date accompanied by the weekday name. Each week is on a new line.

// In this task you can assume input to be of correct data type (numeric) and error handling is not necessary.
function calendar(firstWeekDay, month, numberOfDays) {
  // Let's create a new variable for current weekday
  let weekday = firstWeekDay;
  // Your code goes here
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
