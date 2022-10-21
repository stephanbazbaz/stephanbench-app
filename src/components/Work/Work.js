import React from 'react'
import { Projects, aosFadeUpUp, Articles } from '../../constants';
import ProjectCard from '../common/ProjectCard';
import SectionTitle from '../common/SectionTitle';
import ArticleCard from '../common/ArticleCard';

const Work = (props) => {
  const { linkArr } = props
  return (
    <div ref={linkArr[2].ref} className='Work' >
      <SectionTitle
        number={linkArr[2].number}
        to='Some Things I’ve Built'
        fadeConfig={aosFadeUpUp} />
      {Projects.map((item, idx) =>
        <div key={`ProjectCard-${idx}`} className='card-container'>
          <ProjectCard
            idx={idx}
            {...item}
          />
          <div className='bottom-line' {...aosFadeUpUp}></div>
        </div>
      )}
      <div {...aosFadeUpUp}>
        <h1 className='article-title'>Music & Web</h1>
        <div className='articles-warp'>
          {Articles.map((article, idx) =>
            <div id={`article-card-${idx}`} key={`article-card-${idx}`} style={{ scrollSnapAlign: 'start' }}>
              <ArticleCard
                {...article}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Work
