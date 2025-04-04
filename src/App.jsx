// import { useState, useEffect } from 'react'
// import { Droplets, Wind, Eye, Thermometer, Compass, Search, Sun, Cloud, CloudRain, CloudSnow, Sunrise, CloudLightning } from 'lucide-react';
// import weather from "./assets/weatherApp.jpg";
// import Loading from "./WeatherLoading";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const WeatherApp = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const apiKey = "1149d0079605aaeceec6d0c8bf927f5a";
//   const [city, setCity] = useState("Lagos");
//   const [weatherData, setWeatherData] = useState(null);
//   const [forecastData, setForecastData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchInput, setSearchInput] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const weatherResponse = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//         );
//         if (!weatherResponse.ok) throw new Error("Failed to fetch weather data");
//         const weather = await weatherResponse.json();
//         setWeatherData(weather);

//         const forecastResponse = await fetch(
//           `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
//         );
//         if (!forecastResponse.ok) throw new Error("Failed to fetch forecast data");
//         const forecastJson = await forecastResponse.json();
//         setForecastData(forecastJson);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [city]);

//   const handleSearch = () => {
//     if (searchInput.trim() !== "") {
//       setLoading(true);
//       setCity(searchInput);
//       setSearchInput("");
//     }
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp * 1000);
//     return date.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "2-digit"
//     }).replace(/\//g, "-");
//   };

//   const getWeatherIcon = (condition) => {
//     switch (condition) {
//       case "Clear":
//         return <Sun size={32} className="text-yellow-500" />;
//       case "Clouds":
//         return <Cloud size={32} className="text-gray-500" />;
//       case "Rain":
//         return <CloudRain size={32} className="text-blue-600" />;
//       case "Snow":
//         return <CloudSnow size={32} className="text-cyan-400" />;
//       case "Thunderstorm":
//         return <CloudLightning size={32} className="text-purple-700" />;
//       case "Windy":
//         return <Wind size={32} className="text-green-500" />;
//       default:
//         return <Thermometer size={32} className="text-red-500" />;
//     }
//   };

//   if (loading) return <Loading/>;
//   if (error) return <p className="text-red-500 text-center p-5">{error}</p>;
  
//   return (
//     <div className="flex items-center justify-center min-h-screen p-4" style={{
//       backgroundImage: `url(${weather})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center"
//     }}>
//       <div className="w-full max-w-7xl bg-black/20 backdrop-blur-lg text-white rounded-2xl overflow-hidden shadow-2xl">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-4">
//           {/* Left Panel - Current Weather */}
//           <div className="lg:col-span-1 bg-gradient-to-b from-slate-800/50 to-slate-900/60 rounded-xl p-6 flex flex-col backdrop-blur-sm">
//             {/* Location */}
//             <div className="flex items-center mb-6 bg-black/30 p-2 rounded-full">
//               <svg className="w-5 h-5 ml-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <circle cx="12" cy="10" r="3" />
//                 <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
//               </svg>
//               <input 
//                 type="text" 
//                 placeholder="Search Location"
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//                 className={`bg-transparent ml-auto text-sm outline-none w-full placeholder-gray-300 ${loading ? 'opacity-50' : ''}`}
//                 disabled={loading}
//               />
//               <button
//                 onClick={handleSearch}
//                 className="text-white flex items-center transition"
//                 disabled={loading}
//               >
//                 <Search size={16} />
//               </button>
//             </div>

//             {/* Current Temperature */}
//             <div className="text-center my-8">
//               <p className="font-semibold">🌍 {city || "Unknown City"}</p>
//               <p className="font-semibold">
//                 {weatherData?.timezone === undefined ? "N/A" : `UTC${weatherData.timezone >= 0 ? '+' : ''}${weatherData.timezone/3600}` }
//               </p>
//               <h1 className="text-7xl font-light">
//                 {weatherData?.main?.temp !== undefined ? `${Math.round(weatherData.main.temp)}°C` : "Loading..."}
//               </h1>
              
