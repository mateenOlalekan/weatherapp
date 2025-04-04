// src/components/WeatherApp/CurrentWeather/CurrentWeatherMetrics.jsx
import { Droplets, Eye, Thermometer } from 'lucide-react';
import { formatTimezone } from '../../../utils/weatherUtils';

export const CurrentWeatherMetrics = ({ weatherData }) => {
  return (
    <>
      <div className="text-center my-8">
        <p className="font-semibold">🌍 {weatherData?.name || "Unknown City"}</p>
        <p className="font-semibold">{formatTimezone(weatherData?.timezone)}</p>
        <h1 className="text-7xl font-light">
          {weatherData?.main?.temp !== undefined ? `${Math.round(weatherData.main.temp)}°C` : "Loading..."}
        </h1>
        
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-1">
            <span>Lat: </span>
            <p>{weatherData?.coord?.lat ?? "N/A"}</p>
          </div>
          <div className="flex justify-between items-center gap-1">
            <span>Lon: </span>
            <p>{weatherData?.coord?.lon ?? "N/A"}</p>
          </div>
          <div className="flex justify-between items-center gap-1">
            <span>Tz Offset: </span>
            <p>{weatherData?.timezone ?? "N/A"}</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mt-auto">
        <WeatherMetric 
          icon={<Thermometer size={14} />}
          title="FEELS LIKE"
          value={`${Math.round(weatherData?.main?.feels_like)}°`}
          description="Humidity is making it feel warmer"
        />
        <WeatherMetric 
          icon={<Droplets size={14} />}
          title="PRECIPITATION"
          value={`${weatherData?.rain?.['1h'] || weatherData?.rain?.['3h'] || 0}mm`}
          description="in last 24h"
        />
        <WeatherMetric 
          icon={<Eye size={14} />}
          title="VISIBILITY"
          value={`${(weatherData?.visibility / 1000).toFixed(1)} km`}
        />
        <WeatherMetric 
          icon={<Droplets size={14} />}
          title="HUMIDITY"
          value={`${weatherData?.main?.humidity}%`}
          description="The dew point is 25° right now"
        />
      </div>
    </>
  );
};

const WeatherMetric = ({ icon, title, value, description }) => (
  <div className="bg-slate-800/40 rounded-lg p-3 backdrop-blur-xs">
    <div className="flex items-center text-gray-300/80 text-xs mb-2">
      {icon}
      <span className="ml-1">{title}</span>
    </div>
    <div className="text-xl font-semibold">{value}</div>
    {description && <div className="text-xs text-gray-300/80">{description}</div>}
  </div>
);