// src/components/WeatherApp/Forecast/HourlyForecast.jsx
import { getWeatherIcon } from '../../../utils/weatherUtils';

export const HourlyForecast = ({ forecastData }) => {
  return (
    <div className="bg-slate-800/40 rounded-xl p-4 backdrop-blur-sm">
      <div className="flex items-center mb-3">
        <div className="w-6 h-6 flex items-center justify-center bg-gray-700/40 rounded-full mr-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <span className="text-sm">HOURLY FORECAST</span>
      </div>

      <div className="grid grid-cols-7 gap-2 mt-2">
        {forecastData?.list?.slice(0, 7).map((hour, idx) => (
          <div key={idx} className="bg-slate-700/40 rounded-lg p-3 text-center backdrop-blur-xs">
            <div className="text-sm">{new Date(hour.dt * 1000).getHours()}:00</div>
            <div>{getWeatherIcon(hour.weather[0].main)}</div>
            <div className="text-lg font-semibold my-1">{Math.round(hour.main.temp)}°</div>                   
          </div>
        ))}
      </div>
    </div>
  );
};