import React from 'react';
import { createRoot } from 'react-dom/client';
import Today from './Today';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Datumy</h1>
      </header>
      <main>
        <Today day="01" month="01" year="1974"/>
        <Today day="25" month="01" year="1986"/>
        <Today day="12" month="03" year="2017"/>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
