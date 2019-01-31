const x = 1;
function evalAndReturnX(code) {
  eval(code);
  return x;
}

// console.log(evalAndReturnX("var x = 2"));
// console.log(x);

let plusOne = Function("n", "return n + 1;");
// console.log(plusOne(4));

const { formatDate } = require("./format-date");

// console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));
