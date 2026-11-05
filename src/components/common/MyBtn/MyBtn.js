import React from 'react'
import cx from 'classnames'

const MyBtn = (props) => {
  const { link, text, primary = false, onClick } = props
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    }
  }
  return (
    <div className={cx('resume-btn', { 'btn-primary': primary })}>
      <a
        target={onClick ? undefined : '_blank'}
        rel="noopener noreferrer"
        href={link || '#'}
        onClick={handleClick}
      >{text}
      </a>
    </div>
  )
}

export default MyBtn
