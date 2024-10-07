// const axios = require('axios');
import axios from 'axios';

const getWeather = async (city) => {
   try {
         const apiKey = process.env.WEATHER_API_KEY;  // La clave de la API debe estar en los Secrets o en las variables de entorno
         const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
         const response = await axios.get(url);
         console.log(response.data);  // Aquí muestra los datos del clima
   } catch (error) {
         console.error('Error fetching weather data:', error);
   }
};

getWeather('Buenos Aires');