//               <div className="flex justify-between items-center">
//                 <div className="flex justify-between items-center gap-1">
//                   <span>Lat: </span>
//                   <p>{weatherData?.coord?.lat ?? "N/A"}</p>
//                 </div>
//                 <div className="flex justify-between items-center gap-1">
//                   <span>Lon: </span>
//                   <p>{weatherData?.coord?.lon ?? "N/A"}</p>
//                 </div>
//                 <div className="flex justify-between items-center gap-1">
//                   <span>Tz Offset: </span>
//                   <p>{weatherData?.timezone ?? "N/A"}</p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Bottom Metrics */}
//             <div className="grid grid-cols-2 gap-3 mt-auto">
//               <div className="bg-slate-800/40 rounded-lg p-3 backdrop-blur-xs">
//                 <div className="flex items-center text-gray-300/80 text-xs mb-2">
//                   <Thermometer size={14} className="mr-1" />
//                   <span>FEELS LIKE</span>
//                 </div>
//                 <div className="text-xl font-semibold">
//                   {weatherData?.main?.feels_like ? `${Math.round(weatherData.main.feels_like)}°` : "N/A"}
//                 </div>
//                 <div className="text-xs text-gray-300/80">Humidity is making it feel warmer</div>
//               </div>
              
//               <div className="bg-slate-800/40 rounded-lg p-3 backdrop-blur-xs">
//                 <div className="flex items-center text-gray-300/80 text-xs mb-2">
//                   <Droplets size={14} className="mr-1" />
//                   <span>PRECIPITATION</span>
//                 </div>
//                 <div className="text-xl font-semibold">
//                   {weatherData?.rain?.['1h'] || weatherData?.rain?.['3h'] || 0}mm
//                 </div>
//                 <div className="text-xs text-gray-300/80">in last 24h</div>
//               </div>
              
//               <div className="bg-slate-800/40 rounded-lg p-3 backdrop-blur-xs">
//                 <div className="flex items-center text-gray-300/80 text-xs mb-2">
//                   <Eye size={14} className="mr-1" />
//                   <span>VISIBILITY</span>
//                 </div>
//                 <div className="text-xl font-semibold">
//                   {weatherData?.visibility ? `${(weatherData.visibility / 1000).toFixed(1)} km` : "N/A"}
//                 </div>
//               </div>
              
//               <div className="bg-slate-800/40 rounded-lg p-3 backdrop-blur-xs">
//                 <div className="flex items-center text-gray-300/80 text-xs mb-2">
//                   <Droplets size={14} className="mr-1" />
//                   <span>HUMIDITY</span>
//                 </div>
//                 <div className="text-xl font-semibold">
//                   {weatherData?.main?.humidity ? `${weatherData.main.humidity}%` : "N/A"}
//                 </div>
//                 <div className="text-xs text-gray-300/80">The dew point is 25° right now</div>
//               </div>
//             </div>
//           </div>
          
//           {/* Right Panel - Forecast */}
//           <div className="lg:col-span-2 flex flex-col gap-4">
//             {/* Hourly Forecast */}
//             <div className="bg-slate-800/40 rounded-xl p-4 backdrop-blur-sm">
//               <div className="flex items-center mb-3">
//                 <div className="w-6 h-6 flex items-center justify-center bg-gray-700/40 rounded-full mr-2">
//                   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <circle cx="12" cy="12" r="10" />
//                     <polyline points="12 6 12 12 16 14" />
//                   </svg>
//                 </div>
//                 <span className="text-sm">HOURLY FORECAST</span>
//               </div>

//               <div className="grid grid-cols-7 gap-2 mt-2">
//                 {forecastData?.list?.slice(0, 7).map((hour, idx) => (
//                   <div key={idx} className="bg-slate-700/40 rounded-lg p-3 text-center backdrop-blur-xs">
//                     <div className="text-sm">{new Date(hour.dt * 1000).getHours()}:00</div>
//                     <div>{getWeatherIcon(hour.weather[0].main)}</div>
//                     <div className="text-lg font-semibold my-1">{Math.round(hour.main.temp)}°</div>                   
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* 7-Day Forecast */}
//             <div className="bg-slate-800/40 rounded-xl p-4 backdrop-blur-sm">
//               <div className="flex items-center mb-3">
//                 <div className="w-6 h-6 flex items-center justify-center bg-gray-700/40 rounded-full mr-2">
//                   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                     <line x1="16" y1="2" x2="16" y2="6" />
//                     <line x1="8" y1="2" x2="8" y2="6" />
//                     <line x1="3" y1="10" x2="21" y2="10" />
//                   </svg>
//                 </div>
//                 <span className="text-sm">7-DAY FORECAST</span>
//               </div>
              
