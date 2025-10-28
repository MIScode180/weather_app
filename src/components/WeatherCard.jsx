import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from './ui/card';
import FavoriteButton from '../components/FavoriteButton'; // ✅ already imported

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const {
    location: { name, country },
    current: {
      temp_c,
      condition,
      humidity,
      wind_kph,
      precip_mm,
      last_updated,
    },
  } = weather;

  return (
    <Card className="p-4 space-y-2 shadow-md">
      <CardContent>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {name}, {country}
          </h2>
          
          {/* Add favorite button here */}

          <FavoriteButton city={name} />
        </div>

        <p className="text-sm text-gray-500">Last Updated: {last_updated}</p>

        <div className="flex items-center gap-4">
          {condition?.icon && (
            <img src={`https:${condition.icon}`} alt={condition.text} className="w-16 h-16" />
          )}
          <div>
            <p className="text-3xl font-semibold">{temp_c}°C</p>
            <p className="capitalize text-gray-600">{condition.text}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm mt-4">
          <p>💧 Humidity: {humidity}%</p>
          <p>💨 Wind: {wind_kph} km/h</p>
          <p>🌧️ Precipitation: {precip_mm} mm</p>
        </div>
      </CardContent>
    </Card>
  );
}

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }),
    current: PropTypes.shape({
      temp_c: PropTypes.number.isRequired,
      condition: PropTypes.shape({
        text: PropTypes.string,
        icon: PropTypes.string,
      }),
      humidity: PropTypes.number,
      wind_kph: PropTypes.number,
      precip_mm: PropTypes.number,
      last_updated: PropTypes.string,
    }),
  }).isRequired,
};
