import React from 'react'
import MYIMG from '../../assets/pics/1641275635181.jpeg'
import AOS from "aos";
import "aos/dist/aos.css";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { aosConfig, aboutText, technologiesArr } from '../../constants';
AOS.init(aosConfig)
const About = (props) => {
  const { myRef } = props
  return (
    <div className='About' ref={myRef}>
      <h1 className='title' data-aos="fade-up-left"
        data-aos-anchor-placement="top-center">
        <span className='link-number'>01.</span>About me</h1>
      <div className='about-row'>
        <div className='about-text-warp' data-aos="fade-up-right"
          data-aos-anchor-placement="top-center">
          <p className='about-text' >{aboutText} <br />
          </p>
          <p className='about-text'> Here are a few technologies I’ve been working with recently:</p>
          <div className='tech-warp flex'>
            {technologiesArr.map((item, idx) => <div className='flex tech-col' key={`tech-${idx}`}><PlayArrowOutlinedIcon /><span>{item}</span></div>)}
            {/* <div>{technologiesArr.slice(3, 6).map((item, idx) => <div className='flex tech-col' key={`tech-${idx}`}><PlayArrowOutlinedIcon /><span>{item}</span></div>)}</div> */}
            {/* <div>{technologiesArr.slice(6).map((item, idx) => <div className='flex tech-col' key={`tech-${idx}`}><PlayArrowOutlinedIcon /><span>{item}</span></div>)}</div> */}
          </div>

        </div>

        <div className='img-warp'
          data-aos="fade-up-left"
          data-aos-anchor-placement="top-center"
        >
          <img alt='stephan benchemoul web developer' className='my-pic' src={MYIMG} />
          <div className='filter'></div>
          <div className='square'></div>
        </div>
      </div>
    </div>
  )
}

export default About
