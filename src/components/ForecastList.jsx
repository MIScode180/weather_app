import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';

export default function ForecastList({ forecast }) {
  if (!forecast || forecast.length === 0) return null;

  const hours = forecast[0]?.hour || [];

  return (
    <div className="grid grid-flow-col overflow-x-auto gap-4 py-4">
      {hours.map((hourItem, idx) =>
        hourItem ? <ForecastItem key={idx} item={hourItem} /> : null
      )}
    </div>
  );
}


ForecastList.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.shape({
    hour: PropTypes.arrayOf(PropTypes.object),
  })).isRequired,
};
