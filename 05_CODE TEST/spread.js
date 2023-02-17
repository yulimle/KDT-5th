const fruits = ["사과", "바나나", "수박", "망고"];
console.log(fruits);
console.log(...fruits);

function conLog(a, b, c) {
  console.log(a, b, c);
}
conLog(...fruits);

function conLog(a, b, ...c) {
  console.log(a, b, c);
}

function conLog(...rest) {
  rest.map((item) => console.log(item));
}

const str = "apple";
const strToArr = [...str];
console.log(strToArr);
const strToArr2 = str.split("");
console.log(strToArr2);
