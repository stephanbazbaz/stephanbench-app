import React from 'react'
import './SectionTitle.scss'
const SectionTitle = (props) => {
  const { number, to, fadeConfig } = props
  return (
    <div className='title flex' {...fadeConfig} >
      <div className='flex'>
        <span className='link-number'>{number}</span>
        <h1>{to}</h1>
      </div>
      <div className='line'></div>
    </div>
  )
}

export default SectionTitle
