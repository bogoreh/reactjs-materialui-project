const API_KEY = '570dff81397ea2ea0267632b131129c4'; // Get from OpenWeatherMap
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherAPI = {
  getCurrentWeather: async (city) => {
    try {
      const response = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error('City not found');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  getForecast: async (city) => {
    try {
      const response = await fetch(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error('Forecast not available');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
};