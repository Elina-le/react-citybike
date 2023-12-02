import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, color, backgroundColor, text, width, margin }) => {

    const defaultBgColor = '#FFC436';
    const defaulTextColor = 'black';
    const defaultWidth = '200px'
    const defaultMargin = '10px 0'

    const buttonStyle = {
        border: 'none',
        borderRadius: 50,
        backgroundColor: backgroundColor || defaultBgColor,
        color: color || defaulTextColor,
        fontSize: 18,
        height: 40,
        margin: margin|| defaultMargin,
        padding: '0 20px',
        width: width || defaultWidth
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
    backgroundColor: PropTypes.string,
    margin: PropTypes.string,
    width: PropTypes.string
  };

export default Button;