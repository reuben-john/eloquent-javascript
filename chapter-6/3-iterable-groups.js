// Iterable groups

// Make the Group class from the previous exercise iterable. Refer to
// the section about the iterator interface earlier in the chapter if
// you aren’t clear on the exact form of the interface anymore.

// If you used an array to represent the group’s members, don’t just
// return the iterator created by calling the Symbol.iterator method
// on the array. That would work, but it defeats the purpose of this
// exercise.

// It is okay if your iterator behaves strangely when the group is
// modified during iteration.

// for (let value of Group.from(["a", "b", "c"])) {
//   console.log(value);
// }

class Group {
  constructor() {
    this.group = [];
  }

  add(value) {
    if (!this.group.includes(value)) {
      this.group.push(value);
    }
  }
  delete(value) {
    let index = this.group.indexOf(value);
    if (index > -1) {
      this.group.slice(index, 1);
    }
  }
  has(value) {
    return this.group.includes(value);
  }

  static from(iterable) {
    let group = new Group();
    for (let item of iterable) {
      group.add(item);
    }
    return group;
  }
}

class GroupIterator {
  constructor() {
    this.index = 0;
  }

  next() {
    return value;
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
