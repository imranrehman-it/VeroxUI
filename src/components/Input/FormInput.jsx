import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  label,
  placeholder,
  type,
  required,
  onChange,
  value,
  id,
  variant,
  static: isStatic, // Renamed static to isStatic to avoid conflict with JS reserved words
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange && onChange(newValue);
  };

  const inputStyle = variant === 'outlined'
    ? 'border-2 bg-transparent border-default hover:border-white'
    : variant === 'ghost'
    ? 'border-b-2 border-default bg-transparent rounded-none px-1'
    : 'border-0 bg-default';

  // Handle label style based on `isStatic` prop
  const labelStyle = isStatic
    ? `transform -translate-y-[0.6rem] text-[0.75rem] font-semibold text-gray-400 ${isFocused ? 'text-white' : 'text-gray-400'}`
    : `${isFocused || inputValue
        ? 'transform -translate-y-[0.6rem] text-[0.75rem] font-semibold'
        : 'text-gray-400'} ${variant === 'ghost' && isFocused
        ? ''
        : '-translate-x-[0px]'}`;

  return (
    <div
      className={`flex justify-center items-start relative w-full my-4 pb-[0.375rem] pt-[0.5rem] px-3 rounded-lg antialiased ${inputStyle}`}
      style={{ borderColor: isFocused ? 'white' : 'hsl(240, 4%, 15%)', color: isFocused ? 'white' : 'text-gray-400' }}
    >
      <label
        htmlFor={id}
        className={`absolute left-3 top-3 bg-transparent text-md transition-all duration-200 ease-in-out cursor-pointer ${labelStyle}`}
      >
        {label}
      </label>
      <div className="flex flex-row w-full">
        <input
          autoComplete="new-password"
          id={id}
          type={type}
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          required={required}
          className="w-full bg-transparent text-md rounded-md pt-2 focus:outline-none transition-colors duration-300 font-normal"
          style={{
            color: isFocused ? 'white' : 'text-gray-400',
            borderColor: isFocused ? 'white' : 'hsl(240, 4%, 15%)',
          }}
        />
      </div>
    </div>
  );
};

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'number']),
  required: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'outlined', 'ghost']),
  static: PropTypes.bool, // Add static prop type
};

FormInput.defaultProps = {
  type: 'text',
  placeholder: '',
  required: false,
  value: '',
  variant: 'default',
  static: false, // Default to false for dynamic behavior
};

export default FormInput;
