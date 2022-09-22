import React from 'react'
import AOS from "aos";
import { aosConfig, aosFadeUpLeft } from '../../constants';
AOS.init(aosConfig);
const Contact = (props) => {
  const { linkArr } = props
  return (
    <div className='Contact' ref={linkArr[3].ref}>
      <h1 className='title' {...aosFadeUpLeft}>
        <span className='link-number'>{linkArr[3].number}</span>{linkArr[3].to}</h1>
    </div>
  )
}

export default Contact
