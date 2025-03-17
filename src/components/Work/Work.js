import React from 'react'
import { Projects, aosFadeUpUp } from '../../constants';
import ProjectCard from '../common/ProjectCard';
import SectionTitle from '../common/SectionTitle';
const Work = (props) => {
  const { linkArr } = props
  return (
    <div ref={linkArr[0].ref} className='Work' {...aosFadeUpUp}>
      <SectionTitle
        // number={linkArr[2].number}
        to='Work'
      />
      {Projects.map((item, idx) =>
        <div key={`ProjectCard-${idx}`} className='card-container'>
          <ProjectCard
            idx={idx}
            {...item}
          />
          <div className='bottom-line' ></div>
        </div>
      )}
    </div>
  )
}

export default Work
