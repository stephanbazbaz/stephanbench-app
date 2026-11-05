import React, { forwardRef } from 'react'
import MYIMG from '../../assets/pics/1641275635181.jpeg'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import {
  aboutText,
  platformsArr,
  underTheHoodArr,
} from '../../constants';
import SectionTitle from '../common/SectionTitle/SectionTitle';

const About = forwardRef((props, ref) => {
  return (
    <div className='About' id='about' ref={ref}>
      <SectionTitle to='About' />
      <div className='about-row'>
        <div className='about-text-warp'>
          <p className='about-text'>{aboutText}</p>
          <div className='tech-warp flex'>
            {platformsArr.map((item) =>
              <div className='flex tech-col' key={item}>
                <PlayArrowOutlinedIcon />
                <span>{item}</span>
              </div>)}
          </div>
          <p className='under-the-hood'>
            Under the hood: {underTheHoodArr.join(' · ')}
          </p>
        </div>
        <div className='img-warp'>
          <div className='pic-backdrop'>
            <img alt='Stephan Benchemoul, web developer' className='my-pic' src={MYIMG} loading='lazy' decoding='async' />
          </div>
          <div className='square'></div>
        </div>
      </div>
    </div>
  )
})

export default About
