let sayHello = () => {
  console.log(`Hello, I'm ${this.name}`);
  console.log(this);
}; //화살표 함수는 this를 가지지 못함 -> 외부에서 this를 찾음
//메모리적으로 빠름 this가 필요없는 경우에 많이 쓰임

let sayHallo = function () {
  console.log(`Hello, I'm ${this.name}`);
  console.log(this);
};

const boy = {
  name: "Mike",
  sayHello,
};
const girl = {
  name: "Jane",
  sayHallo,
};

boy.sayHello();
girl.sayHallo();
