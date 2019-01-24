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

// Symbols are unique and cannot be created more than once

// let sym = Symbol("name");
// console.log(sym == Symbol("name"));
// Rabbit.prototype[sym] = 55;
// console.log(blackRabbit[sym]);

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};

// console.log([1, 2].toString());
// console.log([1, 2][toStringSymbol]());

// Can refer to symbols using []

let stringObject = {
  [toStringSymbol]() {
    return "a jute rope";
  }
};

// console.log(stringObject[toStringSymbol]());

// Symbol iterator can be used to go through iterable properies

let okIterator = "OK"[Symbol.iterator]();
// console.log(okIterator.next());
// console.log(okIterator.next());
// console.log(okIterator.next());

class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }
  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return { done: true };

    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y)
    };
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false };
  }
}

Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
// for (let { x, y, value } of matrix) {
//   console.log(x, y, value);
// }

// getts and setters

let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};

// console.log(varyingSize.size);

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
// console.log(temp.fahrenheit);
temp.fahrenheit = 86;
// console.log(temp.celsius);

// static inside class are stored on the constructor
// and are called on the class, not the new instance of the class

// inheritance is creating a new class that inherits properties and behavior

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix1 = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix1.get(2, 3));

// check if class derives from another class
// console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
// console.log(new SymmetricMatrix(2) instanceof Matrix);
// console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
// console.log([1] instanceof Array);
