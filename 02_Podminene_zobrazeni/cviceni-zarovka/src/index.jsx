import React from 'react';
import { createRoot } from 'react-dom/client';
import  Bulb from './bulb/Bulb.jsx';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <Bulb on={ true }/>
      <Bulb on={ true }/>
      <Bulb on={ false }/>
      <Bulb on={ false }/>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
