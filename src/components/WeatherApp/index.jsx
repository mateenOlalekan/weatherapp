// src/components/WeatherApp/index.js
import { useWeather } from '../../hooks/useWeather';
import { CurrentWeather } from './CurrentWeather';
import { Forecast } from './Forecast';
import Loading from '../WeatherLoading';
import weather from "../../assets/weatherApp.jpg";

export const WeatherApp = () => {
  const { city, setCity, weatherData, forecastData, loading, error } = useWeather();

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500 text-center p-5">{error}</p>;

  return (
    <div className="flex items-center justify-center min-h-screen p-4" style={{
      backgroundImage: `url(${weather})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <div className="w-full max-w-7xl bg-black/20 backdrop-blur-lg text-white rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-4">
          <CurrentWeather 
            city={city} 
            weatherData={weatherData} 
            onCityChange={setCity} 
          />
          <Forecast 
            weatherData={weatherData} 
            forecastData={forecastData} 
          />
        </div>
      </div>
    </div>
  );
};