// src/utils/weatherUtils.js
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Wind, Thermometer } from 'lucide-react';

export const getWeatherIcon = (condition) => {
  switch (condition) {
    case "Clear": return <Sun size={32} className="text-yellow-500" />;
    case "Clouds": return <Cloud size={32} className="text-gray-500" />;
    case "Rain": return <CloudRain size={32} className="text-blue-600" />;
    case "Snow": return <CloudSnow size={32} className="text-cyan-400" />;
    case "Thunderstorm": return <CloudLightning size={32} className="text-purple-700" />;
    case "Windy": return <Wind size={32} className="text-green-500" />;
    default: return <Thermometer size={32} className="text-red-500" />;
  }
};

export const formatTimezone = (timezone) => {
  return timezone === undefined ? "N/A" : `UTC${timezone >= 0 ? '+' : ''}${timezone/3600}`;
};