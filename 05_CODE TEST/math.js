//절대값
const num1 = -999;
console.log(Math.abs(num1));

//최대, 최소값 구하기
console.log(Math.min(1, 2, 3, 4, -5, 77));
console.log(Math.max(1, 2, 3, 4, -5, 77));

const numArr = [1, 2, 3, -5, 10, 13, -77, 1000];
// console.log(...numArr);
// console.log(numArr);
console.log(Math.min(...numArr)); //... => 구조를 해체해서 전달
console.log(Math.max(...numArr));

//소수점 관리
const num3 = 3.14;
console.log(Math.round(num3));
console.log(Math.floor(num3));
console.log(Math.ceil(num3));

//랜덤
console.log(Math.random());
