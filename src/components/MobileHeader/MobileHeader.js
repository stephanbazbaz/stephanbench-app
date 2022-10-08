import React, { useState } from 'react'
import Header from '../Header'
import './MobileHeader.scss'
import CloseIcon from '@mui/icons-material/Close';
const MobileHeader = (props) => {
  const { refObj, linkArr, setIsBlur } = props
  const [isOpen, setIsOpen] = useState(false);
  const disableScroll = ({ element, disabled }) => {
    element.style.overflowY = disabled ? 'hidden' : 'scroll'
    return () => {
      element.style.overflowY = 'scroll'
    }
  }
  const openModal = () => {
    setIsBlur(true)
    setIsOpen(true)
    disableScroll({ element: document.body, disabled: true })
  }
  const closeModal = () => {
    setIsBlur(false)
    setIsOpen(false)
    disableScroll({ element: document.body, disabled: false })
  }
  const [state, setState] = useState({
    toggleNav: '',
    direction: 0,
    prevDirection: 0,
    prevScroll: window.scrollY,
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
  const scrollToHome = () => refObj.homeRef.current.scrollIntoView(false)

  return (
    <div className={`MobileHeader  ${state.toggleNav}`} id='site-header'>
      <div className='flex-between'>
        <lord-icon
          onClick={scrollToHome}
          src="https://cdn.lordicon.com/gmzxduhd.json"
          trigger="hover"
          colors={`primary:#ffffff,secondary:#d200ff`}
          className='lord-icon'
          style={{ width: '60px', height: '60px', cursor: 'pointer' }}
        ></lord-icon>
        <div className='menu-icon-warp' onClick={openModal}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      </div>
      {isOpen && <div className='drawer fadeInLeft'>
        <div className='close-modal' onClick={closeModal}><CloseIcon /></div>
        <Header refObj={refObj} linkArr={linkArr} closeModal={closeModal} />
      </div>}
    </div>
  )
}

export default MobileHeader
