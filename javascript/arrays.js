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
