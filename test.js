import { getWeather } from './weather_data.js';

test('should fetch weather data', async () => {
   const data = await getWeather('Buenos Aires');
   expect(data).toHaveProperty('weather');
});
