import React from 'react'
import { Projects, aosFadeUpUp, Articles } from '../../constants';
import ProjectCard from '../common/ProjectCard';
import SectionTitle from '../common/SectionTitle';
import ArticleCard from '../common/ArticleCard';
// import Carousel from 'react-material-ui-carousel'

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
      <div {...aosFadeUpUp} style={{ height: '100vh' }}>
        <h1 className='article-title'>Music & Web</h1>
        <div className='articles-warp'>
          {/* {window.innerWidth < 769 ? <Carousel
            navButtonsWrapperProps={{ className: 'navi-btn-wrap' }}
            navButtonsProps={{ className: 'navi-btn' }}
            cycleNavigation={false}
            navButtonsAlwaysVisible={true}
            className='my-carousel'
            animation='slide'
            autoPlay={false}>
            {Articles.map((article, idx) =>
              <div
                key={`AeticletCard-${idx}`}>
                <ArticleCard
                  {...article}
                />
              </div>
            )}
          </Carousel> :
            <>
              {Articles.map((article, idx) =>
                <div
                  key={`AeticletCard-${idx}`}>
                  <ArticleCard
                    {...article}
                  />
                </div>
              )}
            </>} */}
          {Articles.map((article, idx) =>
            <div
              key={`AeticletCard-${idx}`}
              style={{ scrollSnapAlign: 'start' }}
            >
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
