//생성자 함수
function Car(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = function () {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
  };
}

//생성자 함수 상속
function ElecCar(brand, color, fuel) {
  Car.call(this, brand, color);
  this.fuel = fuel;

  this.drive = function () {
    console.log(
      `${this.brand}의 ${this.color}색 자동차가 ${this.fuel}의 힘으로 움직입니다.`
    );
  };
}

ElecCar.prototype = Object.create(Car.prototype);
ElecCar.prototype.constructor = ElecCar;

const tesla = new ElecCar("tesla", "white", "electricity");
tesla.drive();
