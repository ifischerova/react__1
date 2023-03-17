import React, { useEffect, useState } from 'react';
import './style.css';

//const currencies = {
  //USD: { CZK: 23.823 },
  //EUR: { CZK: 24.74 },
  //GBP: { CZK: 29.067 }
//};

const Rate = ({from}) => {
  const [ toCurrency, setToCurrency ] = useState(null);

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${from}&to=CZK`)
      .then((response) =>  response.json())
      .then((data) => setToCurrency(data.rates.CZK))
  }, [from])

  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value" >{toCurrency}CZK</div>
    </div>
  );
};

export default Rate;
