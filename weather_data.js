// const axios = require('axios');
/* import axios from 'axios';

const getWeather = async (city) => {
   const apiKey = process.env.WEATHER_API_KEY; // La clave API se manejará como un Secret en GitHub
   const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
   const response = await axios.get(url);
   return response.data;
};

getWeather('Buenos Aires')
   .then(data => console.log(data))
   .catch(err => console.error(err)); */

   

// const axios = require('axios');
import axios from 'axios';

const getWeather = async (city) => {
   try {
         const apiKey = process.env.WEATHER_API_KEY;  // La clave de la API debe estar en los Secrets o en las variables de entorno
         const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
         const response = await axios.get(url);
         return response.data;  // Aquí muestra los datos del clima
   } catch (error) {
         console.error('Error fetching weather data:', error);
   }
};

document.querySelector("#data_weather").innerHTML = getWeather('Buenos Aires');