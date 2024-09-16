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

const DividedCardContainer = ({children, width, height}) => {

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
  <div className="flex flex-col py-4  bg-default text-white rounded-2xl shadow-lg"
      style={{width: width, height: height}}>
    {/* Profile section */}
    <div className="flex items-center border-b border-gray-600 px-4 pb-4 ">
      {/* Profile Image */}
      {cardHeadingElement}
    </div>

    {/* Description */}
    <div className="mt-4 px-4 text-gray-300 font-semibold h-full overflow-scroll">
      {cardContentElement}
    </div>

    {/* Link Section */}
    <div className="mt-4 border-t border-gray-600 pt-4 px-4">
      {cardFooterElement}
    </div>
  </div>
  )
}

DividedCardContainer.propTypes = {
  children: PropTypes.node,
  width: validCSSValue,
  height: validCSSValue,
}

DividedCardContainer.defaultProps = {
  width: '400px',
  height: '220px',
}



export default DividedCardContainer
