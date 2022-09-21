import React from 'react'

const Home = (props) => {
  const { myRef } = props
  const aboutObj = {
    myNameIs: 'Hi, my name is',
    fullName: 'Stephan Benchemoul.',
    profession: "Web Developer & Sound Designer.",
    description: 'I build and design web applications using modern web technologies with a focus on responsiveness, accessibility and pleasing aesthetics .'
  }
  return (
    <div className='Home' ref={myRef}>
      <div className='my-name-is'>{aboutObj.myNameIs}</div>
      <h1 className='full-name'>{aboutObj.fullName}</h1>
      <h1 className='profession'>Web <span
        style={{
          color: '#64ffda'
        }}>Developer</span> &  Sound Designer.</h1>
      <div className='description'>{aboutObj.description}</div>
    </div>
  )
}

export default Home