//               <div className='grid grid-cols-7 gap-2 mt-2'>
//                 {forecastData?.list?.filter((item, index) => index % 5 === 0).slice(0, 7).map((day, idx) => (
//                   <div key={idx} className="bg-slate-700/40 rounded-lg p-3 text-center backdrop-blur-xs">
//                     <div className="text-sm">{formatDate(day.dt)}</div>
//                     <div className="w-8 h-8 mx-auto">{getWeatherIcon(day.weather[0].main)}</div>
//                     <div className="text-lg font-semibold my-1">{Math.round(day.main.temp)}°</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Bottom Metrics */}
//             <div className="grid grid-cols-2 gap-4">
//               {/* UV Index */}
//               <div className="bg-slate-800/40 rounded-xl p-4 backdrop-blur-sm">
//                 <div className="flex items-center mb-2">
//                   <div className="w-6 h-6 flex items-center justify-center bg-gray-700/40 rounded-full mr-2">
//                     <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <circle cx="12" cy="12" r="5" />
//                       <line x1="12" y1="1" x2="12" y2="3" />
//                       <line x1="12" y1="21" x2="12" y2="23" />
//                       <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
//                       <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
//                       <line x1="1" y1="12" x2="3" y2="12" />
//                       <line x1="21" y1="12" x2="23" y2="12" />
//                       <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
//                       <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
//                     </svg>
//                   </div>
//                   <span className="text-sm">UV INDEX</span>
//                 </div>
                
//                 <div className="flex items-baseline mb-2">
//                   <span className="text-3xl font-semibold mr-2">
//                     {weatherData?.uvi ?? "N/A"}
//                   </span>
//                   <span className="text-gray-300/80">
//                     {weatherData?.uvi ? 
//                       (weatherData.uvi < 3 ? 'Low' : 
//                        weatherData.uvi < 6 ? 'Moderate' : 
//                        weatherData.uvi < 8 ? 'High' : 'Very High') : ''}
//                   </span>
//                 </div>
                
//                 <div className="w-full h-2 bg-gray-700/40 rounded-full overflow-hidden mb-1">
//                   <div 
//                     className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500" 
//                     style={{ width: `${Math.min(100, (weatherData?.uvi || 0) * 10)}%` }}
//                   ></div>
//                 </div>
//                 <div className="text-xs text-gray-300/80">Use sun protection when needed</div>
//               </div>
              
//               {/* Wind */}
//               <div className="bg-slate-800/40 rounded-xl p-4 backdrop-blur-sm">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex items-center">
//                     <div className="w-6 h-6 flex items-center justify-center bg-gray-700/40 rounded-full mr-2">
//                       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                         <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
//                       </svg>
//                     </div>
//                     <span className="text-sm">WIND</span>
//                   </div>
//                   <div>
//                     <div className="w-16 h-16 border-4 border-gray-700/30 rounded-full relative">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <Compass size={24} className="transform" style={{ 
//                           transform: `rotate(${weatherData?.wind?.deg || 0}deg)` 
//                         }} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="flex items-baseline">
//                   <span className="text-3xl font-semibold mr-2">
//                     {weatherData?.wind?.speed ? Math.round(weatherData.wind.speed * 3.6) : "N/A"}
//                   </span>
//                   <span className="text-gray-300/80 mr-2">km/h</span>
//                   <span className="text-gray-300/80">Wind</span>
//                 </div>
                
//                 <div className="mt-2">
//                   <span className="text-lg font-semibold mr-1">
//                     {weatherData?.wind?.gust ? Math.round(weatherData.wind.gust * 3.6) : "N/A"}
//                   </span>
//                   <span className="text-gray-300/80 text-sm">km/h Gusts</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherApp;
import "./App.css";
// src/App.js
import { WeatherApp } from './components/WeatherApp';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

export default App;