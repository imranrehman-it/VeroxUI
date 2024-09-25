import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";


export const NavTabs = ({children}) => {
  return (
    <div className='flex flex-row gap-6 items-center align-middle'>
      {children.map((child, index)=>{
        if(child.type.displayName === 'TabItem'){
          return child
        }
      })}
    </div>
  )
}


NavTabs.displayName = 'NavTabs'

NavTabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default NavTabs

