import React, { useState } from 'react'
import RESUME from '../../assets/Stephan Benchemoul Resume.pdf'
const Header = (props) => {
  const { refObj } = props
  const linkArr = [
    {
      to: 'About',
      number: '01',
      ref: refObj.aboutRef
    },
    {
      to: 'Experience',
      number: '02',
      ref: refObj.experienceRef
    },
    {
      to: 'Work',
      number: '03',
      ref: refObj.workRef
    },
    {
      to: 'Contact',
      number: '04',
      ref: refObj.contactRef
    }]
  const scrollToHome = () => refObj.homeRef.current.scrollIntoView(false)
  const scrollToElement = ref => ref.current.scrollIntoView()
  const [state, setState] = useState({
    toggleNav: '',
    direction: 0,
    prevDirection: 0,
    prevScroll: window.scrollY
  })

  const checkScroll = () => {
    if (window.scrollY > state.prevScroll) {
      setState((p) => ({ ...p, direction: 2 }))
    }
    else if (window.scrollY < state.prevScroll) {
      setState((p) => ({ ...p, direction: 1 }))
    }

    if (state.direction !== state.prevDirection) {
      toggleHeader(state.direction, window.scrollY);
    }
    setState((p) => ({ ...p, prevScroll: window.scrollY }))
  };

  const toggleHeader = (direction, curScroll) => {
    if (direction === 2 && curScroll > 60) {
      setState((p) => ({ ...p, prevDirection: direction, toggleNav: 'hide' }))
    }
    else if (direction === 1) {
      setState((p) => ({ ...p, prevDirection: direction, toggleNav: '' }))
    }
  };
  window.addEventListener('scroll', checkScroll);

  return (
    <div className={`Header ${state.toggleNav}`} id='site-header'>
      <div className='navbar flex'>
        <div className='right-nav'>
          <lord-icon
            onClick={scrollToHome}
            src="https://cdn.lordicon.com/gmzxduhd.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#08a88a"
            className='lord-icon'
            style={{ width: '60px', height: '60px', cursor: 'pointer' }}
          ></lord-icon>
        </div>
        <div className='left-nav flex'>
          {linkArr.map((item, idx) =>
            <div className='link-warp flex' key={idx}>
              <div className='link-number'>{item.number}.</div>
              <div className='link-to' onClick={() => scrollToElement(item.ref)} >{item.to}</div>
            </div>
          )}
          <div className='resume-btn'>
            <a target='_blank'
              rel="noopener noreferrer"
              href={RESUME}
            >Resume</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
