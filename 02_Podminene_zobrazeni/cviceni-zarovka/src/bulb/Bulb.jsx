import React from 'react';
import './bulb_style.css';
import './img/bulb-on.png';
import './img/bulb-off.png';

const Bulb = (props) => {
    const { on } = props;
    return (
        <>
         <div  className={on ? 'bulb bulb--on' : 'bulb'}></div>
        </>
    );
};

export default Bulb;