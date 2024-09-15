import React from 'react'
import PropTypes from 'prop-types'

const DividedCardContainer = ({children}) => {

  const cardHeadingElement = React.Children.toArray(children).find(
    (child) => child.type.displayName === 'CardHeading'
  )

  const cardContentElement = React.Children.toArray(children).find(
    (child) => child.type.displayName === 'CardContent'
  )

  const cardFooterElement = React.Children.toArray(children).find(
    (child) => child.type.displayName === 'CardFooter'
  )

  return (
  <div className="flex flex-col w-[400px] h-[220px] py-4  bg-default text-white rounded-2xl shadow-lg">
    {/* Profile section */}
    <div className="flex items-center border-b border-gray-600 px-4 pb-4 ">
      {/* Profile Image */}
      {cardHeadingElement}
    </div>

    {/* Description */}
    <div className="mt-4 px-4 text-gray-300 font-semibold h-full overflow-scroll">
      {cardContentElement}
    </div>

    {/* Link Section */}
    <div className="mt-4 border-t border-gray-600 pt-4 px-4">
      {cardFooterElement}
    </div>
  </div>
  )
}

DividedCardContainer.propTypes = {
  children: PropTypes.node
}



export default DividedCardContainer
