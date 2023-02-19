import React from 'react';
import { createRoot } from 'react-dom/client';
import Inbox from './components/Inbox.jsx'
import './style.css';

const App = () => {
  return (
    <>
      <Inbox account='radovan.holatko@mejlik.cz' messages = {5}/>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
