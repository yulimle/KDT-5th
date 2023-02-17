const arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}
const arrSum = arr.reduce((acc, item) => {
  return acc + item;
}, 0);
console.log(arrSum);
