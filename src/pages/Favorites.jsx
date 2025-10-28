import React,  { useEffect, useState } from 'react'
import weatherService from '../services/weatherService';
import WeatherCard from '../components/WeatherCard';
import Loader  from '../components/Loader';

export default function Favorites() {
  const [cities, setCities] = useState([]);
  const [weatherList, setWeatherList] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadFavorites = () => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setCities(saved);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    if (cities.length === 0) {
      setWeatherList([]);
      setLoading(false);
      return;
    }

    const fetchAll = async () => {
      setLoading(true);
      try {
        const data = await Promise.all(
          cities.map((city) => weatherService.getCurrentByCity(city))
        );
        setWeatherList(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [cities]);

  if (loading) return <Loader message="Loading your saved cities..." />;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Your Favorite Cities</h2>
      {weatherList.length === 0 ? (
        <p className="text-muted-foreground">No favorites yet.</p>
      ) : (
        weatherList.map((weather) => (
          <WeatherCard
            key={weather.location.name}
            weather={weather}
            showFavorite={true}
            onFavoriteChange={loadFavorites}
          />
        ))
      )}
    </div>
  );
}