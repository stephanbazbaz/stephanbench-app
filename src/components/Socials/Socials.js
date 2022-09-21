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
    </div>
  )
}

export default Socials
