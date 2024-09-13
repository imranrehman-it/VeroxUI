import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

const RowCard = ({width, height, children}) => {

  const title = React.Children.toArray(children).find(child => child.type === CardRowTitle);
  const content = React.Children.toArray(children).find(child => child.type === CardRowContent);
  const footer = React.Children.toArray(children).find(child => child.type === CardRowFooter);

  return (
    <div className='flex flex-row rounded-md overflow-hidden shadow-lg bg-slate-50' style={{width: width, height: height}}>
      <img src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg" alt="Placeholder" className="w-[30%] h-full object-cover" />
      <div className="p-4 flex flex-col justify-between w-[70%]">
        <div className="flex flex-col gap-2">
          {React.cloneElement(title, {  })}
          {React.cloneElement(content, {  })}
        </div>
        {footer && React.cloneElement(footer, {  })}
      </div>
    </div>
  )
}

RowCard.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  mode: PropTypes.oneOf(['light', 'dark']),
  children: PropTypes.node.isRequired,
}

RowCard.defaultProps = {
  width: '40rem',
  height: '14rem',
}

const CardRowTitle = ({ children }) => {
  return <h1 className="text-xl font-semibold text-black">{children}</h1>
}

const CardRowContent = ({ children }) => {
  return <p className="text-gray-500">{children}</p>
}

const CardRowFooter = ({ children }) => {
  return <div className="flex justify-end">{children}</div>
}

CardRowTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

CardRowContent.propTypes = {
  children: PropTypes.node.isRequired,
}

CardRowFooter.propTypes = {
  children: PropTypes.node.isRequired,
}

export { CardRowTitle, CardRowContent, CardRowFooter }

export default RowCard
