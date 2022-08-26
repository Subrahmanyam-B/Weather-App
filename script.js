const body = document.querySelector('.body');
const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.weather-tag');
const nameOutput = document.querySelector('.city-name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.getElementById('locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('submit');
const cities = document.querySelectorAll('.city');
const info = document.querySelector('.trans');
const API = "https://api.weatherbit.io/v2.0/current?&key=02c33e66311041a8af5cffefd049de5a&city=";
const fadeElems = document.querySelectorAll('.has-fade');


let cityInput = "London"; //default input


async function fetchWeatherData(cityInput) {

   const resp = await fetch(API + cityInput);
   const respData = await resp.json();
   console.log(respData);

   temp.innerHTML = parseInt(respData.data[0].temp) + '&#176;';
   nameOutput.innerHTML = respData.data[0].city_name;
   conditionOutput.innerHTML = respData.data[0].weather.description;
   cloudOutput.innerHTML = respData.data[0].clouds + '%';
   humidityOutput.innerHTML = respData.data[0].aqi + '%';
   windOutput.innerHTML = parseInt(respData.data[0].wind_spd) + ' km/hr';
   
   const dateInput = respData.data[0].ob_time;
   const y = parseInt(dateInput.substr(0,4));
   const m = parseInt(dateInput.substr(5,7));
   const d = parseInt(dateInput.substr(8,10));
   const h = parseInt(dateInput.substr(11,13));
   const min = parseInt(dateInput.substr(14,16));

   console.log(y);
   console.log(d);
   console.log(m);
   console.log(h);
   console.log(min);  
   console.log(dayOfTheWeek(y ,));  
   
   dateOutput.innerHTML = y;
}


cities.forEach((city) => {
   addEventListener('click' , (e) => {
      cityInput = e.target.innerHTML;  

      fetchWeatherData(cityInput);

      app.style.opactiy = "0";
   });
});

form.addEventListener('submit', (e) => {


   e.preventDefault();

   if (search.value.length == 0){
      alert('Please enter a city name');
   }
   else {
      cityInput = search.value;
      console.log(search.value);

      fetchWeatherData(cityInput);  

      search.value = "";

      app.style.opactiy = "0";

   }

});

function dayOfTheWeek(day , month , year) {
   const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
   ];

   return weekday[new Date(`${day}/${month}/${year}`).getDate()];
}



fetchWeatherData(cityInput);