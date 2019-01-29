// produce same regex
let re1 = new RegExp("abc");
let re2 = /abc/;

function getDate(string) {
  // _ is full string matched
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}
// console.log(getDate("1-30-2003"));
console.log(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(
    /(\w+), (\w+)/g,
    "$2 $1"
  )
);
// → Barbara Liskov
//   John McCarthy
//   Philip Wadler
