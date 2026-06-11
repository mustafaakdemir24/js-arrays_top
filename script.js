// Fisher - Yates (Lmitj) algorithm
const suffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

let arr = new Array(1, 2, 3);

console.log(suffleArray(arr));
console.log(suffleArray(arr));
console.log(suffleArray(arr));

// Assignment -- Filter unique array members --> The Odin Project
