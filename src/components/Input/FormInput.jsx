import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ label, placeholder, type, required, onChange, value, id, variant }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(inputValue !== '');
  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  const inputStyle = variant === 'outlined' ? 'border-2 bg-transparent border-default hover:border-color-white' :
                   variant === 'ghost' ? 'border-b-2 border-default bg-transparent rounded-none px-1' :
                   'border-0 bg-default'; // Removed the extra colon






  const labelStyle = `${isFocused || inputValue
  ? 'transform -translate-y-2 text-[0.75rem] font-semibold'
  : 'text-gray-400'} ${variant === 'ghost' && isFocused
  ? '-translate-x-2'
  : '-translate-x-[0px]'}`;

    return (
      <div className={`flex justify-center items-start relative w-full my-4 pb-[0.375rem] pt-[0.5rem] px-3 rounded-lg antialiased ${inputStyle}`} style={{ borderColor: isFocused ? 'white' : 'hsl(240, 4%, 15%)', color: isFocused ? 'white' : 'text-gray-400'   }}>
         <label
          htmlFor={id}
          className={`absolute left-3 top-3  bg-transparent text-md transition-all duration-300 ease-in-out hover:pointer-cursor ${labelStyle}`}
        >
          {label}
        </label>
        <input
          id={id}
          type={type}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          required={required}
          className="w-full bg-transparent text-md rounded-md pt-2 focus:outline-none focus:border-0 transition-colors duration-300 font-normal"
        />
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
  variant: PropTypes.oneOf(['default', 'outlined', 'ghost', ]),
};

FormInput.defaultProps = {
  type: 'text',
  placeholder: '',
  required: false,
  value: '',
  variant: 'default',
};

export default FormInput;
