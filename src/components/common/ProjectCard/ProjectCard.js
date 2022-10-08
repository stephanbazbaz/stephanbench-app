import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import './ProjectCard.scss'
import AOS from "aos"
import { aosConfig, aosFadeUpLeft, aosFadeUpRight, aosFadeUpUp } from '../../../constants';
import cx from 'classnames'

const ProjectCard = (props) => {
  const {
    pic = '',
    title = '',
    text = '',
    link = '',
    idx = null,
    tech = []
  } = props
  AOS.init(aosConfig);
  const isEven = num => num % 2 === 0
  const left = window.innerWidth < 376 ? { ...aosFadeUpUp } : { ...aosFadeUpLeft }
  const right = window.innerWidth < 376 ? { ...aosFadeUpUp } : { ...aosFadeUpRight }
  return (
    <div
      className={cx('ProjectCard flex', { left: isEven(idx), right: !isEven(idx) })}
    >
      <div className='image-container' {...left}>
        <div className='image-warp'>
          <img alt='studio_pic' src={pic} />
        </div>
        <div className='filter'></div>
      </div>
      <div className='section-txt' {...right}>
        <h5>Featured Project</h5>
        <h3>{title}</h3>
        <div className='txt'>
          <p>{text}</p>
        </div>
        <div className='tech-row'>
          {tech?.map((item, idx) => <div key={`tech- ${idx}`}>{item}</div>)}
        </div>
        <span
          className='label'>
          <a target='_blank' rel="noreferrer" href={link}><LaunchIcon /></a>
        </span>
      </div>
    </div>
  )
}

export default ProjectCard
