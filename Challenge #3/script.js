'use strict';

// Challenge #3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(this.speed + 10);
};

Car.prototype.breake = function () {
  // console.log(this.speed - 5);
  this.speed -= 5;
};

const Ev = function (make, speed, battey) {
  Car.call(this, make, speed);
  this.battey = battey;
};

Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function (chargeTo) {
  this.battey = chargeTo;
};

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.battey--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with the charge of ${this.battey}%`
  );
};

const tesla = new Ev('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.breake();
tesla.accelerate();
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
console.log(tesla);
