const API_KEY = "3000f7194ae84ad4939145944251506";
const BASE_URL = "http://api.weatherapi.com/v1";

const toQuery = (params) =>
  Object.entries(params)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join("&");

const weatherService = {
  // CURRENT weather by CITY
  getCurrentByCity: async (city) => {
    const query = toQuery({ key: API_KEY, q: city });
    const res = await fetch(`${BASE_URL}/current.json?${query}`);
    if (!res.ok) throw new Error("Failed to fetch current weather");
    return res.json();
  },

  // weather by COORDINATES
  getCurrentByCoords: async (lat, lon) => {
    const query = toQuery({ key: API_KEY, q: `${lat},${lon}` });
    const res = await fetch(`${BASE_URL}/current.json?${query}`);
    if (!res.ok) throw new Error("Failed to fetch weather by coordinates");
    return res.json();
  },

  //  FORECAST by CITY
  getForecastByCity: async (city, days = 3) => {
    const query = toQuery({ key: API_KEY, q: city, days });
    const res = await fetch(`${BASE_URL}/forecast.json?${query}`);
    if (!res.ok) throw new Error("Failed to fetch forecast by city");
    return res.json();
  },

  //  FORECAST by COORDINATES
  getForecastByCoords: async (lat, lon, days = 3) => {
    const query = toQuery({ key: API_KEY, q: `${lat},${lon}`, days });
    const res = await fetch(`${BASE_URL}/forecast.json?${query}`);
    if (!res.ok) throw new Error("Failed to fetch forecast by coordinates");
    return res.json();
  },
};

export default weatherService;








