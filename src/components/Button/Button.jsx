import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  size = 'xs',
  color = 'blue',
  rounded = 'lg',
  variant = 'solid', // default variant is solid
  borderType = 'solid', // used for outline variant
  disabled = false,
  text = 'Button',
  onClick,

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
                        `${colorClass} ${textColorClass}`

  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90';


  return (
    <button onClick={onClick} className={`font-medium px-4 py-2 w-fit h-fit ${roundedClass} ${sizeClass} ${variantClass} ${disabledClass}`}>
      {text}
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
  onClick: () => {alert('Button clicked!')},
};

export default Button;
