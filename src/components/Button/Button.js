// src/components/Button/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ variant, children, onClick, disabled, rounded, size }) => {
  // const baseClasses = `px-3 py-2 font-semibold text-${size} focus:outline-none transition duration-300 ease-in-out shadow-md hover:shadow-xl rounded`;
  if(size === 'sm'){
    var baseClasses = `px-2 py-1 font-semibold text-sm focus:outline-none transition duration-300 ease-in-out shadow-md hover:shadow-xl rounded w-fit`;
  }else if(size === 'lg'){
    var baseClasses = `px-4 py-3 font-semibold text-lg focus:outline-none transition duration-300 ease-in-out shadow-md hover:shadow-xl rounded`;
  }else{
    var baseClasses = `px-3 py-2 font-semibold text-md focus:outline-none transition duration-300 ease-in-out shadow-md hover:shadow-xl rounded`;
  }

  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
    info: 'bg-teal-500 text-white hover:bg-teal-600',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[disabled ? 'disabled' : variant]} rounded-${rounded}`} // Apply both base and variant classes
      onClick={disabled ? null : onClick} // Disable click if disabled
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'outline',
    'disabled'
  ]),
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Button.defaultProps = {
  variant: 'primary',
  rounded: 'md',
  onClick: () => {},
  disabled: false,
  size: 'md',
};

export default Button;
