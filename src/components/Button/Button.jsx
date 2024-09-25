import React, { Children } from 'react';
import PropTypes from 'prop-types';

/**
 * Button component for Verox UI library
 * @param {string} size - Size of the button (xs, sm, base, lg, 2xl)
 * @param {string} color - Color of the button (blue, red, green, yellow, default, purple)
 * @param {string} rounded - Rounded corners of the button (none, sm, md, lg, full)
 * @param {string} variant - Variant of the button (solid, outlined, ghost, flat, light)
 * @param {string} borderType - Border type of the button (solid, dashed, dotted)
 * @param {boolean} disabled - Disables the button
 * @param {string} text - Text displayed on the button
 * @param {function} onClick - Function to run when button is clicked
 * @param {string} type - Type of the button (button, submit, reset)
 * @param {function} onMouseEnter - Function to run when mouse enters the button
 * @param {function} onMouseLeave - Function to run when mouse leaves the button
 * @param {function} onFocus - Function to run when button is focused
 * @param {function} onBlur - Function to run when button loses focus
 * @returns {JSX.Element} Button component
 */

const Button = ({
  size = 'xs',
  color = 'blue',
  rounded = 'lg',
  variant = 'solid', // default variant is solid
  borderType = 'solid', // used for outline variant
  disabled = false,
  text = 'Button',
  onClick,
  type = 'button',
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  children,

}) => {

  // Determine the size class
  const sizeClass = size === 'base' ? 'text-base'
                    : size === 'lg' ? 'text-lg'
                    : size === '2xl' ? 'text-2xl'
                    : size === 'sm' ? 'text-sm'
                    : 'text-xs';

  // Determine the background color class for solid variant
  const colorClass = color === 'blue' ? 'bg-blue-500'
                    : color === 'red' ? 'bg-[#F31260]'
                    : color === 'green' ? 'bg-[#17c964]'
                    : color === 'yellow' ? 'bg-[#f5a524]'
                    : color === 'default' ? 'bg-[#3F3F46]'
                    : color === 'purple' ? 'bg-[#8A63D2]'
                    : 'bg-blue-500';

  // Determine the text color based on variant
  const textColorClass = variant === 'solid'
                    ? 'text-white'  // Text should be white for solid buttons
                    : color === 'blue' ? 'text-blue-500'
                    : color === 'red' ? 'text-[#F31260]'
                    : color === 'green' ? 'text-[#17c964]'
                    : color === 'yellow' ? 'text-[#f5a524]'
                    : color === 'default' ? 'text-[#3F3F46]'
                    : 'text-blue-500';

  // Determine the border color for outlined variant
  const borderColor = color === 'blue' ? 'border-blue-500'
                    : color === 'red' ? 'border-[#F31260]'
                    : color === 'green' ? 'border-[#17c964]'
                    : color === 'yellow' ? 'border-[#f5a524]'
                    : color === 'default' ? 'border-[#3F3F46]'
                    : 'border-blue-500';

  // Determine the rounded class
  const roundedClass = rounded === 'none' ? 'rounded-none'
                      : rounded === 'sm' ? 'rounded-sm'
                      : rounded === 'md' ? 'rounded-md'
                      : rounded === 'full' ? 'rounded-full'
                      : 'rounded-lg';

  // Determine the border type class for outlined buttons
  const borderTypeClass = borderType === 'solid' ? 'border-solid'
                         : borderType === 'dashed' ? 'border-dashed'
                         : borderType === 'dotted' ? 'border-dotted'
                         : 'border-solid';

  // Conditional classes based on the variant
  const variantClass =  variant === 'ghost' ? `${textColorClass} ${colorClass} ${borderColor} ${borderTypeClass} bg-opacity-25 border-2`:
                        variant === 'outlined' ? ` border-2 ${textColorClass} ${borderColor} ${borderTypeClass}`:
                        variant === 'flat' ? `${textColorClass} ${colorClass} bg-opacity-25`:
                        variant === 'light' ? `${textColorClass} ${colorClass} bg-opacity-0 hover:bg-opacity-25 transition-all duration-150 ease-in-out`:
                        `${colorClass} ${textColorClass} ${borderColor} border-2`;

  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90';


  return (
    <button
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onFocus={onFocus}
    onBlur={onBlur}
    type={type}
    className={`font-medium px-4 py-2 w-fit h-fit ${roundedClass} ${sizeClass} ${variantClass} ${disabledClass}`}>
      {children || text}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', '2xl']),
  color: PropTypes.oneOf(['blue', 'red', 'green', 'yellow', 'default', 'purple']),
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
  variant: PropTypes.oneOf(['solid', 'outlined', 'ghost', 'flat', 'light']),
  borderType: PropTypes.oneOf(['solid', 'dashed', 'dotted']),
  disabled: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled : PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,

};

// Set up defaultProps
Button.defaultProps = {
  size: 'xs',
  color: 'blue',
  rounded: 'lg',
  variant: 'solid',
  borderType: 'solid',
  disabled: false,
  text: 'Button',
  onClick: () => {},
  type: 'button',
  disabled : false,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onFocus: () => {},
  onBlur: () => {},

};


export default Button;
