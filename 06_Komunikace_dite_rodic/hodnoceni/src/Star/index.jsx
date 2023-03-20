import React, { useState } from 'react';
import './style.css';

const Star = ({onGlow, onDim}) => {
  const [glowing, setGlowing] = useState(false);

  const handleClick = () => {
    setGlowing(!glowing);
  }

  
  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

  return (
    <div className={starClass} onClick={handleClick}></div>
  );
};

export default Star;