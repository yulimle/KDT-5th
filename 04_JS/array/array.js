//배열 기본
const kdt = ["최두루", "최인영", "신상아", "구슬기"];
kdt.push("백진솔");
//배열 맨 뒤에 추가, 배열의 길이값을 리턴함 -> 매번 다르기 때문에 꼼꼼히 확인 필요
console.log(kdt);

kdt.pop(); //어떤 값을 빼냈는지 리턴
console.log(kdt);
console.log(kdt[2]);
console.log(kdt.length);

//맨 앞의 값 추가 제거
kdt.unshift("이효석"); //길이값 리턴
console.log(kdt);
kdt.shift(); //어떤 값을 빼냈는지 리턴
console.log(kdt);

for (let i = 0; i < kdt.length; i++) {
  console.log(kdt[i]);
}

kdt.push("이유림");
kdt.pop();
kdt.unshift("이유림");
for (let i = 0; i < kdt.length; i++) {
  console.log(kdt);
}
