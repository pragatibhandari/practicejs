/* Write function circumferenceOfCircle() that calculates the circumference when radius is given and returns it. */

function circumferenceOfCircle(num) {
  const radius = Number(num);
  const result = 2 * Math.PI * radius;
  return result;
}
console.log(circumferenceOfCircle(5));

/* Write function divide(divident, divider) that takes two numbers as input parameters, the divident and divider, performs the division and returns the result with two decimals. If inputs are invalid, return text "Invalid input".
 */
function divide(num1, num2) {
  const divident = Number(num1);
  const divider = Number(num2);
  const res = (divident / divider).toFixed(2);
  if (divident > 0 && divider > 0) {
    return res;
  } else {
    return "Invalid input";
  }
}
console.log(divide(8, 5));
console.log(divide(4, 3));
console.log(divide(4, 0));

/* Create a function findHighestGrade(grades) that takes an array as a parameter and returns the highest value in the array.
 */

function findHighestGrade(array) {
  const max = Math.max(...array);
  return max;
}
let array = [1, 6, 2, 90, 4];
console.log(findHighestGrade(array));

/* Write a function positiveToNegative(number) that takes a number as an input parameter and if it is positive, converts it to a negative and returns the value.
 */

function positiveToNegative(number) {
  const num = Number(-Math.abs(number));
  return num;
}
console.log(positiveToNegative(4));

/* Write function areaOfSquare(side) that takes a length of a side as an input parameter and returns the area of a square. NOTE! In this exercise, you are not allowed to use multiplication but a proper math method instead.
 */
function areaOfSquare(side) {
  const area = Math.pow(side, 2);
  return area;
}
console.log(areaOfSquare(5));

/* Write function areaOfACircle(radius) that takes the radius of a circle and calculates the circle area and returns it with two decimals. If input is invalid, return "Invalid input".
 */
function areaOfACircle(radius) {
  const area = Math.PI * Math.pow(radius, 2);

  if (radius > 0 || radius == Number) {
    return area.toFixed(2);
  } else {
    return "Invalid input";
  }
}
console.log(areaOfACircle(5));
