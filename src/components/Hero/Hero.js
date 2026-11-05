import React from 'react'
import { hero, WHATSAPP_URL } from '../../constants'
import MyBtn from '../common/MyBtn'

const Hero = ({ onSeeWork }) => {
  return (
    <section className='Hero'>
      <p className='hero-eyebrow'>{hero.eyebrow}</p>
      <h1 className='hero-headline'>{hero.headline}</h1>
      <p className='hero-subline'>{hero.subline}</p>
      <div className='hero-ctas'>
        <MyBtn text='Book a call' link={WHATSAPP_URL} primary />
        <MyBtn text='See my work' onClick={onSeeWork} />
      </div>
      {hero.availability &&
        <p className='hero-availability'><span className='dot' />{hero.availability}</p>}
    </section>
  )
}

export default Hero
