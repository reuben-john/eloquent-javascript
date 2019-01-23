let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};

let killerRabbit = Object.create(protoRabbit);

killerRabbit.type = "killer";
killerRabbit.speak("Skreee!");

// class constructor

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");

console.log(weirdRabbit);
weirdRabbit.speak("yo");

// e6 class

class RabbitES6 {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let blackRabbit = new RabbitES6("black");

// class expression

let object = new class {
  getWord() {
    return "hello";
  }
}();

// console.log(object.getWord());

// Maps

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 29);
ages.set("Julia", 69);

// console.log(`Julia is ${ages.get("Julia")}`);
// console.log("Is Jack's age known?", ages.has("Jack"));
// console.log(ages.has("toString"));
