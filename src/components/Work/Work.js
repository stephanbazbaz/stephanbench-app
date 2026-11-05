import React, { forwardRef } from 'react'
import { Projects } from '../../constants';
import ProjectCard from '../common/ProjectCard';
import ProjectTile from '../common/ProjectTile';
import SectionTitle from '../common/SectionTitle';

const featured = Projects.filter(p => p.featured)
const more = Projects.filter(p => !p.featured)

const Work = forwardRef((props, ref) => {
  return (
    <div ref={ref} id='work' className='Work'>
      <SectionTitle to='Selected work' />
      {featured.map((item, idx) =>
        <div key={item.name} className='card-container'>
          <ProjectCard idx={idx} {...item} />
          <div className='bottom-line'></div>
        </div>
      )}
      {more.length > 0 &&
        <div className='more-work'>
          <h3 className='more-work-title'>More work</h3>
          <div className='more-work-grid'>
            {more.map(item => <ProjectTile key={item.name} {...item} />)}
          </div>
        </div>}
    </div>
  )
})

export default Work
