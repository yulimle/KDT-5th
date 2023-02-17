const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const resultObj = Object.assign(obj1, obj2);
console.log(resultObj);
resultObj.a = 10;
console.log(obj1);

const tetzObj = {
  name: "이효석",
  age: "39",
  brain: null,
};
// const name = tetzObj.name;
const { name: tetzName, age, brain, girlFriend = "없으" } = tetzObj; // 구조 분해 할당
console.log(tetzName, age, brain, girlFriend);
