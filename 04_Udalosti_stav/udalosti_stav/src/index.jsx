import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {

const handleClick = () => {
    alert('ahoj Ivuse');
  };

  return (
     <button className="greet" onClick={handleClick}>
      Klikni na me
    </button>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
