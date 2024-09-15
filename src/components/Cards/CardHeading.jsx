import React from 'react'
import PropTypes from 'prop-types'

const CardHeading = ({title, subtitle, icon, divider}) => {
  const dividerClass = divider ? 'border-b border-gray-600' : ''
  return (
    <div className={`flex items-center ${dividerClass}`}>
         {icon && (
            <img
              src={icon}  // Your image path
              alt="Profile"
              className="w-12 h-12 rounded-lg border border-gray-600 mr-4"
            />
         )}
          <div className="">
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="text-gray-400 text-sm">{subtitle}</p>
          </div>
        </div>
  )
}


CardHeading.displayName = 'CardHeading'

CardHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  divider: PropTypes.bool
}

CardHeading.defaultProps = {
  title: 'Title',
  subtitle: '@verox-ui',
  divider: false
}

export default CardHeading