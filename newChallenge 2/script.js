'use strict';

const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const checkDogs = function (dogJulia, dogKate) {
  const dogJuliaReal = dogJulia.slice();
  dogJuliaReal.splice(0, 1);
  dogJuliaReal.splice(-2);
  const allDogs = [...dogJuliaReal, ...dogKate];
  allDogs.forEach(function (year, num) {
    const adult = `an adult, and is ${year} years old`;
    const puppy = 'still a puppy 🐶';
    const isAdult = year >= 3 ? adult : puppy;
    console.log(`Dog number ${num + 1} is ${isAdult} `);
  });
};
checkDogs(julia, kate);
