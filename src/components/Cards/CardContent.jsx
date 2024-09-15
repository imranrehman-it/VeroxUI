import React from 'react'
import PropType from 'prop-types'

const CardContent = ({children}) => {
  return (
    <div className="w-full overflow-scroll items-center">
      {children}
    </div>
  )
}

CardContent.propTypes = {
  children: PropType.node
}

const exampleDiv =
<div className="w-full">
  <p>@verox-ui sample card component</p>
</div>
CardContent.defaultProps = {
  children: exampleDiv
}

CardContent.displayName = 'CardContent'

export default CardContent
