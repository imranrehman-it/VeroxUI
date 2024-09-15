import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const AccordionItem = ({ title, children, description, border = true }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };

    const borderStyle = border ? 'border-b-2' : '';

    return (
      <div className={`py-4 px-2 hover:cursor-pointer transition-all duration-300 ${borderStyle}`}
           onClick={toggleOpen}
           style={{ borderColor: 'hsla(240,4%, 15%, 1)' }}
          >
        <div className='flex justify-between items-center'>
          <span className='text-lg text-white'>
            {title}
          </span>
          {/* Animated dropdown arrow */}
          <span className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
        <div
          ref={contentRef} // Attach the ref to the content container
          className={`overflow-hidden transition-[height] duration-300 ease-in-out`}
          style={{
            height: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px', // Dynamic height based on content
          }}
        >
         {/*if children exist, render children, else render description*/}
          {children || <p className='text-md text-white py-2 mt-4 transition-all ease-in-out  duration-300'
              style={{opacity: isOpen ? 1 : 0}}
          >{description}</p>}
        </div>
      </div>
    );
  }

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  description: PropTypes.string,
  border: PropTypes.bool
}

AccordionItem.defaultProps = {
  title: 'Title',
  children: null,
  description: null,
  border: true
}

export default AccordionItem
