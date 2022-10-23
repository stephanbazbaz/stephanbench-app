import React from 'react'
import {
  aosFadeUpUp, socialsArr
} from '../../constants';
import MyBtn from '../common/MyBtn';
import SectionTitle from '../common/SectionTitle';
import Footer from '../Footer';

const Contact = (props) => {
  const { linkArr } = props
  const contactText = 'I’m always looking for any new opportunities so feel free to email me,\n\rWhether you have a question or just want to say hi\n\rand I’ll get back to you shortly :)'
  return (
    <div className='Contact' ref={linkArr[3].ref}>
      <div
        className='top-row'
        {...aosFadeUpUp}
      >
        <SectionTitle
          number={linkArr[3].number}
          to={"what's next ?"}
        />
        <h1 className='get-in-t'>Get In Touch</h1>
        <div >
          <p>{contactText}</p>
          <MyBtn text='Say Hello' link={socialsArr[3].href} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact
