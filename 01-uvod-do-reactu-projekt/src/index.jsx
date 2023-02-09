import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const Header =() => {
  return (
    <header>
      <h1>Moje uvodni React aplikace</h1>
    </header>
  )
};

const Content = () => {
  return (
    <main className="content">Moje prvni React stranka</main>
  )
};

const Footer = ( {author, year} ) => {
  return (
    <footer>Autorem teto srandy je { author } @ { year}</footer>
  )
};

// Component in React is always a function that returns only one element.
// To prevent having unnseccessary elements like divs in the app we use 'fragment' => empty "html" tags.
const App = () => {
  return (
    <>
      <Header/>
      <Content />
      <Footer author ="Tomas Jilek" year="2023" />
    </> 
  );
};


createRoot(
  document.querySelector('#app'),
).render(<App />);
