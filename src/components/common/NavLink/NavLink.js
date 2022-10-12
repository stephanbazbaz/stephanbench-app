import React from 'react'
import './NavLink.scss'

const NavLink = (props) => {
  const { number, text, handleClick } = props
  return (
    <div className='link-warp flex'>
      <div className='link-number'>{number}</div>
      <div className='link-to' onClick={handleClick}>{text}</div>
    </div>
  )
}

export default NavLink
