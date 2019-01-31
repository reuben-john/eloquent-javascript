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
