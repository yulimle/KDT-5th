//함수 선언문
function sayHello() {
  console.log("Hello");
}

//함수 표현식
let sayHello = function () {
  console.log("Hello");
};

//화살표 함수 디스가 안생기는 함수
let sayHello = () => {
  console.log("Hello");
};

function sum(num1, num2) {
  return num1 + num2;
}

let sum = function (num1, num2) {
  return num1 + num2;
};

let sum = (num1, num2) => {
  return num1 + num2;
};
