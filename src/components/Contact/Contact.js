import React from 'react'
import AOS from "aos";
import { aosConfig } from '../../constants';
AOS.init(aosConfig);
const Contact = (props) => {
  const { myRef } = props
  return (
    <div className='Contact' ref={myRef}>
      <h1 className='title' data-aos="fade-up-left"
        data-aos-anchor-placement="top-center">
        <span className='link-number'>04.</span>Contact</h1>
    </div>
  )
}

export default Contact
