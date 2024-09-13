// src/components/Card/Card.js
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

// Card component
const Card = ({ width, height, mode, children }) => {
  // Filter children based on component type
  const title = React.Children.toArray(children).find(child => child.type === CardTitle);
  const content = React.Children.toArray(children).find(child => child.type === CardContent);
  const footer = React.Children.toArray(children).find(child => child.type === CardFooter);

  // Apply dark mode styles conditionally
  const cardClass = mode === 'dark'
    ? 'bg-gray-800 text-white shadow-lg'
    : 'bg-white text-black shadow-md';


  return (
    <div
      className={`${cardClass} rounded-lg flex flex-col overflow-hidden`}
      style={{ width, height }}
    >
      <img
        src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
        alt="Placeholder"
        className="h-[45%] object-cover"
      />
      <div className="p-4 flex flex-col h-full justify-between">
        <div className="flex flex-col gap-2">
          {/* Pass mode prop to children */}
          {React.cloneElement(title, { mode })}
          {React.cloneElement(content, { mode })}
        </div>
        {footer && React.cloneElement(footer, { mode })}
      </div>
    </div>
  );
};

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  mode: PropTypes.oneOf(['light', 'dark']), // Add a mode prop for light/dark mode
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  width: '18rem',
  height: '24rem',
  mode: 'light', // Default to light mode
};

// Title component
const CardTitle = ({ children, mode }) => {
  const titleClass = mode === 'dark' ? 'text-white' : 'text-black';
  return <h1 className={`text-xl font-semibold ${titleClass}`}>{children}</h1>;
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.oneOf(['light', 'dark']),
};

// Content component
const CardContent = ({ children, mode }) => {
  const contentClass = mode === 'dark' ? 'text-gray-300' : 'text-gray-500';
  return <p className={`${contentClass}`}>{children}</p>;
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.oneOf(['light', 'dark']),
};

// Footer component
const CardFooter = ({ children, mode }) => {
  const footerClass = mode === 'dark' ? 'text-gray-200' : 'text-gray-700';
  return <div className={`flex justify-between items-center ${footerClass}`}>{children}</div>;
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.oneOf(['light', 'dark']),
};

// Export all components
export { CardTitle, CardContent, CardFooter };
export default Card;
