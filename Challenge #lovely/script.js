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

const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg} ${response.status}`);
    return response.json();
  });
};

const getCountryAndNeighbour = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country Not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No Neighbour found');
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country Not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 🔥🔥🔥`);
      renderError(`Something went wrong ${err.message}.🔥🔥🔥 Try again! `);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};
btn.addEventListener('click', function () {
  getCountryAndNeighbour('usa');
  // getCountryAndNeighbour('australia');
  // getCountryAndNeighbour('4sa54dsa4d');
});

/////////////////////////////////
//////////////////////////////////////
/////////////////////////////////
//////////////////////////////////////
/////////////////////////////////
// Challenge Big oone

const whereAmI = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
  )
    .then(Response => {
      if (!Response.ok)
        throw new Error(`Problem with geocoding ${Response.status}`);
      return Response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryName}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`);
    })
    .then(Response => {
      if (!Response.ok) throw new Error(`Country not found ${Response.status}`);
      return Response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(err.message));
};

whereAmI(5543453453543543543453, 856378328741353133);
btn.addEventListener('click', function () {
  whereAmI(19.037, 72.873);
});
