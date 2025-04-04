// src/components/WeatherApp/Forecast/WeatherMetrics.jsx
import { Compass } from 'lucide-react';

export const WeatherMetrics = ({ weatherData }) => {
  const uvIndexLevel = weatherData?.uvi ? 
    (weatherData.uvi < 3 ? 'Low' : 
     weatherData.uvi < 6 ? 'Moderate' : 
     weatherData.uvi < 8 ? 'High' : 'Very High') : '';

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* UV Index */}
      <div className="bg-slate-800/40 rounded-xl p-4 backdrop-blur-sm">
        <div className="flex items-center mb-2">
          <div className="w-6 h-6 flex items-center justify-center bg-gray-700/40 rounded-full mr-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </div>
          <span className="text-sm">UV INDEX</span>
        </div>
        
        <div className="flex items-baseline mb-2">
          <span className="text-3xl font-semibold mr-2">
            {weatherData?.uvi ?? "N/A"}
          </span>
          <span className="text-gray-300/80">{uvIndexLevel}</span>
        </div>
        
        <div className="w-full h-2 bg-gray-700/40 rounded-full overflow-hidden mb-1">
          <div 
            className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500" 
            style={{ width: `${Math.min(100, (weatherData?.uvi || 0) * 10)}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-300/80">Use sun protection when needed</div>
      </div>
      
      {/* Wind */}
      <div className="bg-slate-800/40 rounded-xl p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center bg-gray-700/40 rounded-full mr-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
              </svg>
            </div>
            <span className="text-sm">WIND</span>
          </div>
          <div>
            <div className="w-16 h-16 border-4 border-gray-700/30 rounded-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Compass size={24} className="transform" style={{ 
                  transform: `rotate(${weatherData?.wind?.deg || 0}deg)` 
                }} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-baseline">
          <span className="text-3xl font-semibold mr-2">
            {weatherData?.wind?.speed ? Math.round(weatherData.wind.speed * 3.6) : "N/A"}
          </span>
          <span className="text-gray-300/80 mr-2">km/h</span>
          <span className="text-gray-300/80">Wind</span>
        </div>
        
        <div className="mt-2">
          <span className="text-lg font-semibold mr-1">
            {weatherData?.wind?.gust ? Math.round(weatherData.wind.gust * 3.6) : "N/A"}
          </span>
          <span className="text-gray-300/80 text-sm">km/h Gusts</span>
        </div>
      </div>
    </div>
  );
};