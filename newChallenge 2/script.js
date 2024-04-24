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

// next Challenge to calculate dogs ages to humanAge
const calcAverageHumanAge = function (ages) {
  const humanAge = ages
    .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
    .filter(year => year > 18)
    .reduce((acc, year, i, arr) => acc + year / arr.length, 0);
  return humanAge;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
