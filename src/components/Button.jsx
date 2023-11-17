import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, color, backgroundColor, text }) => {

    const defaultBgColor = '#FFC436';
    const defaulTextColor = 'black'

    const buttonStyle = {
        borderRadius: 50,
        backgroundColor: backgroundColor || defaultBgColor,
        color: color || defaulTextColor,
        fontSize: 15,
        height: 40,
        margin: '10px 0',
        padding: '0 20px'
      };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string
  };

export default Button;