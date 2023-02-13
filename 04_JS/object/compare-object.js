//비원시 타입 : 메모리를 비우고 메모리 주소 값을 넣음
//객체는 주소값을 저장하기 때문에 const여도 메모리 주소 값이 변하지 않기 때문에 오류 안남

const tetz = {
  name: "이효석",
  email: "xenosign@naver.com",
};
const 이효석 = {
  name: "이효석",
  email: "xenosign@naver.com",
};
// console.log(tetz === 이효석);
const tetzCopy = tetz;
// tetzCopy.name = "Tetz";
console.log(tetz);
console.log(tetzCopy);
console.log(tetz === tetzCopy);

console.log(JSON.stringify(tetz) === JSON.stringify(이효석));
