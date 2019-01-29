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
    Math.floor((n / base));
  } while (n > 0);
  return sign + result;
}
console.log(numberToString(13, 10));
