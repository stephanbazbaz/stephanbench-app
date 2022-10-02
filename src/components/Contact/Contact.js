import React from 'react'
import AOS from "aos";
import { aosConfig, aosFadeUpLeft, aosFadeUpUp, socialsArr } from '../../constants';
import MyBtn from '../common/MyBtn/MyBtn';

AOS.init(aosConfig);
const Contact = (props) => {
  const { linkArr } = props
  const contactText = 'I’m always looking for any new opportunities so feel free to email me,\n\rWhether you have a question or just want to say hi\n\rand I’ll get back to you shortly :)'
  return (
    <div className='Contact' ref={linkArr[3].ref}>
      <h1 className='title' {...aosFadeUpLeft}>
        <span className='link-number'>{linkArr[3].number}</span>{linkArr[3].to}
      </h1>
      <div {...aosFadeUpUp}>
        <p>{contactText}</p>
        <MyBtn text='Say Hello' link={socialsArr[3].href} />
      </div>
    </div>
  )
}

export default Contact
