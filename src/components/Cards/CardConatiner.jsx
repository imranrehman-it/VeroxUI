import React from 'react'
import PropTypes from 'prop-types'


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

const CardContainer = ({ children, width, height}) => {
  // Use unique variable names to avoid conflicts with the imported components
  const cardHeadingElement = React.Children.toArray(children).find(
    (child) => child.type.displayName === 'CardHeading'
  )

  const cardContentElement = React.Children.toArray(children).find(
    (child) => child.type.displayName === 'CardContent'
  )

  const cardFooterElement = React.Children.toArray(children).find(
    (child) => child.type.displayName === 'CardFooter'
  )



  return (
    <div className="flex flex-col justify-between p-4 bg-default text-white rounded-2xl shadow-lg"
          style={{width: width, height: height}}>
      <div className='flex flex-col h-full overflow-scroll'>
        {cardHeadingElement}
        <div className='mt-4'>
          {cardContentElement}
        </div>
      </div>
      {cardFooterElement}
    </div>
  )
}

CardContainer.propTypes = {
  children: PropTypes.node,
  width: validCSSValue,
  height: validCSSValue,
}

CardContainer.defaultProps = {
  width: '400px',
  height: '220px',
}




export default CardContainer
