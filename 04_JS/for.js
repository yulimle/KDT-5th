// 기본 반복문
// for(초기화식;조건식;증감식)
// for (let index = 0; index < 10; index += 1) {
//   console.log(`인사를 ${index + 1}번째 드립니다 😀`);
// }
// 이중 반복문
// for (let i = 0; i < 3; i += 1) {
//   console.log(`상위 for 문 입니다. ${i + 1} 번째 작동 중`);
//   for (let j = 0; j < 5; j += 1) {
//     console.log(`  하위 for문 입니다. i는 ${i}, j는${j}입니다.`);
//   }
// }

// 구구단 실습
// for (let i = 2; i < 10; i += 1) {
//   for (let j = 1; j < 10; j += 1) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

//실습2
let total = 0;
for (let i = 0; i <= 100; i += 1) {
  if (i % 2 === 0 || i % 5 == 0) {
    total += i;
  }
}
console.log(total);
