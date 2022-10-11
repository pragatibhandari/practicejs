// 1. Write code for a function discount(price, discountPercentage) that calculates discounted price based on price and discountPercentage.

function discount(price, discountPercentage) {
  var discountedAmount = (discountPercentage / 100) * price;
  var discountedPrice = price - discountedAmount;
  console.log(discountedPrice);
}
discount(123, 15); //104.55

// 2. Write a function add(n1, n2) that returns the sum of n1 and n2

function add(n1, n2) {
  var sum = n1 + n2;
  console.log(sum);
}
add(23, 11); //34

/* 3. Write code for a function shoppingList(numberOfGuests) for the following scenario: There is going to be a party. Based on the number of participants, calculate the amounts of food and drink to be bought. You will buy 3 sausages, 5 bottles of drink, 2 tomatoes and 1 egg for each guest. Define constants for the numbers of items for each guest. Print the shopping list as shown in the examples. */

const NUMBER_OF_SAUSAGES_PER_PERSON = 3;
const NO_OF_DRINKS = 5;
const NO_OF_TOMATOES = 2;
const NO_OF_EGGS = 1;

function shoppingList(numberOfGuests) {
  var totalSausage = numberOfGuests * NUMBER_OF_SAUSAGES_PER_PERSON;
  var totalDrinks = numberOfGuests * NO_OF_DRINKS;
  var totalTomatoes = numberOfGuests * NO_OF_TOMATOES;
  var totalEggs = numberOfGuests * NO_OF_EGGS;

  console.log("* " + totalSausage + " sausages");
  console.log("* " + totalDrinks + " drinks");
  console.log("* " + totalTomatoes + " tomatoes");
  console.log("* " + totalEggs + " eggs");
}

shoppingList(5);
/*
 * 15 sausages
 * 25 drinks
 * 10 tomatoes
 * 5 eggs
 */

/* 4. Create a variable called number.
Set its value to be 7.
Print out the value. */

function variable() {
  var number = 7;
  console.log(number);
}
variable(7); //7

//5. Write code for function area(width, height) that calculates the area of a rectangle and prints it out.
function area(width, height) {
  var areaOfRectangle = width * height;
  console.log(areaOfRectangle);
}
area(20, 15); //300
area(10, 10); //100
