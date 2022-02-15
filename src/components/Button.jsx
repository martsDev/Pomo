import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, usingClass, callbackFunction }) => {
  return (
    <button
      className={ usingClass }
      onClick={ callbackFunction }
    >
      { title }
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  usingClass: PropTypes.string,
  callbackFunction: PropTypes.func,
};

export default Button;
