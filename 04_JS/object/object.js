// const tetz = {
//   name: "이효석",
//   age: 39,
// };

// console.log(tetz.name);
// console.log(tetz["age"]);
// //대괄호로 접근할 때는 꼭 문자열 형태로 접근해야함

// tetz.gender = "M";
// console.log(tetz);

// tetz["head"] = "big";
// console.log(tetz);

// //삭제
// delete tetz.head;
// console.log(tetz);

const pororo = {
  name: "뽀로로",
  age: 7,
  height: 110,
  weight: 30,
  running: function () {
    console.log("뽀로로가 뜁니다");
  },
  fly() {
    //줄여쓰는 것을 허용한다
    console.log("날아갑니다.");
  },
  say() {
    console.log("뽀로로는 귀엽습니다.");
  },
};

// pororo.running();
// pororo.fly();
// pororo.say();

// console.log(pororo.name);
// console.log(pororo["age"]);
// pororo.gender = "M";
// console.log(pororo);
// pororo["height"] = 184;
// console.log(pororo);

// delete pororo.gender;
// console.log(pororo);

// console.log("name" in pororo);
// console.log("height" in pororo);
// console.log(pororo.hairColor);

// for (let key in pororo) {
//   console.log(key);
//   console.log("pororo.key", pororo.key);
//   console.log("pororo[key]", pororo[key]);
// }

// for (let key in pororo) {
//   console.log(`key는 ${key}, key 안의 값은 ${pororo[key]}`);
// }
