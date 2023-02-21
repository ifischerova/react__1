import React from 'react';
import { createRoot } from 'react-dom/client';
import Inbox from './components/Inbox/Inbox.jsx';
import Header from './components/Header/Header.jsx';
import './style.css';

const App = () => {
  return (
    <>
      <Header user = 'Iva'/>
      <Inbox account = 'radovan.holatko@mejlik.cz' messages = {0}/>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
