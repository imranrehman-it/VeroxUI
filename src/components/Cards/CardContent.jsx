import React from 'react'
import PropType from 'prop-types'

const CardContent = ({children, style}) => {
  return (
    <div className="w-full overflow-scroll items-center" style={style}>
      {children}
    </div>
  )
}

CardContent.propTypes = {
  children: PropType.node,
  style: PropType.object
}

const exampleDiv =
<div className="w-full">
  <p>@verox-ui sample card component</p>
</div>
CardContent.defaultProps = {
  children: exampleDiv,
  style: {},
}

CardContent.displayName = 'CardContent'

export default CardContent
