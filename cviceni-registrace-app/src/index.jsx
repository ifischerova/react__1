import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  const [userName, setName] = useState('');

  console.log('name:', userName);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(userName);
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
         onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit" disabled={userName === '' ? true : false}>Registrovat</button>
    </form>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
