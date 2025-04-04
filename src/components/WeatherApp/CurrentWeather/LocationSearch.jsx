// src/components/WeatherApp/CurrentWeather/LocationSearch.jsx
import { Search } from 'lucide-react';
import { useState } from 'react';
export const LocationSearch = ({ city, onCityChange }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      onCityChange(searchInput);
      setSearchInput("");
    }
  };

  return (
    <div className="flex items-center mb-6 bg-black/30 p-2 rounded-full">
      <svg className="w-5 h-5 ml-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="10" r="3" />
        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
      </svg>
      <input 
        type="text" 
        placeholder="Search Location"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        className="bg-transparent ml-auto text-sm outline-none w-full placeholder-gray-300"
      />
      <button
        onClick={handleSearch}
        className="text-white flex items-center transition"
      >
        <Search size={16} />
      </button>
    </div>
  );
};