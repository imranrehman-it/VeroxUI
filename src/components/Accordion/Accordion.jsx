import React from 'react';
import PropTypes from 'prop-types';
import AccordionItem from './AccordionItem';

// Function to validate CSS width/height values
const validCSSValue = (props, propName, componentName) => {
  const value = props[propName];
  const validUnits = [
    'px', 'rem', 'em', 'vw', 'vh', '%', 'auto',
    'fit-content', 'min-content', 'max-content',
    'inherit', 'initial', 'unset'
  ];

  if (typeof value === 'string') {
    const isValidUnit = validUnits.some(unit => value.endsWith(unit));
    const isAutoOrOtherValue = validUnits.includes(value);
    if (!isValidUnit && !isAutoOrOtherValue) {
      return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\ with value: ${value}. Value should be a valid CSS unit (e.g., '100px', '50%', 'auto').`);
    }
  } else {
    return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Value should be a string.`);
  }
};

// Accordion component
const Accordion = ({ children, width, height }) => {
  // Check if all children are of type AccordionItem
  const childrenLength = React.Children.count(children);
  let count = 1;
  const validChildren = React.Children?.map(children, (child) => {
    if (child.type !== AccordionItem) {
      throw new Error("Only AccordionItem components are allowed inside Accordion");
    }
    if(count === childrenLength) {
      return React.cloneElement(child, { border: false });
    }
    else{
      count++;
      return child;
    }
  });

  return (
    <div className={`w-full h-fit border-2 rounded-lg px-2 py-4 shadow-sm mt-8`} style={{ borderColor: 'hsla(240,4%, 15%, 1)', width, height }}>
      <div className='max-w-full py-4 px-4 w-full h-full overflow-scroll flex flex-col'>
        {validChildren}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  width: validCSSValue,
  height: validCSSValue,
};

Accordion.defaultProps = {
  width: '100%',
  height: 'auto',
};

export default Accordion;
