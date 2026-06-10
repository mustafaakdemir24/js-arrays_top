console.log(
  [0, 1, 2, 3, 4].reduceRight(
    (accumulator, currentValue, index, array) => accumulator + currentValue,
    0,
  ),
);
