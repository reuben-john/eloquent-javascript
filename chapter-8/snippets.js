"use strict";

function Person(name) {
  this.name = name;
}
// let ferdinand = Person("Ferdinand"); // writes to global this without new used
// console.log(name) // Ferdinand
let ferdinand = new Person("Ferdinand"); // no error
// console.log(ferdinand);

function numberToString(n, base = 10) {
  let result = "",
    sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n = Math.floor(n / base);
  } while (n > 0);
  return sign + result;
}
// console.log(numberToString(13, 10));

function promptNumber(question) {
  let result = Number(prompt(question));
  if (Number.isNaN(result)) return null;
  else return result;
}

// console.log(promptNumber("How many trees do you see?"));

function lastElement(array) {
  if (array.length == 0) {
    return { failed: true };
  } else {
    return { element: array[array.length - 1] };
  }
}

// exception handling

function promptDirections(question) {
  let result = promp(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirections("Which way?" == "L")) {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}
