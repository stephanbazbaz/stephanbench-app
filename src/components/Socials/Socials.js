import React from 'react'
import { socialsArr } from './constants'
const Socials = () => {
  return (
    <div className='Socials'>
      <div className='logo-row'>
        {socialsArr.map((item, idx) =>
          <div key={idx} className='logo-col' >
            {<a target='_blank' rel="noreferrer" href={item.href}><item.src className='svg-icon' /></a>}
          </div>)}
        <div className='dVLQAC'></div>
      </div>
      <div className='mail-to'>
        <div>
          <a arget='_blank' rel="noreferrer" href='mailto:stephanbncml@gmail.com'>stephanbncml@gmail.com</a>
        </div>
        <div className='dVLQAC'></div>
      </div>
    </div>
  )
}

export default Socials
