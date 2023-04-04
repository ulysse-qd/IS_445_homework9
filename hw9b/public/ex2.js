const button = document.querySelector('#myButton');

const countriesList = {
  name: "Ulysse Q.D",
  countries: [
    {
      name: "France",
      year: 1998
    },
    {
      name: "Spain",
      year: 2006
    },
    {
      name: "Senegal",
      year: 2021
    },
    {
      name: "Netherlands",
      year: 2006
    },
    {
      name: "Greece",
      year: 2014
    },
    {
      name: "Martinique",
      year: 2009
    },
    {
      name: "Saint-Barthélemy",
      year: 2009
    },
    {
      name: "Germany",
      year: 2017
    },
    {
      name: "Martinique",
      year: 2009
    },
    {
      name: "Australia",
      year: 2018
    },
  ]
};

button.addEventListener('click', (event) => {
  event.preventDefault();

  fetch('/api/countries', {
    method: 'POST',
    body: JSON.stringify(countriesList),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => res.text())
    .then(res => document.querySelector('#result').innerHTML = res)
    .catch(err => console.log(err));
});