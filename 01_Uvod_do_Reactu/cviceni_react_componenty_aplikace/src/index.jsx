import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <Header title = "Cviko React komponenty"/>
      <Main content = "Startovací šablona pro webovou aplikaci v Reactu.Vytvořeno pomocí create-czechitas-app."/>
      <Footer author="Ivka Fischerova"/>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
