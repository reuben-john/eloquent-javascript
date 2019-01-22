// Deep comparison

/*
The == operator compares objects by identity. But sometimes you’d prefer 
to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if 
they are the same value or are objects with the same properties, where the 
values of the properties are equal when compared with a recursive call to 
deepEqual.

To find out whether values should be compared directly (use the === operator 
  for that) or have their properties compared, you can use the typeof operator. 
  If it produces "object" for both values, you should do a deep comparison. 
  But you have to take one silly exception into account: because of a 
  historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties 
of objects to compare them.

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
→ true
console.log(deepEqual(obj, {here: 1, object: 2}));
→ false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
→ true
*/

function deepEqual(a, b) {
  // start simplest a === b without conversion

  if (a === b) {
    return true;
  }

  // Make sure items are not null and/or objects

  if (a == null || b == null || typeof a != "object" || typeof b != "object") {
    return false;
  }

  let keysOfA = Object.keys(a);
  let keysOfB = Object.keys(b);

  // It not equal, object cannot be the same
  if (keysOfA.length != keysOfB.length) {
    return false;
  }

  // loop through each key and compare
  // check if keys match and values match
  for (let key of keysOfA) {
    if (!keysOfB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

console.log(deepEqual(1, 2));
console.log(deepEqual(1, 1));

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
