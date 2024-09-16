import React from 'react'
import PropTypes from 'prop-types'

const CardHeading = ({ title, subtitle, icon, divider, children }) => {
  const dividerClass = divider ? 'border-b border-gray-600 pb-2 mb-2' : '';

  return (
    <div>
      {children ? (
        // Render children if they exist
        <div className={dividerClass}>{children}</div>
      ) : (
        // Default content when children are not provided
        <div className={`flex items-center ${dividerClass}`}>
          {icon && (
            <img
              src={icon}  // Image source passed as a prop
              alt="Icon"
              className="w-12 h-12 rounded-lg border border-gray-600 mr-4"
            />
          )}
          <div>
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="text-gray-400 text-sm">{subtitle}</p>
          </div>
        </div>
      )}
    </div>
  );
}

CardHeading.displayName = 'CardHeading'

CardHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  divider: PropTypes.bool,
  icon: PropTypes.string,
  children: PropTypes.node
}

CardHeading.defaultProps = {
  title: 'Title',
  subtitle: '@verox-ui',
  divider: false,
  icon: null,
}

export default CardHeading;
