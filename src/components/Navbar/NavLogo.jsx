import React from "react";
import PropTypes from "prop-types";
import {ReactComponent as Logo} from '../../../assets/logo.svg'


const NavLogo = ({logo, title}) => {
  return (
    <div className='flex flex-row gap-6 items-center align-middle'>
    <div className='flex flex-row gap-2 items-center align-middle'>
      {
        React.cloneElement(logo, {width: '2rem', height: '2rem'})
      }
      <div className="text-3xl font">{title}</div>
    </div>
  </div>
  )
}

NavLogo.displayName = 'LogoItem'

NavLogo.propTypes = {
  logo: PropTypes.element,
  title: PropTypes.string
}

NavLogo.defaultProps = {
  logo: <Logo/>,
  title: 'Verox UI'
}
export default NavLogo
