import React from 'react'

const ProjectTile = ({ name, type, tags = [], link, pic }) => {
  return (
    <a className='ProjectTile' href={link} target='_blank' rel='noreferrer'>
      <div className='tile-img'>
        <img src={pic} alt={`${name} website`} loading='lazy' decoding='async' />
      </div>
      <div className='tile-body'>
        <span className='tile-name'>{name}</span>
        <span className='tile-meta'>{[type, tags[0]].filter(Boolean).join(' · ')}</span>
      </div>
    </a>
  )
}

export default ProjectTile
