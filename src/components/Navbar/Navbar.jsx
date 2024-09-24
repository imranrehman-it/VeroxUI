import React from 'react'
import PropTypes from 'prop-types'
import {ReactComponent as Logo} from '../../../assets/logo.svg'
import Search from '../Input/Search'



const Navbar = () => {
  return (
    <div className="flex justify-between items-center top-0 w-full h-16 border-default bg-black border-b-2 text-white fixed z-50 px-[12rem]">
        <div className='flex flex-row gap-6 items-center align-middle'>
          <div className='flex flex-row gap-2 items-center align-middle'>
            <Logo className="w-8 h-8"/>
            <div className="text-3xl font">Verox UI</div>
          </div>
        </div>
        <div className='flex flex-row gap-6 items-center align-middle'>
          <div className="text-base transition-colors duration-200 hover:text-gray-400">Home</div>
          <div className="text-base transition-colors duration-200 hover:text-gray-400">Docs</div>
          <div className="text-base transition-colors duration-200 hover:text-gray-400">Components</div>
          <div className="text-base transition-colors duration-200 hover:text-gray-400">Github</div>
        </div>
        <div className="flex gap-4 py-4">


          <Search placeholder="Search" variant="outlined" height='2.5rem' styles={{}}/>
        </div>
    </div>
  )
}

Navbar.displayName = 'Navbar'

Navbar.propTypes = {
}

export default Navbar
