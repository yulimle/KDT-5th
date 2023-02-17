let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];
const sameArr = fruits1.filter((item) => fruits2.includes(item));
const diffArr = fruits1.filter(function (item) {
  return !fruits2.includes(item);
});
console.log(sameArr);
console.log(diffArr);

//시간 복잡도 줄이기
const sameArr2 = [];
const diffArr2 = [];
fruits1.map((item) => {
  if (fruits2.includes(item)) {
    sameArr2.push(item);
  } else {
    diffArr2.push(item);
  }
});
console.log(sameArr2);
console.log(diffArr2);

const fruits3 = ["Apple", "Banana", "Cherry"];
const findResult = fruits3.find((item) => {
  // return item === "Apple";
  return /^A/.test(item); //정규식 : A로 시작하는 것
});
const findIndexResult = fruits3.findIndex((item) => /^B/.test(item));
console.log(findResult);
console.log(findIndexResult);

const numbers3 = [1, 2, 3, 4, 5];
const sumResult = numbers3.reduce(function (acc, item, index, og) {
  return (acc += item);
}, 0); //최종값을 리턴 (배열x)
console.log(sumResult);

const numbers4 = [2, -5, -123, -5480, 24, 0, -69, 349, 3];
const resultReduce = numbers4.reduce(
  (acc, item) => {
    if (item < 0) {
      acc[0] += 1;
    } else {
      acc[1] += 1;
    }
  },
  [0, 0]
);
console.log(resultReduce);
