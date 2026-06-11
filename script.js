const copySorted = (arr) => {
  return arr.slice().sort();
  // alternatively: return [...arr].sort()
};

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);
