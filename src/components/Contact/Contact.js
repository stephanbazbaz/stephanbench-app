import React, { forwardRef } from 'react'
import { MAILTO, WHATSAPP_URL } from '../../constants';
import MyBtn from '../common/MyBtn';
import SectionTitle from '../common/SectionTitle';
import Footer from '../Footer';

const Contact = forwardRef((props, ref) => {
  return (
    <div className='Contact' id='contact' ref={ref}>
      <div className='top-row'>
        <SectionTitle to='Contact' />
        <h3 className='contact-headline'>Have a store or site in mind?</h3>
        <p>Tell me about your business and what you need. I'll get back to you within 24 hours.</p>
        <div className='contact-btns'>
          <MyBtn text='WhatsApp me' link={WHATSAPP_URL} primary />
          <MyBtn text='Send an email' link={MAILTO} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
})

export default Contact
