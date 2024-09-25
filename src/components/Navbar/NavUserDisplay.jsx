import React from 'react'
import PropTypes from 'prop-types'

const NavUserDisplay = () => {
  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <img src="https://picsum.photos/200/300" alt="user" className="w-8 h-8 rounded-full"/>
        <div className='flex flex-col'>
          <div className="text-sm">John Doe</div>
          <div className="text-xs text-red-400"></div>
        </div>
      </div>
    </div>
  )
}

NavUserDisplay.displayName = 'NavUserDisplay'

NavUserDisplay.propTypes = {
}

NavUserDisplay.defaultProps = {
}

export default NavUserDisplay
