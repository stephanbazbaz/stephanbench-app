import React from 'react'
import { Projects, aosFadeUpUp, Articles } from '../../constants';
import ProjectCard from '../common/ProjectCard/ProjectCard';
import SectionTitle from '../common/SectionTitle/SectionTitle';
import ArticleIcon from '@mui/icons-material/Article';
import LaunchIcon from '@mui/icons-material/Launch';
const Work = (props) => {
  const { linkArr } = props
  const goToLink = (link) => {
    window.open(link, '_blank');
  }
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
            pic={item.pic}
            title={item.title}
            text={item.text}
            link={item.link}
            linkText={item.linkText}
            tech={item.tech}
          />
          <div className='bottom-line' {...aosFadeUpUp}></div>
        </div>
      )}
      <h1 className='article-title'>Music & Web</h1>
      <div className='articles-warp'>
        {Articles.map((article, idx) =>
          <div key={`ArticleCard-${idx}`} className='article-card' onClick={() => goToLink(article.link)}>
            <div className='flex card-top'>
              <a
                target='_blank'
                rel="noreferrer"
                href={article.link}>
                <ArticleIcon />
              </a>
              <a
                target='_blank'
                rel="noreferrer"
                href={article.link}>
                <LaunchIcon />
              </a>
            </div>
            <div className='article-main-warp flex-col'>
              <div className='article-main'>
                <div className='article-header'>{article.title}</div>
                <div className='article-exp'>{article.text}</div>
              </div>
              <div className='soft-warp'>
                {article.tech.map((item, idx) =>
                  <div key={idx}>{item}</div>)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Work
