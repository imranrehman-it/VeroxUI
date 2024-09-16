import React from 'react';
import PropTypes from 'prop-types';

const TextGradient = ({ children, color1, color2 }) => {
  const gradientStyle = {
    background: `linear-gradient(90deg, ${color1}, ${color2})`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    fontWeight: 'bold', // Optional for emphasis
    display: 'inline-block',
  };

  return (
    <div style={gradientStyle}>
      {children}
    </div>
  );
};

TextGradient.propTypes = {
  children: PropTypes.node.isRequired,
  color1: PropTypes.string, // First color for the gradient
  color2: PropTypes.string, // Second color for the gradient
};

TextGradient.defaultProps = {
  color1: 'red',  // Default first color
  color2: 'blue', // Default second color
};

export default TextGradient;
