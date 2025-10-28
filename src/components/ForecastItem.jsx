import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from "../components/ui/card";

export default function ForecastItem({ item }) {
  if (!item) return null;                      // Handle case where item is undefined or null

  const { time, temp_c, condition } = item;

  const dateObj = new Date(time);

  const dayName = dateObj.toLocaleDateString("en-IN", { weekday: "long" });
  const date = dateObj.toLocaleDateString("en-IN", { month: "short", day: "numeric" });
  const timeStr = dateObj.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

  return (
    <Card className="text-center shadow-sm min-w-[120px]">
      <CardContent className="py-4 px-2 space-y-2">
        <p className="text-xs text-gray-400">{dayName}</p>
        <p className="text-sm font-medium">{date}</p>
        <p className="text-xs text-gray-500">{timeStr}</p>
        {condition?.icon && (
          <img
            src={`https:${condition.icon}`}
            alt={condition.text}
            className="w-10 h-10 mx-auto"
          />
        )}
        <p className="text-lg font-semibold">{Math.round(temp_c)}°C</p>
        <p className="text-xs capitalize text-gray-600">{condition?.text}</p>
      </CardContent>
    </Card>
  );
}

ForecastItem.propTypes = {
  item: PropTypes.shape({
    time: PropTypes.string.isRequired,
    temp_c: PropTypes.number.isRequired,
    condition: PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
    }),
  }),
};
