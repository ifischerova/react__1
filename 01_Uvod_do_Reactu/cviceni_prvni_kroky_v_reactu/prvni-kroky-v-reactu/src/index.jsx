import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const name = 'Iva Fischerova';
const paragraph = 'intro';

const appComponent = (
  <>
    <div className="container">
      <header>
        <h1>{ name }</h1>
      </header>
      <main>
        <p className={ paragraph }>Moje první React aplikace</p>
      </main>
    </div>
  </>
);

createRoot(document.querySelector('#app')).render(appComponent);
