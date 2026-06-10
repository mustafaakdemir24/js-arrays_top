const camelize = (str) => {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join("");
};

console.log(camelize("background-color")); // returns 'backgroundColor'
console.log(camelize("list-style-image")); // returns 'listStyleImage'
console.log(camelize("-webkit-transition")); // returns 'WebkitTransition'
