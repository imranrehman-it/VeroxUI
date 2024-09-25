import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

const NavAuth = ({ onClickLogin, onClickSignup, children }) => {  // Destructure props here
  return (
    <div>
      {children || (
        <div className="flex flex-row gap-2 items-center">
          <Button onClick={onClickLogin} variant="outlined">Login</Button>  {/* Remove the arrow function */}
          <Button onClick={onClickSignup}>Signup</Button>  {/* Remove the arrow function */}
        </div>
      )}
    </div>
  )
}

NavAuth.displayName = 'LoginSection'

NavAuth.propTypes = {
  onClickLogin: PropTypes.func,
  onClickSignup: PropTypes.func,
  children: PropTypes.node
}

NavAuth.defaultProps = {
  onClickLogin: () => {},
  onClickSignup: () => {},
  children: null
}

export default NavAuth
