const compose =
  (...args) =>
  (value) =>
    args.reduceRight((acc, fn) => fn(acc), value);

const inc = (n) => n + 1;

const double = (n) => n * 2;

console.log(compose(double, inc)(2));

console.log(compose(inc, double)(2));
