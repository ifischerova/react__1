import React, { useState } from 'react';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {

  const [datetime, setDatetime] = useState('')

  useEffect(() => {
    fetch('https://worldtimeapi.org/api/timezone/Europe/Prague')
      .then((response) => response.json())
      .then((data) => setDatetime(data.datetime));
    },[])

  return (
    <div className="container">
       <p>Hodnota datetime je {datetime}</p>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
