'use strict';

// // Challenge #2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
  }
  breake() {
    this.speed -= 5;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new CarCl('Ford', 120);
ford.accelerate();
ford.breake();
console.log(ford.speedUS);
ford.speedUS = 120;
console.log(ford);

const bmw = new CarCl('BMW', 120);
console.log(bmw);
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.breake();
bmw.accelerate();
console.log(bmw);
const mercedes = new CarCl('Mercedes', 95);
console.log(mercedes);
mercedes.accelerate();
mercedes.breake();
mercedes.breake();
mercedes.breake();
mercedes.breake();
mercedes.breake();
mercedes.breake();
mercedes.breake();
mercedes.breake();
mercedes.breake();
mercedes.breake();
mercedes.breake();
mercedes.breake();
mercedes.breake();
console.log(mercedes);
