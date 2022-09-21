import React from 'react'
import AOS from "aos"
import { aosConfig } from '../../constants';
AOS.init(aosConfig);
const Work = (props) => {
  const { myRef } = props
  return (
    <div ref={myRef} className='Work'>
      <h1 className='title' data-aos="fade-up-left"
        data-aos-anchor-placement="top-center">
        <span className='link-number'>04.</span>Work</h1>    </div>
  )
}

export default Work
