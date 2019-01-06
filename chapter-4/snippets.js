// shift unshift
let todoList = [];

function remember(task) {
  todoList.push(task);
}

function getTask() {
  return todoList.shift();
}

function rememberUrgently(task) {
  todoList.unshift(task);
}

remember("groceries");
remember("nothing");
rememberUrgently("this if first");
console.log(todoList);

let newList = todoList.slice(1);
console.log(newList);

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove([1, 2, 3, 4, 5], 2));

// pad characters
console.log(String(6).padStart(3, "x"));

// rest parameters
// use ...

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

console.log(max(4, 1, 92, 32));

// ... can aslo spread an array into individual numbers

let numbers = [3, 5, 7];
console.log(max(...numbers));

// can spread an array into a new array
console.log([1, 2, 3, ...numbers, 55, 23]);

// destructuring can be used to look inside an object or array
let { name } = { name: "Faraji", age: 23 };

console.log({ name });
