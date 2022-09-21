import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { aosConfig, loremIpsum } from '../../constants';
AOS.init(aosConfig);
const Experience = (props) => {
  const { myRef } = props
  return (
    <div className='Experience' ref={myRef}>
      <h1 className='title' data-aos="fade-up-left"
        data-aos-anchor-placement="top-center">
        <span className='link-number'>03.</span>Experience</h1>
      <div>
        <p data-aos="fade-up-right"
          data-aos-anchor-placement="top-center"
          className='experience-text'>{loremIpsum}
        </p>
      </div>
    </div>
  )
}

export default Experience
