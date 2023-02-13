// const user = {
//   name: "이효석",
//   sayHello: function () {
//     // console.log(`안녕하세요 ${user.name} 님`);
//     console.log(`안녕하세요 ${this.name} 님`); //this -> 자신이 속한 객체 전체를 가리킴
//     // 해당 객체 내부의 모든 값에 적용할 수 있음
//   },
// };

// user.sayHello();

// function sayHello() {
//   console.log(`Hello, I'm ${this.name}`);
// }
// const boy = {
//   name: "Mike",
//   sayHello, //함수명만 가져옴(객체 값)
// };
// const girl = {
//   name: "Jane",
//   sayHello, //함수명만 가져옴(객체 값)
// };
// boy.sayHello();
// girl.sayHello();
// sayHello();
const pororo = {
  name: "pororo",
  height: 100,
  sayName() {
    console.log(`hello, I'm ${this.name}`);
  },
  showHeight,
};

function showHeight() {
  console.log(`height : ${this.height}`);
}
pororo.sayName();
pororo.showHeight();
