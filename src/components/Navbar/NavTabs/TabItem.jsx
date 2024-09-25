import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

const TabItem = ({sectionTitle, onClick, isActive, children }) => {
  const [active, setActive] = useState(isActive)

  useEffect(() => {
    setActive(isActive)
  }
  , [isActive])

  const isActiveClass = active ? 'text-base' : 'text-gray-400 box-shadow-'

  return (
    <div className={`cursor-pointer transition-colors duration-200 ${isActiveClass}`}
    onClick={onClick}
    >
      {children || sectionTitle}
    </div>
  )
}

TabItem.displayName = 'TabItem'

TabItem.propTypes = {
  sectionTitle: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  children: PropTypes.node
}

TabItem.defaultProps = {
  sectionTitle: 'Tab',
  onClick: () => {},
  isActive: false,
  children: null
}

export default TabItem
