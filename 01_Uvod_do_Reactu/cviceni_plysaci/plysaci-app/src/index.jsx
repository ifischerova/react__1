import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const plushy1 = {
  name: 'Silvestr',
  image: 'https://kodim.cz/cms/assets/kurzy/daweb/react/uvod-do-reactu/cv-prvni-aplikace/cvlekce%3Eplysaci/elephant.jpg',
  text: 'Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí.',
};

const plushy2 = {
  name: 'Ctirad',
  image: 'https://kodim.cz/cms/assets/kurzy/daweb/react/uvod-do-reactu/cv-prvni-aplikace/cvlekce%3Eplysaci/mouse.jpg',
  text: 'Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.',
}


const plushies = (
  <>
    <div class="plushy">
      <img class="plushy__image" src="odkaz na obrazek" />
      <h2 class="plushy__name">Jméno plyšáka</h2>
      <p class="plushy__text">Text o plyšákovi</p>
    </div>

    <div class="plushy">
      <img class="plushy__image" src="odkaz na obrazek" />
      <h2 class="plushy__name">Jméno plyšáka</h2>
      <p class="plushy__text">Text o plyšákovi</p>
    </div>
  </>
)

const content = (
  <>
    <h1>Plyšáci</h1>
    <div className="plushies"></div>
  </>
);

createRoot(
  document.querySelector('#app'),
).render(content);
