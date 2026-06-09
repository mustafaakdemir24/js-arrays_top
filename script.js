console.log(
  [1, 2, 3, 4, 5].reduceRight(
    (accumulator, currentValue, index, array) => accumulator + currentValue,
  ),
);

// How reduceRight() works with an initial value -- MDN
