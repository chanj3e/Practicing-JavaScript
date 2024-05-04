'use strict';
// // // // Challenge #4

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed + 10;
    console.log(`${this.make} is going to ${this.speed} km/h`);
  }
  breake() {
    // console.log(this.speed - 5);
    this.speed -= 5;
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EvCl extends CarCl {
  #battery;
  constructor(make, speed, battery) {
    super(make, speed);
    this.#battery = battery;
  }

  chargeBattery(chargeTo) {
    this.#battery = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#battery--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with the charge of ${
        this.#battery
      }%`
    );
    return this;
  }
}

const rivian = new EvCl('Rivian', 120, 23);
console.log(rivian);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .breake()
  .chargeBattery(50)
  .accelerate();
console.log(rivian);
rivian.accelerate();
