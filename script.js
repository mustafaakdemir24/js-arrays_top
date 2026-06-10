const arr = [1, 2, 3, 4, 5];

const sumOfTripledEvens = arr
  .filter((num) => num % 2 === 0)
  .map((num) => num * 3)
  .reduce((acc, num) => acc + num, 0);

console.log(sumOfTripledEvens);
