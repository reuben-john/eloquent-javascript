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

// console.log(filter(SCRIPTS, script => script.living));

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");

// console.log(map(rtlScripts, s => s.name));

// combine is the function to apply to each item
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

// Built in reduce allows you to skip start element if you have at least one element

// console.log([1, 2, 3, 4].reduce((a, b) => a + b));

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

// console.log(
//   SCRIPTS.reduce((a, b) => {
//     return characterCount(a) < characterCount(b) ? b : a;
//   })
// );

// reduce is comparing the results of characterCount(a) and characterCount(b)
// and returning the largest
// characterCount() reduces the range of codes used (script.ranges = array of numbers)
// and subtracts them to find the difference

// could have been written with for as shown below

let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null || characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}

// console.log(biggest);

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

// console.log(
//   Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year)))
// );
// console.log(
//   Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year)))
// );

// filter out living/dead from scripts, take the years and average them, then round result

// Can be written as a loop
let total = 0;
let count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count++;
  }
}
// console.log(Math.round(total / count));

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

// console.log(characterScript(121));

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
