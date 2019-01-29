// produce same regex
let re1 = new RegExp("abc");
let re2 = /abc/;

function getDate(string) {
  // _ is full string matched
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}
// console.log(getDate("1-30-2003"));
console.log(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(
    /(\w+), (\w+)/g,
    "$2 $1"
  )
);

// Can also pass in function to replace
let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));

// another one

let stock = "1 lemon, 2 cabbages, and 10 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) {
    // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

// Use a non greedy operator when possible.
// a ? after makes it non greedy
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1 + 1

// let name = "harry";
// let text = "Harry is a suspicious character.";
// let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
// console.log(text.replace(regexp, "_$1_"));
// → _Harry_ is a suspicious character.

let name = "dea+hl[]rd";
let text = "This dea+hl[]rd guy is super annoying.";
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(text.replace(regexp, "_$&_"));
// → This _dea+hl[]rd_ guy is super annoying.
