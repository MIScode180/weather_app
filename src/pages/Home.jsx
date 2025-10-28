import React, { useEffect, useState } from 'react';
import weatherService from '../services/weatherService';
import WeatherCard from '../components/WeatherCard';
import ForecastList from '../components/ForecastList';
import SearchForm from '../components/SearchForm';

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("Mumbai");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const current = await weatherService.getCurrentByCity(city);
        const forecastData = await weatherService.getForecastByCity(city, 3);
        setCurrentWeather(current);
        setForecast(forecastData.forecast.forecastday);
      } catch (err) {
        console.error("Weather fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="space-y-6">
      <SearchForm onSearch={handleSearch} />
      <h1 className="text-2xl font-bold">Weather in {city}</h1>
      <WeatherCard weather={currentWeather} />
      <ForecastList forecast={forecast} />
    </div>
  );
}

