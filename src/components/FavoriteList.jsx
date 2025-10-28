import React, { useState, useEffect } from "react";
import Button from "../components/ui/button";

export default function FavoriteList({ onSelect }) {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(favs);
  }, []);

  return (
    <div className="p-4 space-y-2">
      <h2 className="text-lg font-bold">🌟 Favorite Cities</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500 text-sm">No favorites yet.</p>
      ) : (
        <ul className="space-y-1">
          {favorites.map((city) => (
            <li key={city}>
              <Button variant="link" onClick={() => onSelect(city)}>
                {city}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
