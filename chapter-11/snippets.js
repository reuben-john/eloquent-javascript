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

class Timeout extends Error {}

function request(nest, target, type, content) {
  return new Promise((resolve, reject) => {
    let done = false;
    function attempt(n) {
      nest.send(target, type, content, (failed, value) => {
        done = true;
        if (failed) reject(failed);
        else resolve(value);
      });
      setTimeout(() => {
        if (done) return;
        else if (n < 3) attempt(n + 1);
        else reject(new Timeout("Timed out"));
      }, 250);
    }
    attempt(1);
  });
}

function requestType(name, handler) {
  defineRequestType(name, (nest, content, source, callback) => {
    try {
      Promise.resolve(handler(nest, content, source)).then(
        response => callback(null, response),
        failure => callback(failure)
      );
    } catch (exception) {
      callback(exception);
    }
  });
}

requestType("ping", () => "pong");

// promise.all waits for all other promises to resolve

function availableNeighbors(nest) {
  let requests = nest.neighbors.map(neighbor => {
    return request(nest, neighbor, "ping").then(() => true, () => false);
  });
  return Promise.all(requests).then(result => {
    return nest.neighbors.filter((_, i) => result[i]);
  });
}

// import { everywhere } from "./crow-tech";
let everywhere = require("./crow-tech.js").everywhere;

everywhere(nest => {
  nest.state.gossip = [];
});

function sendGossip(nest, message, exceptFor = null) {
  nest.state.gossip.push(message);
  for (let neighbor of nest.neighbors) {
    if (neighbor == exceptFor) continue;
    request(nest, neighbor, "gossip", message);
  }
}
requestType("gossip", (nest, message, source) => {
  if (nest.state.gossip.includes(message)) return;
  console.log(`${nest.name} received gossip '${message}' from ${source}`);
  sendGossip(nest, message, source);
});

// sendGossip(bigOak, "Kids with airgun in the park");

requestType("connections", (nest, { name, neighbors }, source) => {
  let connections = nest.state.connections;
  if (JSON.stringify(connections.get(name)) == JSON.stringify(neighbors))
    return;
  connections.set(name, neighbors);
  broadcastConnections(nest, name, source);
});

function broadcastConnections(nest, name, exceptFor = null) {
  for (let neighbor of nest.neighbors) {
    if (neighbor == exceptFor) continue;
    request(nest, neighbor, "connections", {
      name,
      neighbors: nest.state.connections.get(name)
    });
  }
}

everywhere(nest => {
  nest.state.connections = new Map();
  nest.state.connections.set(nest.name, nest.neighbors);
  broadcastConnections(nest, nest.name);
});

function findRoute(from, to, connections) {
  let work = [{ at: from, via: null }];
  for (let i = 0; i < work.length; i++) {
    let { at, via } = work[i];
    for (let next of connections.get(at) || []) if (next == to) return via;
    if (next == to) return via;
    if (!work.some(w => w.at == next)) {
      work.push({ at: next, via: via || next });
    }
  }
  return null;
}
