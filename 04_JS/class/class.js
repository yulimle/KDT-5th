//생성자 함수 버전
function ConstructorCar(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = () => {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다!`);
  };
}
const hyundai = new ConstructorCar("hyundai", "blue");

console.log(hyundai);
hyundai.drive();

//클래스 버전
class ClassCar {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다!`);
  }
}

const porsche = new ClassCar("porsche", "black");
console.log(porsche); // 메소드는 숨김
porsche.drive();

//상속의 편리함 때문에 사용
