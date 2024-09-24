import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ placeholder, variant, onEnter, iconPosition,  onChange, width, height, styles}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    onChange && onChange(searchValue);
  }, [searchValue]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e) => setSearchValue(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onEnter && onEnter(searchValue);
    }
  }

  // Styling logic for different variants
  const inputStyle = variant === 'outlined'
    ? 'border-2 bg-transparent border-default hover:border-white'
    : variant === 'ghost'
    ? 'border-b-2 border-default bg-transparent rounded-none px-1'
    : 'border-0 bg-default';

  const containerStyle = `${inputStyle} flex flex-row w-full py-3 px-4 rounded-lg items-center gap-2 transition-colors duration-300`;

  return (
    <div
      className={`${containerStyle} ${isFocused ? 'border-white' : 'border-default'}`}
      style={{
        borderColor: isFocused ? 'white' : 'hsl(240, 4%, 15%)' , width: width, height: height, ...styles
      }}
    >
      {iconPosition === 'none' ? null : (
         <svg
         className={`fill-slate-200 w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-white' : 'text-gray-400'} ${iconPosition === 'left' ? 'order-first' : 'order-last'}`}
         viewBox="64 64 896 896"
         focusable="false"
         xmlns="http://www.w3.org/2000/svg"
       >
         <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
       </svg>
      )}

      <input
        type="text"
        value={searchValue}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className={`w-full bg-transparent text-md focus:outline-none transition-colors duration-300 font-normal
        ${isFocused ? 'text-white' : 'text-gray-400'}`}
        style={{
          color: isFocused ? 'white' : 'text-gray-400',
        }}
        onKeyDownCapture={handleKeyDown}
      />
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'outlined', 'ghost']), // Added variant prop validation
  onEnter: PropTypes.func,
  iconPosition: PropTypes.oneOf(['left', 'right', 'none']),
  onChange: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
};

Search.defaultProps = {
  placeholder: 'Search',
  variant: 'default', // Default variant if none is passed
  onEnter: undefined,
  iconPosition: 'left',
  width: '100%',
  height: '3rem',
  onChange: ()=>{console.log('Search value changed. Pass a function to argument onChange prop to handle the change or remove the prop')},
};

export default Search;
