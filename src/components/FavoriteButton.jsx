import React, {useState , useEffect} from 'react'
import PropTypes from 'prop-types'
import { Heart , HeartOff } from "lucide-react";
  import { Button } from "@/components/ui/button"; 




export default function FavoriteButton({ city, onChange }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(city));
  }, [city]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updated = [];

    if (isFavorite) {
      updated = favorites.filter((c) => c !== city);
    } else {
      updated = [...favorites, city];
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFavorite(!isFavorite);

    if (onChange) onChange(updated); // Notify parent if needed
  };

  return (
    <Button variant="ghost" onClick={toggleFavorite}>
      {isFavorite ? <HeartOff className="text-red-500" /> : <Heart />}
    </Button>
  );
}

FavoriteButton.propTypes = {
  city: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};