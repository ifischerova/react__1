import React from 'react';

const Footer = (props) => {
    const {author } = props;
    return (
      <footer>
       <p>{ author }</p>
      </footer>
    );
};

export default Footer;