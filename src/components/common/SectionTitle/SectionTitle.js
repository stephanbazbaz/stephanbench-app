import React from 'react'
const SectionTitle = (props) => {
  const { number = null, to } = props
  return (
    <div className='title flex'>
      <div className='flex'>
        <span className='link-number'>{number}</span>
        <h1>{to}</h1>
      </div>
      <div className='line'></div>
    </div>
  )
}

export default SectionTitle
