import React from 'react'

const NavLink = (props) => {
  const { number, text, handleClick } = props
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }
  return (
    <div className='link-warp flex'>
      <div className='link-number'>{number}</div>
      <div className='link-to' onClick={handleClick} onKeyDown={handleKeyDown} role='button' tabIndex={0}>{text}</div>
    </div>
  )
}

export default NavLink
