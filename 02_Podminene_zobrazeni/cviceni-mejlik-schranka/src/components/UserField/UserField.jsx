import React from 'react';
import './style.css';

const UserField = ( {user} ) => {

    return (
        <>
            <div className="user">
                <div className="user__name"> { user } </div>
                <div className="user__icon"></div>
            </div>
        </>
    );
};

export default UserField;