// src/utils/constants.js

export const API_KEY = "1149d0079605aaeceec6d0c8bf927f5a";
export const DEFAULT_CITY = "Lagos";

export const WEATHER_CONDITIONS = {
  CLEAR: "Clear",
  CLOUDS: "Clouds",
  RAIN: "Rain",
  SNOW: "Snow",
  THUNDERSTORM: "Thunderstorm",
  WINDY: "Windy"
};

export const UV_INDEX_LEVELS = {
  LOW: { max: 2, label: "Low" },
  MODERATE: { max: 5, label: "Moderate" },
  HIGH: { max: 7, label: "High" },
  VERY_HIGH: { max: 10, label: "Very High" },
  EXTREME: { max: Infinity, label: "Extreme" }
};

export const WIND_DIRECTIONS = {
  N: { min: 0, max: 11.25, label: "North" },
  NNE: { min: 11.25, max: 33.75, label: "North-Northeast" },
  NE: { min: 33.75, max: 56.25, label: "Northeast" },
  ENE: { min: 56.25, max: 78.75, label: "East-Northeast" },
  E: { min: 78.75, max: 101.25, label: "East" },
  ESE: { min: 101.25, max: 123.75, label: "East-Southeast" },
  SE: { min: 123.75, max: 146.25, label: "Southeast" },
  SSE: { min: 146.25, max: 168.75, label: "South-Southeast" },
  S: { min: 168.75, max: 191.25, label: "South" },
  SSW: { min: 191.25, max: 213.75, label: "South-Southwest" },
  SW: { min: 213.75, max: 236.25, label: "Southwest" },
  WSW: { min: 236.25, max: 258.75, label: "West-Southwest" },
  W: { min: 258.75, max: 281.25, label: "West" },
  WNW: { min: 281.25, max: 303.75, label: "West-Northwest" },
  NW: { min: 303.75, max: 326.25, label: "Northwest" },
  NNW: { min: 326.25, max: 348.75, label: "North-Northwest" },
  N2: { min: 348.75, max: 360, label: "North" }
};

export const METRIC_UNITS = {
  TEMPERATURE: "°C",
  WIND_SPEED: "km/h",
  PRESSURE: "hPa",
  HUMIDITY: "%",
  VISIBILITY: "km",
  PRECIPITATION: "mm"
};

export const API_ENDPOINTS = {
  CURRENT_WEATHER: "https://api.openweathermap.org/data/2.5/weather",
  FORECAST: "https://api.openweathermap.org/data/2.5/forecast"
};

export const BACKGROUND_IMAGES = {
  CLEAR: "/assets/clear-sky.jpg",
  CLOUDS: "/assets/cloudy.jpg",
  RAIN: "/assets/rainy.jpg",
  SNOW: "/assets/snowy.jpg",
  THUNDERSTORM: "/assets/thunderstorm.jpg",
  DEFAULT: "/assets/weatherApp.jpg"
};

export const WEATHER_ICON_PROPS = {
  size: 32,
  className: "mx-auto"
};

export const CARD_STYLES = {
  base: "rounded-xl p-4 backdrop-blur-sm",
  primary: "bg-slate-800/40",
  secondary: "bg-slate-700/40"
};

export const TIME_FORMATS = {
  HOUR_MINUTES: "HH:mm",
  DAY_MONTH: "dd-MM",
  WEEKDAY: "EEEE",
  FULL: "PPPPp"
};