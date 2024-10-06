// const axios = require('axios');
import axios from 'axios';

const getWeather = async (city) => {
   const apiKey = process.env.WEATHER_API_KEY; // La clave API se manejará como un Secret en GitHub
   const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
   const response = await axios.get(url);
   return response.data;
};

getWeather('Buenos Aires')
   .then(data => console.log(data))
   .catch(err => console.error(err));