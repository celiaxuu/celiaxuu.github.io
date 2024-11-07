import React, { useState } from 'react';

const Cell = (props) => {

  // Recieve date from the parent component to indicate cell's state
  const onStateChange = props.onStateChange;

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {

    const newState = !isActive;
    setIsActive(newState);
    onStateChange(newState);
  };

  return (
    <div
      className = {`cell ${isActive ? 'active' : ''}`} // Use such class name to better format CSS
      onClick = {handleClick}
    />
  );
};

export default Cell;