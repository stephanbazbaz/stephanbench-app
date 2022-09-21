import React, { useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import VerticalTabs from '../common/VerticalTabs'
import { aosConfig, loremIpsum } from '../../constants';
AOS.init(aosConfig);
const Experience = (props) => {
  const { linkArr } = props
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const arr = [
    {
      label: 'Freelance',
      description: loremIpsum,
      title: 'Web Developer'
    },
    {
      label: 'PWM',
      description: loremIpsum,
      title: 'Full stack'
    },
    {
      label: 'Moveo Group',
      description: loremIpsum,
      title: 'Design System'
    },

  ]
  return (
    <div className='Experience' ref={linkArr[1].ref}>
      <h1 className='title' data-aos="fade-up-left"
        data-aos-anchor-placement="top-center">
        <span className='link-number'>{linkArr[1].number}</span>{linkArr[1].to}</h1>
      <div>
        <p data-aos="fade-up-right"
          data-aos-anchor-placement="top-center"
          className='experience-text'>{loremIpsum}
        </p>
        <div className='flex'>
          <VerticalTabs handleChange={handleChange} value={value} list={arr} />
          <div>
            <div>{arr[value].title}</div>
            <div>
              {arr[value].description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
