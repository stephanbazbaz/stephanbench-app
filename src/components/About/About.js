import React from 'react'
import MYIMG from '../../assets/pics/1641275635181.jpeg'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import {
  techText,
  aboutText,
  technologiesArr,
  aosFadeUpRight,
  aosFadeUpUp,
  mobileWidth
} from '../../constants';
import SectionTitle from '../common/SectionTitle/SectionTitle';
const About = (props) => {
  const { linkArr } = props
  const right = window.innerWidth < mobileWidth ? { ...aosFadeUpUp } : { ...aosFadeUpRight }
  return (
    <div className='About' ref={linkArr[1].ref} {...right}>
      <SectionTitle
        // number={linkArr[0].number}
        to={'About'}
      />
      <div className='about-row' >
        <div className='about-text-warp'>
          <p className='about-text' >{aboutText} <br />
          </p>
          {/*<p className='about-text'>{techText}</p>*/}
          <div className='tech-warp flex'>
            {technologiesArr.map((item, idx) =>
              <div className='flex tech-col' key={`tech-${idx}`}>
                <PlayArrowOutlinedIcon />
                <span>{item}</span>
              </div>)}
          </div>
        </div>
        <div className='img-warp'>
          <img alt='stephan benchemoul web developer' className='my-pic' src={MYIMG} />
          <div className='square'></div>
        </div>
      </div>
    </div>
  )
}

export default About
