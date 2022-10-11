/* Problem 1
 Write a function getStringLength() that takes a string as an input parameter and returns the length of given string.
*/

function getStringLength(string) {
  str = string.toString();
  console.log(str);
  console.log(str.length);
}
getStringLength("Hello");

/* Problem 2
Write function getLongerString(string1, string2) that takes two strings as input parameters and return the longer one. If they are equally long, return the first one. */

function getLongerString(string1, string2) {
  if (string1.length > string2.length) {
    return string1;
  } else if (string2.length > string1.length) {
    return string2;
  } else {
    return string1;
  }
}
console.log(getLongerString("Foo", "Foobar")); //Foobar
console.log(getLongerString("Hello", "")); //Hello
console.log(getLongerString("Hello", "James")); //Hello
