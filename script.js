const isOdd = (num) => num % 2 !== 0;
const arr = [1, 2, 3, 4, 5];
const oddNums = arr.filter(isOdd);
console.log(oddNums); // Output: [1, 3, 5]
console.log(arr); // Output: [1, 2, 3, 4, 5]
