import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const MenuItem = ({text, onSelect}) => {
  return (
    <a href="#" className="menu-item" onClick={() => onSelect(text)}>
      {text}
    </a>
  );
};

const App = () => {

  // V komponentě App vytvořte stav menuOpened, který bude obsahovat hodnotu true nebo false podle toho, zda má být menu otevřeno nebo zavřeno. Stav ovládejte kliknutím na tlačítko .menu__btn.
  const [menuOpened, setMenuOpened] = useState(true);
  const [pageTitle, setPageTitle] = useState("Domů");

  // V komponentě App vytvořte stav menuOpened, který bude obsahovat hodnotu true nebo false podle toho, zda má být menu otevřeno nebo zavřeno. Stav ovládejte kliknutím na tlačítko .menu__btn.
  const handleClick = () => setMenuOpened(!menuOpened);

  // Nyní budeme chtít zařídit, aby se hamburger menu zavřelo po kliknutí na libovolný odkaz. 
  // Uvnitř komponenty App tedy vytvořte callback funkci handleSelectItem, která změní hodnotu stavu menuOpened na false.
  const handleSelectItem = (text) => {
    setMenuOpened(false);
    setPageTitle(text);
  }

  return (
    <>
      <header>
        <div className={menuOpened === true ? "menu" : "menu menu--closed" }>
          <button className="menu__btn" onClick={handleClick}></button>
          <div className="menu__items">
            <MenuItem text="Domů" onSelect={handleSelectItem}/>
            <MenuItem text="Naše nabídka" onSelect={handleSelectItem}/>
            <MenuItem text="Náš tým" onSelect={handleSelectItem}/>
            <MenuItem text="Blog" onSelect={handleSelectItem}/>
            <MenuItem text="Kontakt" onSelect={handleSelectItem}/>
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
