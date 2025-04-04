// src/components/WeatherApp/Forecast/index.js
import { HourlyForecast } from './HourlyForecast';
import { DailyForecast } from './DailyForecast';
import { WeatherMetrics } from './WeatherMetrics';

export const Forecast = ({ weatherData, forecastData }) => {
  return (
    <div className="lg:col-span-2 flex flex-col gap-4">
      <HourlyForecast forecastData={forecastData} />
      <DailyForecast forecastData={forecastData} />
      <WeatherMetrics weatherData={weatherData} />
    </div>
  );
};