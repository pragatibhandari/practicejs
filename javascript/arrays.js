/* Problem 1
Write code for a function that gets an multidimensional array as an input parameter and prints out the item that is found on the third column of the second row.
*/

function getItem23(matrix) {
  console.log(matrix[1][2]);
}
let matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
];
getItem23(matrix); //f

/* Problem 2
Write code for a function that gets an average of item values in a given array and prints it out.
*/

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
Write code for a function that prints out the element from the array from the given index.
*/

let array = ["apple", "orange", "banana", "kiwi"];
function getItem(index) {
  console.log(array[index]);
}
getItem(3); //kiwi

/* Problem 4
Write code for a function that prints out items of an array from the last to the first, each followed by a space.
*/

function printReversedArray(array) {
  var reversed = array.reverse().toString();
  // var replaced = reversed.replaceAll(",", " "); // ES12+
  var replaced = reversed.replace(/,/g, " "); // in older browsers
  console.log(replaced);
}
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printReversedArray(array); // 10 9 8 7 6 5 4 3 2 1

/* Problem 5
Write code for a function that prints out the fifth item in an array given as a parameter.
*/

function getFifthItem(array) {
  console.log(array[4]);
}
let fruit = ["banana", "kiwi", "watermelon", "apple", "grapefruit"];
getFifthItem(fruit); //grapefruit

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
