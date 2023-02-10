import React from 'react';

const Main = (props) => {
    const { content } = props;
    return (
        <main>
        <p>
            { content }
        </p>
      </main>
    );
};

export default Main;