// src/hooks/useWeather.js
import { useState, useEffect } from 'react';

const API_KEY = "1149d0079605aaeceec6d0c8bf927f5a";

export const useWeather = (initialCity = "Lagos") => {
  const [city, setCity] = useState(initialCity);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [weatherResponse, forecastResponse] = await Promise.all([
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`),
          fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
        ]);

        if (!weatherResponse.ok) throw new Error("Failed to fetch weather data");
        if (!forecastResponse.ok) throw new Error("Failed to fetch forecast data");

        const [weather, forecast] = await Promise.all([
          weatherResponse.json(),
          forecastResponse.json()
        ]);

        setWeatherData(weather);
        setForecastData(forecast);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return { city, setCity, weatherData, forecastData, loading, error };
};