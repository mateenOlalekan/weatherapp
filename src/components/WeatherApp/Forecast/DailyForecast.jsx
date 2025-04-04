// src/components/WeatherApp/Forecast/DailyForecast.jsx
import { formatDate } from '../../../utils/dateFormatter';
import { getWeatherIcon } from '../../../utils/weatherUtils';

export const DailyForecast = ({ forecastData }) => {
  return (
    <div className="bg-slate-800/40 rounded-xl p-4 backdrop-blur-sm">
      <div className="flex items-center mb-3">
        <div className="w-6 h-6 flex items-center justify-center bg-gray-700/40 rounded-full mr-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <span className="text-sm">7-DAY FORECAST</span>
      </div>
      
      <div className='grid grid-cols-7 gap-2 mt-2'>
        {forecastData?.list?.filter((item, index) => index % 5 === 0).slice(0, 7).map((day, idx) => (
          <div key={idx} className="bg-slate-700/40 rounded-lg p-3 text-center backdrop-blur-xs">
            <div className="text-sm">{formatDate(day.dt)}</div>
            <div className="w-8 h-8 mx-auto">{getWeatherIcon(day.weather[0].main)}</div>
            <div className="text-lg font-semibold my-1">{Math.round(day.main.temp)}°</div>
          </div>
        ))}
      </div>
    </div>
  );
};