// Asynchronous programming

// callbacks are a form of asynchronous programming

// setTimeout(() => console.log("Tick"), 500);

// This can lead to many levels of indentation and become unwieldly

// es6 modules don't actually work
// import { bigOak } from "./crow-tech.js";
var bigOak = require("./crow-tech").bigOak;

bigOak.readStorage("food caches", caches => {
  let firstCache = caches[0];
  bigOak.readStorage(firstCache, info => {
    console.log(info);
  });
});

bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", () =>
  console.log("Note delivered")
);

// import { defineRequestType } from "./crow-tech";
var defineRequestType = require("./crow-tech").defineRequestType;

defineRequestType("note", (nest, content, source, done) => {
  console.log(`${nest.name} received note: ${content}`);
  done();
});

// Promises
// asynchronous action that may complete at some point and produce a value

// wraps item in promise
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

// creating promises
// by passing in resolve, only the code that created the promise can resolve it

function storage(nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => resolve(result));
  });
}
storage(bigOak, "enemies").then(value => console.log("Got", value));

new Promise((_, reject) => reject(new Error("Fail")))
  .then(value => {
    console.log("Handler 1");
  })
  .catch(reason => {
    console.log("Caught failure " + reason);
    return "nothing";
  })
  .then(value => console.log("Handler 2", value));
