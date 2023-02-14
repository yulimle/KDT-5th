//클래스 선언
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  showSpec() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
  }
}
//클래스 상속
class EleCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color);
    this.fuel = fuel;
  }
  // showFuel() {
  //   console.log(`해당 자동차는 ${this.fuel}의 힘으로 움직입니다.`);
  // }
  showSpec() {
    super.showSpec();
    console.log(`그리고 이 차는 ${this.fuel}의 힘으로 움직입니다.`);
  }
}

const hyundai = new Car("hyundai", "blue");
hyundai.showSpec();
const tesla = new EleCar("tesla", "red", "electricity");
tesla.showSpec();
// tesla.showFuel();

console.log(hyundai instanceof Car);
console.log(tesla instanceof Car);//상속을 받아도 부모요소를 기억하고 있음!

