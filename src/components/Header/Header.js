import React, { useState } from 'react'
import RESUME from '../../assets/Stephan Benchemoul Resume.pdf'
import MyBtn from '../common/MyBtn/MyBtn'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Tooltip from '@mui/material/Tooltip';
import NavLink from '../common/NavLink/NavLink';
import { homeIconObj } from '../../constants';

const Header = (props) => {
  const { refObj, linkArr } = props

  const scrollToHome = () => refObj.homeRef.current.scrollIntoView(false)
  const scrollToElement = (ref) => {
    ref.current.scrollIntoView()
  }
  const [state, setState] = useState({
    toggleNav: '',
    direction: 0,
    prevDirection: 0,
    prevScroll: window.scrollY,
    isDark: true,
    color: '#ffffff'
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
  const changeTheme = () => {
    setState(p => ({ ...p, isDark: !p.isDark, color: p.isDark ? '#111111' : '#ffffff' }))
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  return (
    <div className={`Header ${state.toggleNav}`} id='site-header'>
      <div className='navbar flex'>
        <div className='left-nav'>
          <lord-icon
            onClick={scrollToHome}
            colors={`primary:${state.color},secondary:#d200ff`}
            {...homeIconObj}
          ></lord-icon>
        </div>
        <div className='right-nav flex'>
          {linkArr.map((item, idx) =>
            <div key={idx}>
              <NavLink number={item.number} text={item.to} handleClick={() => scrollToElement(item.ref)} />
            </div>
          )}
          <MyBtn text='Resume' link={RESUME} />
          {state.isDark ?
            <Tooltip title='Light mode'>
              <DarkModeIcon onClick={() => changeTheme()} htmlColor='white' />
            </Tooltip>
            :
            <Tooltip title='Dark mode'>
              <LightModeIcon onClick={() => changeTheme()} />
            </Tooltip>}
        </div>
      </div>
    </div>
  )
}

export default Header
