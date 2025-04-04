// src/components/WeatherApp/CurrentWeather/index.js
import { LocationSearch } from './LocationSearch';
import { CurrentWeatherMetrics } from './CurrentWeatherMetrics';

export const CurrentWeather = ({ city, weatherData, onCityChange }) => {
  return (
    <div className="lg:col-span-1 bg-gradient-to-b from-slate-800/50 to-slate-900/60 rounded-xl p-6 flex flex-col backdrop-blur-sm">
      <LocationSearch city={city} onCityChange={onCityChange} />
      <CurrentWeatherMetrics weatherData={weatherData} />
    </div>
  );
};