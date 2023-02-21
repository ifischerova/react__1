// Zkracovaci jednhubky

//const isEmail = (str) => {
  //  return str.includes('@');
//};

const isEmail = (str) => str.includes('@');

//const roll = () => {
    //return Math.floor(Math.random() * 6) + 1;
//};

const roll = () => Math.floor(Math.random() * 6) + 1;

//const getNumber = (id) => {
    //return Number(document.querySelector(`#${id}`).value);
//};

const getNumber = (id) => Number(document.querySelector(`#${id}`).value);

//const weather = (temperature) => {
    //if (temperature > 16) {
      //return 'teplo';
    //}
  
    //return 'zima';
//};

const weather = (temperature) => (temperature > 16 ? 'teplo' : 'zima');

// Opakovani map
const weekdays = [
    'pondělí',
    'úterý',
    'středa',
    'čtvrtek',
    'pátek',
    'sobota',
    'neděle',
  ];

  const months = [
    {
      name: 'leden',
      days: 31,
    },
    {
      name: 'únor',
      days: 28,
    },
    {
      name: 'březen',
      days: 31,
    },
    {
      name: 'duben',
      days: 30,
    },
    {
      name: 'květen',
      days: 31,
    },
    {
      name: 'červen',
      days: 30,
    },
    {
      name: 'červenec',
      days: 31,
    },
    {
      name: 'srpen',
      days: 31,
    },
    {
      name: 'září',
      days: 30,
    },
    {
      name: 'říjen',
      days: 31,
    },
    {
      name: 'listopad',
      days: 30,
    },
    {
      name: 'prosinec',
      days: 31,
    },
  ];

  const weekdaysCapsLock = weekdays.map((day) => day.toUpperCase());

  console.log(weekdaysCapsLock);

  const weekdaysFirstTwoLetters = weekdays.map((day) => day.slice(0,2));

  console.log(weekdaysFirstTwoLetters);

  const monthsOnlyDays = months.map((month) =>(month.days));

  console.log(monthsOnlyDays);

  const FirstDayInMonthIn2020 = months.map((month) => `1.${month.name} 2020`);

  console.log(FirstDayInMonthIn2020);