function helloFunc() {
  console.log("hello");
}

function returnFunc() {
  console.log("Return");
  return "return";
}

let str = helloFunc(); //남긴것이 없음 undefined가 뜬다
console.log(str);

//익명함수
let noNameFunc = function () {
  console.log("No Name");
  return "no name";
};
noNameFunc();
let str2 = noNameFunc();
console.log(str2);

function sayHello(name = "friend") {
  console.log(`Hello~ ${name}`);
}
sayHello();
sayHello("mike");

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(10, 20));

function square(num) {
  return num ** 2;
}
console.log(square(37));

//실습
function triangle(len, height) {
  return (len * height) / 2;
}
let triangleArea = (num1, num2) => {
  return (num1 * num2) / 2;
};

let circleArea = function (radius) {
  return 3.14 * radius * radius;
};

let circleArea2 = (radius) => {
  return 3.14 * radius * radius;
};

function circle(r = 3) {
  return r ** 2 * 3.14;
}

function pythagoras(len, height) {
  return Math.sqrt(len ** 2 + height ** 2);
}

console.log(triangle(2, 4));
console.log(circle());
console.log(pythagoras(3, 4));
