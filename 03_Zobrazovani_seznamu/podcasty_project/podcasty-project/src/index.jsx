import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Episode from './components/Episode/Episode.jsx';

const episodes = [
  { num: 126, title: 'Robot, který snědl koblihu', guest: 'Radovan Siwek' },
  { num: 127, title: 'Hledání plyšového Yettiho', guest: 'Vojtěch Ryba' },
  { num: 128, title: 'Moderní hrachová polévka', guest: 'Kamila Štancová' },
  { num: 129, title: 'Poloautomatické zrcadlo', guest: 'Janka Janovská' },
  { num: 130, title: 'Máčené hlavy parlamentu', guest: 'Jonáš Daněk' },
  { num: 131, title: 'Služby na hraně přívěsu', guest: 'Tereza Křivánková' },
  { num: 132, title: 'Klasifikace sněžných klokanů', guest: 'Josef Stix' },
  { num: 133, title: 'Rybolov v Oceánu bouří', guest: 'Ludmila Gajová' },
];

const App = () => {
  return (
    <div className="container">
        <h1>Podcasty</h1>{
        episodes.map((episode) => <Episode 
          key = {episode.title}
          num = {episode.num}
          title = {episode.title}
          guest = {episode.guest}
        />)
        }
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
