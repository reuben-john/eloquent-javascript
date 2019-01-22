require("./scripts.js");

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function greaterThan(n) {
  return m => m > n;
}

let greaterThan3 = greaterThan(3);
// greaterThan3(m) return m > 3

// console.log(greaterThan3);
// console.log(greaterThan3(2));

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}

// can call a function with args by putting them in parentheses after function call

// noisy(Math.min)(33, 2, 11);

function unless(test, then) {
  if (!test) then();
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

// forEach is higher order function similar to for/of

// [1, 2].forEach(n => console.log(n));

function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));
