import React from 'react'
import {
  socialsArr
} from '../../constants';
import MyBtn from '../common/MyBtn';
import SectionTitle from '../common/SectionTitle';
import Footer from '../Footer';

const Contact = (props) => {
  const { linkArr } = props
  const contactText = "Drop an email or WhatsApp and i'll get back to you"
  return (
    <div className='Contact' ref={linkArr[2].ref}>
      <div
        className='top-row'
      >
        <SectionTitle
          to={"Contact"}
        />
        <div >
          <p>{contactText}</p>
          <div className='contact-btns'>
 <MyBtn text='Email' link={socialsArr[3].href} />
           <MyBtn text='WhatsApp' link={"https://wa.me/+972544522614"} />
          </div>
         
        </div>
       
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact
