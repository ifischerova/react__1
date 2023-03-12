import React, { useState } from 'react';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {

  const [datetime, setDatetime] = useState('');

  const [timezone, setTimeZone] = useState('Europe/Prague')

  useEffect(() => {
    fetch(`https://worldtimeapi.org/api/timezone/${timezone}`)
      .then((response) => response.json())
      .then((data) => setDatetime(data.datetime));
    }, [timezone])

  return (
    <div className="container">
       <p>Hodnota datetime je {datetime}</p>

      <form>
        <label>
          Vyberte zonu:{' '}
          <select
            value = {timezone}
            onChange = {(e) => setTimeZone(e.target.value)}
          >
            <option value="America/New_York">New York</option>
            <option value="Europe/London">Londýn</option>
            <option value="Europe/Moscow">Moskva</option>
            <option value="Europe/Prague">Praha</option>
            <option value="Asia/Hong_Kong">Hong Kong</option>
            <option value="Asia/Jerusalem">Jeruzalém</option>
          </select>
        </label>
      </form>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
