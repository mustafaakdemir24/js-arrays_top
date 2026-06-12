const unique = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  ":-0",
];

console.log(unique(strings));
