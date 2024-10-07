import { getWeather } from './index.html';

test('should fetch weather data', async () => {
   const data = await getWeather('Buenos Aires');
   expect(data).toHaveProperty('weather');
});
