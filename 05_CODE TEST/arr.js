const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];
const fruitsObjArr = fruits.map(function (item, index, origin) {
  return {
    id: index,
    name: item,
  };
  // console.log("item", item);
  // console.log("index", index);
  // console.log("origin", origin); // 원본 배열
}); //각각의 값들에게 함수 수행
//리턴값을 넣어야 배열로 들어감

const fruitsObjArr2 = fruits.map((item, index) => {
  return {
    id: index,
    name: item,
  };
}); //객체는 return 없애고 줄이기 불가능

console.log(fruitsObjArr);
console.log(fruits);

const nums = [3, 6, 9, 12, 15, 18, 21];
const divideArr = nums.map((item, index) => item / 3);
console.log(divideArr); //화살표 함수

const divideArr2 = nums.map(function (item, index) {
  return item / 3;
}); //기본

console.log(divideArr);
const nums2 = [1, 2, 3, 4, 5, 6];
const multiArr = nums2.map((item, index) => item * 4);
console.log(multiArr);

//배열은 비원시 라서 주소 저장
const str = "apple";
for (letter of str) {
  console.log(letter);
}
for (letter in str) {
  //인덱스값(키값) => 객체에서 많이 씀
  console.log(letter);
}

const obj = {
  nba: "lebron",
  soccer: "messi",
  bassball: "TMT",
};
for (item in obj) {
  //키값만
  console.log(item);
  console.log(obj[item]);
}

const numbers2 = [1, 2, 3, 4, 5, 6];
const filterArr = numbers2.filter(function (item, index, og) {
  return item > 3;
}); //특정 조건을 가지는 배열 추출
const filterArr2 = numbers2.filter((item) => item > 3); //특정 조건을 가지는 배열 추출
console.log(filterArr);
console.log(filterArr2);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const resultArr = words.filter(function (item) {
  return item.length > 6;
});
console.log(resultArr);

const nums3 = [1, 2, 3, 4, 5, 6];
console.log(nums3.includes(3));
console.log(nums3.includes(7));
console.log(words.includes("elite"));
console.log(words.includes("pororo"));
