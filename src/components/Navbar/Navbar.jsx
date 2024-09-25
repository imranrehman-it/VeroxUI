import React from 'react'
import PropTypes from 'prop-types'
import {ReactComponent as Logo} from '../../../assets/logo.svg'
import { DiscordIcon, GithubIcon, NpmIcon, TwitterIcon, AppleIcon} from '../Icons/Icons'





const Navbar = ({children}) => {

  const [activeStates, setActiveStates] = React.useState([true, false, false, false])

  const handleTabClick = (index) => {
    const newActiveStates = activeStates.map((state, i) => {
      if(i === index){
        return true
      }
      return false
    })
    setActiveStates(newActiveStates)
  }



  return (
    <div className="flex items-center top-0 w-full h-14 border-default bg-black border-b-2 text-white fixed z-50 px-[20rem] justify-between">
      <div className='flex flex-row gap-6 items-center align-middle'>
        {React.Children.map(children, (child, index) => {
          if(index === 0 && child.type.displayName === 'LogoItem'){
            return child
          }
        })}
        {React.Children.map(children, (child, index) => {
          if(index === 1 && child.type.displayName === 'NavTabs'){
            return child
          }
        })}
      </div>
      <div className='flex flex-row gap-10 items-center'>
        <div className='flex flex-row gap-6 items-center align-middle'>
          <GithubIcon width={'18px'} height={'18px'}/>
          <NpmIcon width={'18px'} height={'18px'}/>
          <DiscordIcon width={'18px'} height={'18px'}/>
          <TwitterIcon width={'18px'} height={'18px'}/>
        </div>


       {React.Children.map(children, (child, index) => {
          if(index === 2 && child.type.displayName === 'LoginSection' || child.type.displayName === 'NavUserDisplay'){
            return child
          }
        })}
      </div>
    </div>
  )
}






Navbar.displayName = 'Navbar'

Navbar.propTypes = {
  children: PropTypes.node
}

export default Navbar
