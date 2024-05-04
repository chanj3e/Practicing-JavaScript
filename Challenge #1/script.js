'use strict';

// Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(this.speed + 10);
};

Car.prototype.breake = function () {
  console.log(this.speed - 5);
};

const bmw = new Car('BMW', 120);
console.log(bmw);
bmw.accelerate();
bmw.breake();
const mercedes = new Car('Mercedes', 95);
console.log(mercedes);
mercedes.accelerate();
mercedes.breake();
