const sumOfTripledEvens = (array) => {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr, 0);
};

// Test-driven development -- The Odin Project
