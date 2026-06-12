const unique = (arr) => {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
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

// Assignment --> 2. Go back to the JavaScript exercises repository’s foundations/ directory
// The Odin Project
