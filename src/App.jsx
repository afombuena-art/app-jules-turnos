import React, { useState } from 'react';
import { restaurants, shifts } from './data/mockData';
import RestaurantSelector from './components/RestaurantSelector';
import DailySchedule from './components/DailySchedule';
import './App.css';

function App() {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);

  const handleSelectRestaurant = (id) => {
    setSelectedRestaurantId(id);
  };

  const handleBack = () => {
    setSelectedRestaurantId(null);
  };

  // Find the selected restaurant object
  const selectedRestaurant = restaurants.find(r => r.id === selectedRestaurantId);
  // Get shifts for the selected restaurant
  const currentShifts = selectedRestaurantId ? shifts[selectedRestaurantId] : [];

  return (
    <div className="app-container">
      {selectedRestaurantId === null ? (
        <RestaurantSelector 
          restaurants={restaurants} 
          onSelect={handleSelectRestaurant} 
        />
      ) : (
        <DailySchedule 
          restaurantName={selectedRestaurant?.name} 
          shifts={currentShifts} 
          onBack={handleBack} 
        />
      )}
    </div>
  );
}

export default App;
