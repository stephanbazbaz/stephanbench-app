import React from 'react'
import MYIMG from '../../assets/pics/1641275635181.jpeg'
import "aos/dist/aos.css";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import {
  techText,
  aboutText,
  technologiesArr,
  aosFadeUpLeft,
  aosFadeUpRight,
  aosFadeUpUp
} from '../../constants';
import SectionTitle from '../common/SectionTitle/SectionTitle';
const About = (props) => {
  const { linkArr } = props
  const left = window.innerWidth < 391 ? { ...aosFadeUpUp } : { ...aosFadeUpLeft }
  const right = window.innerWidth < 391 ? { ...aosFadeUpUp } : { ...aosFadeUpRight }
  return (
    <div className='About' ref={linkArr[0].ref} {...right}>
      <SectionTitle
        number={linkArr[0].number}
        to={linkArr[0].to}
        fadeConfig={left} />
      <div className='about-row' >
        <div className='about-text-warp'>
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
        <div className='img-warp'>
          <img alt='stephan benchemoul web developer' className='my-pic' src={MYIMG} />
          <div className='filter'></div>
          <div className='square'></div>
        </div>
      </div>
    </div>
  )
}

export default About
