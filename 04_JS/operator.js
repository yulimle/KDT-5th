//나머지연산자
let num = Math.floor(Math.random() * 10);
console.log(num);
console.log(num % 2);

console.log(2 ** 4); //거듭제곱
console.log(Math.sqrt(4)); //루트

//연산자 줄여쓰기
let num2 = 5;
let num3 = 5;
num3 += 5;
num2 = num2 + 5;
console.log("연산자 줄여쓰기", num2, num3);

//증가 감소 연산자
let num4 = 10;
console.log("증가 감소 연산자", num4++);
console.log(num4);
console.log("증가 감소 연산자", ++num4);

//비교 연산자 '==='형까지 일치 '!=='불일치
let a = 10;
let b = 5;
console.log("비교 연산자", a !== b);
