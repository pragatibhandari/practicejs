/* Problem 1
Write code for a function that gets an multidimensional array as an input parameter and prints out the item that is found on the third column of the second row. */

function getItem23(matrix) {
  console.log(matrix[1][2]);
}
let matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
];
getItem23(matrix); //f

/* Problem 2
Write code for a function that gets an average of item values in a given array and prints it out. */

function average(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  var avg = sum / array.length;
  console.log(avg);
}
let numbers = [1, 5, 1, 5, 10, 12, 44]; // 11.142857142857142
average(numbers);

/* Problem 3
You have an array with the following items: 'apple', 'orange', 'banana', 'kiwi'.
Write code for a function that prints out the element from the array from the given index. */

let array = ["apple", "orange", "banana", "kiwi"];
function getItem(index) {
  console.log(array[index]);
}
getItem(3); //kiwi

/* Problem 4
Write code for a function that prints out items of an array from the last to the first, each followed by a space. */

function printReversedArray(array) {
  var reversed = array.reverse().toString();
  // var replaced = reversed.replaceAll(",", " "); // ES12+
  var replaced = reversed.replace(/,/g, " "); // in older browsers
  console.log(replaced);
}
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printReversedArray(array); // 10 9 8 7 6 5 4 3 2 1
