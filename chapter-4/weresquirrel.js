require("./journal.js");

let journal = [];

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth"
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

function phi([n00, n01, n10, n11]) {
  return (
    (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10))
  );
}

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

// console.log(phi([76, 9, 4, 1]));
// console.log(tableFor("peanuts", JOURNAL));
// console.log(journalEvents(JOURNAL));

// for (let event of journalEvents(JOURNAL)) {
//   let correlation = phi(tableFor(event, JOURNAL));
//   if (correlation > 0.1 || correlation < -0.1) {
//     console.log(event + ":", correlation);
//   }
// }

for (let entry of JOURNAL) {
  if (
    entry.events.includes("peanuts") &&
    !entry.events.includes("brushed teeth")
  ) {
    entry.events.push("peanut teeth");
  }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
