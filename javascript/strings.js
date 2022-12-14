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

/* problem 3
 Write function getLastFiveLetters() that takes one input parameter and returns last five letters of that string. */

function getLastFiveLetters(word) {
  return word.slice(-5);
}
console.log(getLastFiveLetters("Foobar")); //oobar

/* Problem 4
Write function censorA() that replaces all occurrences of the letter a with an asterisk and then returns the censored string.
*/
function censorA(str) {
  const word = str.toString();

  for (let i = 0; i < word.length; i++) {
    var result = word.toString().replace(/a/g, "*");
    var res = result.replace(/A/g, "*");
    return res;
  }
}
console.log(censorA("Meija"));
console.log(censorA("AaAaAa"));
console.log(censorA("JavaScript is fun"));

/* Problem 5
Write function stringToArray(text, divider) that converts a given string into an array. String is split based on the given divider. */

function stringToArray(text, divider) {
  result = text.split(divider);
  return result;
}

console.log(stringToArray("banana, apple, grapefruit", ",")); //[ 'banana', ' apple', ' grapefruit' ]
console.log(stringToArray("James|Jim|George", ",")); //[ 'James|Jim|George' ]
console.log(stringToArray("James|Jim|George", "|")); //[ 'James', 'Jim', 'George' ]

/* Problem 6
 Write function getImportantInformation() that takes a string, finds word **IMPORTANT in it, takes the substring starting with **IMPORTANT till it reaches **.
 */
function getImportantInformation(str) {
  const found = str.lastIndexOf("**IMPORTANT");
  const start = found + 12;
  const foundindex = str.lastIndexOf("*");
  const res = str.slice(start, foundindex);

  return res;
}
console.log(
  getImportantInformation(
    "Lorem ipsum **IMPORTANT Mind the gap* dolor sit amet"
  )
);
console.log(
  getImportantInformation(
    "Lorem ipsum **IMPORTANT This is the important message* dolor sit amet"
  )
);
