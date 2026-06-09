const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 99,
};

console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y));
