import React from 'react'
import MYIMG from '../../assets/pics/1641275635181.jpeg'
import AOS from "aos";
import "aos/dist/aos.css";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import {
  aosConfig,
  techText,
  aboutText,
  technologiesArr,
  aosFadeUpLeft,
  aosFadeUpRight
} from '../../constants';
AOS.init(aosConfig)
const About = (props) => {
  const { linkArr } = props
  return (
    <div className='About' ref={linkArr[0].ref}>
      <h1 className='title' {...aosFadeUpLeft}>
        <span className='link-number'>{linkArr[0].number}</span>
        {linkArr[0].to}
        <div className='line'></div>
      </h1>
      <div className='about-row'>
        <div className='about-text-warp' {...aosFadeUpRight}>
          <p className='about-text' >{aboutText} <br />
          </p>
          <p className='about-text'>{techText}</p>
          <div className='tech-warp flex'>
            {technologiesArr.map((item, idx) =>
              <div className='flex tech-col' key={`tech-${idx}`}>
                <PlayArrowOutlinedIcon />
                <span>{item}</span>
              </div>)}
          </div>
        </div>
        <div className='img-warp' {...aosFadeUpLeft}>
          <img alt='stephan benchemoul web developer' className='my-pic' src={MYIMG} />
          <div className='filter'></div>
          <div className='square'></div>
        </div>
      </div>
    </div >
  )
}

export default About
