import React from 'react';
import './style.css';
import Logo from '../Logo/Logo.jsx';
import UserField from '../UserField/UserField.jsx';

const Header = (props) => {
    const { user } = props;

    return (
        <>
            { user === undefined ?
             (<header>
                <Logo />
                <div className="login">Přihlásit se</div>

            </header>) : (
            <header>
                <Logo />

                <UserField user = { user }/>
            </header>
            ) }
        </>
    );
};

export default Header;