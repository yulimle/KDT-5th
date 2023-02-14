let helloTest = "H-e-l-l-o";
let helloTestArr = helloTest.split("-"); //배열로 리턴
console.log(helloTestArr);

let reverseHelloTestArr = helloTestArr.reverse();
console.log(reverseHelloTestArr);

let helloString = helloTestArr.join(""); //문자열로 리턴
console.log(helloString);

//메소드가 리턴값을 남길때! 메소드를 계속 연결해줄 수 있음
//메소드 체이닝
let finalStr = helloTest.split("-").reverse().join("");
console.log(finalStr);

const obj = {
  arr: ["a", "b", "c"],
  number: 10,
};
let testStr = obj.str?.reverse().join("");
//? => 앞이 undefined라고 하면 실행안해버림 => 백엔드에서 사용(error를 막을 수 있을 때 사용 추천은 안함)
console.log(testStr);
