import React from 'react';
import './style.css';

const Inbox = (props) => {
    const { account, messages } = props;

    return (
        <>
            <div className='mailbox__container'>
                <div account = { account } className = 'account'>{ account }</div>
                { messages === 0 ? (
                <div  className='messages no-unread'>Zadne neprectene zpravy</div>
                ) : (
                <div className='messages'>Pocet neprectenych zprav: { messages}</div>
                )}
            </div>
        </>
    );
};

export default Inbox;