import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import LaunchIcon from '@mui/icons-material/Launch';
import './ArticleCard.scss'

const ArticleCard = (props) => {
  const { link = '', title = '', text = '' } = props
  return (
    <div className='article-card' >
      <div className='flex card-top'>
        <a
          target='_blank'
          rel="noreferrer"
          href={link}>
          <ArticleIcon />
        </a>
        <a
          target='_blank'
          rel="noreferrer"
          href={link}>
          <LaunchIcon />
        </a>
      </div>
      <div className='article-main-warp flex-col'>
        <div className='article-main'>
          <div className='article-header'>{title}</div>
          <div className='article-exp'>{text}</div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
