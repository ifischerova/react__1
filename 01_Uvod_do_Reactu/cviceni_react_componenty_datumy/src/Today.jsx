import React from 'react';

const Today = (props) => {
    const { day, month, year } = props;
    return (
        <>
        <span className='day'>{ day }.</span>
        <span className='month'>{ month }.</span>
        <span className='year'>{ year }</span>
        <br></br>
        </>
    );
};

export default Today;