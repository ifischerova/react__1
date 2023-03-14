import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  const [userName, setName] = useState('');

  console.log('name:', userName);

  const [country, setCountry] = useState('Česká republika');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Uzivatel ${userName} ze zeme ${country}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      { userName === '' ?
        <div >Uzivatelske jmeno je povinny udaj.</div>:
        null
      }
      <label>
        Uživatelské jméno:
        <input type="text" 
         value={userName}
         //e.target = tak se dostanu k policku, kde nastala ona udalost
         onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
    Země původu:
    <select 
      value = {country}
      onChange={(e) => setCountry(e.target.value)}>
      <option value="Chorvatsko">Chorvatsko</option>
      <option value="Česká republika">Česká republika</option>
      <option value="Polsko">Polsko</option>
      <option value="Slovenská republika">Slovenská republika</option>
    </select>
  </label>
      <button type="submit" disabled={userName === '' ? true : false}>Registrovat</button>
    </form>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
