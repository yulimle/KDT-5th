// for (let i = 0; i < 20; i++) {
//   if (i % 2 == 1) continue;
//   console.log(`${i}번 입니다.`);
//   if(i===16) break;
// }

let total = 0;
for (let i = 0; i <= 1000; i++) {
  if (i % 2 === 1) continue;
  total += i;
}
console.log(total);
