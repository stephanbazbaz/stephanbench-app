import React from 'react'
import {
  socialsArr
} from '../../constants';
import MyBtn from '../common/MyBtn';
import SectionTitle from '../common/SectionTitle';
import Footer from '../Footer';

const Contact = (props) => {
  const { linkArr } = props
  const contactText = "Drop an email and i'll get back to you"
  return (
    <div className='Contact' ref={linkArr[2].ref}>
      <div
        className='top-row'
      >
        <SectionTitle
          to={"Contact"}
        />
        {/*<h1 className='get-in-t'>Get In Touch</h1>*/}
        <div >
          <p>{contactText}</p>
          <MyBtn text='Email' link={socialsArr[3].href} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact
