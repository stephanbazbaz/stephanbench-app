import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import cx from 'classnames'

const ProjectCard = (props) => {
  const {
    pic = '',
    title = '',
    link = '',
    idx = null,
    tech = []
  } = props
  const isEven = num => num % 2 === 0
  return (
    <div
      className={cx('ProjectCard flex', { left: !isEven(idx), right: isEven(idx) })}
    >
      <div className='image-display'>
        <a target='_blank' rel="noreferrer" href={link}>
          <div className='image-container' >
            <div className='image-warp'>
              <img alt={title} src={pic} loading='lazy' decoding='async' />
            </div>
            <div className='filter'></div>
          </div>
        </a>
      </div>
      <div className='section-txt'>
        <h3>{title}</h3>
        <div className='image-display-none'>
          <div className='image-container'>
            <div className='image-warp'>
              <img alt={title} src={pic} loading='lazy' decoding='async' />
            </div>
          </div>
        </div>
        <div className='tech-row'>
          {tech?.map((item, idx) => <div className='tech-col' key={`tech- ${idx}`}>{item}</div>)}
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
