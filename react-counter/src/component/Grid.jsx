import React, { useState } from 'react';
import Cell from './Cell';

const Grid = () => {

  const [ activeCount, setActiveCount ] = useState(0);

  const handleCellStateChange = (isActive) => {

    setActiveCount(c => isActive ? c + 1 : c - 1);
  };

  return (

    <div className = "grid-container">

      <div className = "counter">
        Cells: {activeCount}
      </div>

      <div className = "grid">
        {[...Array(4)].map((_, index) => (
          < Cell 
            key = {index} 
            // Pass the function to the child component
            onStateChange = {handleCellStateChange}
          />
        ))}
      </div>

    </div>

  );
};

export default Grid;