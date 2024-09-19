import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ label, placeholder, type, required, onChange, value, id, variant }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');






  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(inputValue !== '');
  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange && onChange(newValue);
  };

  const inputStyle = variant === 'outlined' ? 'border-2 bg-transparent border-default hover:border-white' :
                   variant === 'ghost' ? 'border-b-2 border-default bg-transparent rounded-none px-1' :
                   'border-0 bg-default';

  const labelStyle = `${isFocused || inputValue
    ? 'transform -translate-y-[0.6rem] text-[0.75rem] font-semibold'
    : 'text-gray-400'} ${variant === 'ghost' && isFocused
    ? '-translate-x-2'
    : '-translate-x-[0px]'}`;

  return (
    <div className={`flex justify-center items-start relative w-full my-4 pb-[0.375rem] pt-[0.5rem] px-3 rounded-lg antialiased ${inputStyle}`}
      style={{ borderColor: isFocused ? 'white' : 'hsl(240, 4%, 15%)', color: isFocused ? 'white' : 'text-gray-400' }}>

      {/* Label */}
      <label
        htmlFor={id}
        className={`absolute left-3 top-3 bg-transparent text-md transition-all duration-200 ease-in-out cursor-pointer ${labelStyle}`}
      >
        {label}
      </label>

      {/* Input */}
      <input
        autoComplete="new-password"
        id={id}
        type={type}
        value={inputValue}  // Use the state-managed value
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

      {/* Autofill style override */}
      <style>
        {`
          :-webkit-autofill {
            -webkit-text-fill-color: white;
            -webkit-box-shadow: 0 0 0px 1000px hsl(240, 4%, 15%) inset;
            transition: background-color 5000s ease-in-out 0s;
          }
        `}
      </style>
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
};

FormInput.defaultProps = {
  type: 'text',
  placeholder: '',
  required: false,
  value: '',
  variant: 'default',
};

export default FormInput;
