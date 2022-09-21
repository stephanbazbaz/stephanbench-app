import React from 'react'
import AOS from "aos"
import { aosConfig } from '../../constants';
AOS.init(aosConfig);
const Work = (props) => {
  const { linkArr } = props
  return (
    <div ref={linkArr[2].ref} className='Work'>
      <h1 className='title' data-aos="fade-up-left"
        data-aos-anchor-placement="top-center">
        <span className='link-number'>{linkArr[2].number}</span>
        {linkArr[2].to}
      </h1>
    </div>
  )
}

export default Work
