import React from 'react'
import PropType from 'prop-types'

const CardFooter = ({children}) => {
  return (
   <div>
      {children}
   </div>
  )
}

CardFooter.propTypes = {
  children: PropType.node
}

const exampleDiv =
<div>
  <a
        href="https://github.com"
        className="text-blue-400 flex items-center hover:underline"
      >
        Visit source code on GitHub.
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
    </a>
</div>

CardFooter.defaultProps = {
  children: exampleDiv
}

CardFooter.displayName = 'CardFooter'

export default CardFooter
