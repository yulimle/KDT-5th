//생성자 함수는 대문자로
// function Kdt(name, gender) {
//   this.name = name;
//   this.gender = gender;
//   this.showName = function () {
//     console.log(`성함은 ${this.name} 입니다.`);
//   };
// }

// let user1 = new Kdt("이효석", "M");
// let user2 = new Kdt("김성현", "M");
// let user3 = new Kdt("윤제", "M");
// let user4 = new Kdt("송민선", "F");
// let user5 = new Kdt("송수빈", "F");

// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);

// user1.showName();
// user2.showName();
// user3.showName();
// user4.showName();
// user5.showName();

//실습
function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showAll = function () {
    console.log(`성함은 ${this.name}이고, 성별은 ${this.gender}입니다.`);
  };
}
let user1 = new Kdt("최두루", "M");
let user2 = new Kdt("최인영", "F");
let user3 = new Kdt("신상아", "F");
let user4 = new Kdt("이유림", "F");
let user5 = new Kdt("구슬기", "F");

user1.showAll();
user2.showAll();
user3.showAll();
user4.showAll();
user5.showAll();
