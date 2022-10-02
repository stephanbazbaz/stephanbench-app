import React from 'react'
import AOS from "aos"
import { aosConfig, Projects, aosFadeUpUp } from '../../constants';
import ProjectCard from '../common/ProjectCard/ProjectCard';
AOS.init(aosConfig);
const Work = (props) => {
  const { linkArr } = props
  return (
    <div ref={linkArr[2].ref} className='Work' >
      <h1 className='title flex'  {...aosFadeUpUp}>
        <span className='link-number'>{linkArr[2].number}</span>
        Some Things I’ve Built
        <div className='line'></div>
      </h1>
      {Projects.map((item, idx) =>
        <div key={idx} className='card-container'>
          <ProjectCard
            idx={idx}
            pic={item.pic}
            title={item.title}
            text={item.text}
            link={item.link}
            linkText={item.linkText}
            tech={item.tech}
          />
        </div>
      )}

    </div>
  )
}

export default Work
