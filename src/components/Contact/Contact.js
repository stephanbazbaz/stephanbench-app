import React from 'react'
import AOS from "aos";
import { aosConfig } from '../../constants';
AOS.init(aosConfig);
const Contact = (props) => {
  const { linkArr } = props
  return (
    <div className='Contact' ref={linkArr[3].ref}>
      <h1 className='title' data-aos="fade-up-left"
        data-aos-anchor-placement="top-center">
        <span className='link-number'>{linkArr[3].number}</span>{linkArr[3].to}</h1>
    </div>
  )
}

export default Contact
