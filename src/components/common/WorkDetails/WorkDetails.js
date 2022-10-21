import React from 'react'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import cx from 'classnames'

const WorkDetails = (props) => {
  const { obj, visible } = props
  return (
    <div className={cx('experience-details', { visible: visible, 'no-visible': !visible })}>
      <div className='experience-header'>
        <div className='experience-title'>{obj.title}
          <span className='label'> @
            <a rel="noreferrer"
              target='_blank' href={obj.link}> {obj.label}</a>
          </span>
        </div>
        <div className='period'>{obj.date}</div>
      </div>
      <div className={cx('description-warp')}>
        {obj.description.map((item, idx) =>
          <div key={`description-${idx}`} className='description-row'>
            <PlayArrowOutlinedIcon viewBox='8 0 24 24' />
            <div className='description-text'>{item}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default WorkDetails
