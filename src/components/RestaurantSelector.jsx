import React from 'react';
import './RestaurantSelector.css';

function RestaurantSelector({ restaurants, onSelect }) {
  return (
    <div className="restaurant-selector">
      <h2>Selecciona un Restaurante</h2>
      <div className="restaurant-list">
        {restaurants.map((rest) => (
          <button 
            key={rest.id} 
            className="restaurant-btn"
            onClick={() => onSelect(rest.id)}
          >
            {rest.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RestaurantSelector;
