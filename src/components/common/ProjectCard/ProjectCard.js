import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import cx from 'classnames'

const ProjectCard = (props) => {
  const {
    pic = '',
    name = '',
    type = '',
    summary = '',
    link = '',
    idx = null,
    tags = []
  } = props
  const isEven = num => num % 2 === 0
  const alt = `${name} website${type ? ` – ${type}` : ''}`
  return (
    <div
      className={cx('ProjectCard', { left: !isEven(idx), right: isEven(idx) })}
    >
      <div className='image-display'>
        <a target='_blank' rel="noreferrer" href={link}>
          <div className='image-container' >
            <div className='image-warp'>
              <img alt={alt} src={pic} loading='lazy' decoding='async' />
            </div>
            <div className='filter'></div>
          </div>
        </a>
      </div>
      <div className='section-txt'>
        {type && <span className='project-type'>{type}</span>}
        <h3>{name}</h3>
        <div className='image-display-none'>
          <div className='image-container'>
            <div className='image-warp'>
              <img alt={alt} src={pic} loading='lazy' decoding='async' />
            </div>
          </div>
        </div>
        {summary && <p className='project-summary'>{summary}</p>}
        <div className='tech-row'>
          {tags.map(tag => <div className='tech-col' key={tag}>{tag}</div>)}
        </div>
        <span className='label'>
          <a target='_blank' rel="noreferrer" href={link} aria-label={`Visit ${name}`}><LaunchIcon /></a>
        </span>
      </div>
    </div>
  )
}

export default ProjectCard
