import React from 'react'
import MYIMG from '../../assets/pics/1641275635181.jpeg'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import {
  aboutText,
  technologiesArr,
} from '../../constants';
import SectionTitle from '../common/SectionTitle/SectionTitle';
const About = (props) => {
  const { linkArr } = props
  return (
    <div className='About' ref={linkArr[1].ref}>
      <SectionTitle
        to={'About'}
      />
      <div className='about-row' >
        <div className='about-text-warp'>
          <p className='about-text' >{aboutText} <br />
          </p>
          <div className='tech-warp flex'>
            {technologiesArr.map((item, idx) =>
              <div className='flex tech-col' key={`tech-${idx}`}>
                <PlayArrowOutlinedIcon />
                <span>{item}</span>
              </div>)}
          </div>
        </div>
        <div className='img-warp'>
          <img alt='stephan benchemoul web developer' className='my-pic' src={MYIMG} loading='lazy' decoding='async' />
          <div className='square'></div>
        </div>
      </div>
    </div>
  )
}

export default About
