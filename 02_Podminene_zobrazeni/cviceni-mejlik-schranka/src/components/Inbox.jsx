import React from 'react';
import './inbox_style.css';

const Inbox = (props) => {
    const { account, messages } = props;

    return (
        <>
            <div className='mailbox__container'>
                <div account = { account } className = 'account'>{ account }</div>
                <div messages = { messages } className='messages unread'> Neprectenych zprav: { messages }</div>
            </div>
        </>
    );
};

export default Inbox;