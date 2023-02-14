class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

//Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  // getArea() {
  //   return this.width * this.height;
  // } 부모로부터 받아오기때문에 안해도 됨
}

//Triangle
class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

//Circle
class Circle extends Shape {
  constructor(radius) {
    super(); //부모로부터 상속 받아야하기 때문에 반드시 넣어줘야함
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * 3.14;
  }
}

const rec = new Rectangle(10, 10);
const tri = new Triangle(10, 10);
const cir = new Rectangle(10);
rec.getArea();
