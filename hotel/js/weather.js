// select HTML elements in the document
const currentTemp = document.querySelector("#tempF");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const windSpeed = document.querySelector("#speed");
const humidity = document.querySelector("#humidity");

const url = `https://api.openweathermap.org/data/2.5/weather?q=Aba,Ng&units=metric&appid=2fcbd37c33ec6efc3dd5e05b4eef77e6`;

apiFetch(url);

async function apiFetch(apiURL) {
  const response = await fetch(apiURL);
  if (response.ok) {
    const data = await response.json();
   
    displayResults(data);
  } else {
    throw Error(await response.text());
  }
}

function displayResults(weatherData) {
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.innerHTML = desc;

  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
  windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(1)}</strong>`;
  humidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(1)}</strong>`;
 
}

