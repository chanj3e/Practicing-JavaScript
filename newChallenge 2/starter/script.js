'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.altSpellings[0]}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
      <p class="country__row"><span>💰</span>${data.currencies}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
// https://countries-api-836d.onrender.com/name/portugal

// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
// request.send();
// console.log(request.responseText);
// request.addEventListener('load', function () {
//   // console.log(this.responseText);
//   const log = this.responseText;
//   const data = JSON.parse(log);
//   console.log(data);
// });

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);
//     const log = this.responseText;
//     const [data] = JSON.parse(log);
//     console.log(data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.altSpellings[1]}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('egy');
// getCountryData('portugal');

// const getCountryAndNeighbour = function (country) {
//   // AJAX Call
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // render Country
//     render(data);
//     console.log(data.languages);
//     console.log(data.currencies);

//     // get neighbour country
//     const neighbour = data.borders?.[0];
//     console.log(neighbour);

//     // AJAX Call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       render(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('egy');
// getCountryAndNeighbour('usa');
// getCountryAndNeighbour('portugal');

// Call back hell

// setTimeout(() => {
//   console.log('1 Second passed');
//   setTimeout(() => {
//     console.log('2 Seconds passed');
//     setTimeout(() => {
//       console.log('3 Seconds passed');
//       setTimeout(() => {
//         console.log('4 Seconds passed');
//         setTimeout(() => {
//           console.log('5 Seconds passed');
//           setTimeout(() => {
//             console.log('6 Seconds passed');
//             setTimeout(() => {
//               console.log('7 Seconds passed');
//               setTimeout(() => {
//                 console.log('8 Seconds passed');
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// AJAX call with a ES6

// console.log(
//   fetch(`https://restcountries.com/v3.1/name/portugal`).then(response =>
//     console.log(response)
//   )
// );

// const getCountryAndNeighbour = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if (!response.ok) throw new Error(`Country Not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) throw new Error('No Neighbour found');
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//       // Call back hell
//       // .then(response => response.json())
//       // .then(data => render(data[0], 'neighbour'));
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country Not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🔥🔥🔥`);
//       renderError(`Something went wrong ${err.message}.🔥🔥🔥 Try again! `);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// const getJSON = function (url, errMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errMsg} ${response.status}`);
//     return response.json();
//   });
// };

// const getCountryAndNeighbour = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country Not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) throw new Error('No Neighbour found');
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country Not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🔥🔥🔥`);
//       renderError(`Something went wrong ${err.message}.🔥🔥🔥 Try again! `);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };
// btn.addEventListener('click', function () {
//   getCountryAndNeighbour('usa');
//   // getCountryAndNeighbour('australia');
//   // getCountryAndNeighbour('4sa54dsa4d');
// });

/////////////////////////////////
//////////////////////////////////////
/////////////////////////////////
//////////////////////////////////////
/////////////////////////////////
// Challenge Big oone

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
//   )
//     .then(Response => {
//       if (!Response.ok)
//         throw new Error(`Problem with geocoding ${Response.status}`);
//       return Response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`);
//     })
//     .then(Response => {
//       if (!Response.ok) throw new Error(`Country not found ${Response.status}`);
//       return Response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(err.message));
// };

// btn.addEventListener('click', function () {
//   whereAmI(52.508, 13.381);
//   whereAmI(5543453453543543543453, 856378328741353133);
//   whereAmI(19.037, 72.873);
//   whereAmI(-33.933, 18.474);
// });

console.log('Test Start');
// call back queue
// if microtask took too long it will wait
setTimeout(() => console.log('0 sec passed'), 0);
// microtask queue always have priority
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('promise resolved 2 ').then(res => {
  for (let i = 0; i < 1999999999; i++) {}
  console.log(res);
});
console.log('End of test');
