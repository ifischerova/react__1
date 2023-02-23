import React from "react";
import './style.css';

const City = ({name, population, area}) => {

    return (
        <>
            <div className="city" key={name}>
                <ul className="city__list">
                    <li className="city__item">
                        <h2>Nazev:</h2> 
                        <p>{name}</p>
                    </li>
                    <li className="city__item">
                        <h2>Obyvatelstvo:</h2>
                        <p>{population}</p>
                    </li>
                    <li className="city__item">
                        <h2>Rozloha:</h2>
                        <p>{area}</p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default City;