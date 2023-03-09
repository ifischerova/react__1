import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  const [age, setAge] = useState('');

  console.log('age:', age);

  return (
    <div className="container">
      <form>
        <label>Zadej svůj věk: 
          <input id="age-input" 
          type="text" 
          value={age}
          onChange={(e) => setAge(e.target.value)}/>
          </label>
          <button type="submit">Odeslat</button>
          <button onClick={() => setAge('0')} type="button">Vynulovat</button>
      </form>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
