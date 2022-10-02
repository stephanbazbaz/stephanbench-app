import React from 'react'
import './MyBtn.scss'

const MyBtn = (props) => {
  const { link, text } = props
  return (
    <div className='resume-btn'>
      <a target='_blank'
        rel="noopener noreferrer"
        href={link}
      >{text}
      </a>
    </div>
  )
}

export default MyBtn
