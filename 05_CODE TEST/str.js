//문자열
const str = "Hello, World! World";

//문자열 길이
console.log(str.length);

//특정 문자열 찾기
console.log(str.indexOf("World")); //제일 처음 만난 단어 인덱스

//문자열 자르기
console.log(str.slice(0, 5));
console.log(str.slice(0, str.indexOf("World")));

//문자열 바꾸기
console.log(str.replace("World", "뽀로로"));
console.log(str); // 원본 안바뀜 바꾼 값을 리턴만 해줌

//문자열 반복
const str2 = "우영";
const longStr = str2.repeat(10) + "우";
console.log(longStr);

//공백 제거
const str3 = "   Hello, world     ";
console.log(str3.trim());
