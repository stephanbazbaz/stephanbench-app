import React, { useState } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Tooltip from '@mui/material/Tooltip';
import NavLink from '../common/NavLink';
import MyBtn from '../common/MyBtn';
import { homeIconObj, WHATSAPP_URL } from '../../constants';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

const Header = (props) => {
  const { linkArr } = props
  const scrollToElement = (ref) => {
    ref.current.scrollIntoView()
  }
  const [state, setState] = useState({
    isDark: true,
    color: '#ffffff'
  })

  const changeTheme = () => {
    setState(p => ({ ...p, isDark: !p.isDark, color: p.isDark ? '#111111' : '#ffffff' }))
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  const trigger = useScrollTrigger();

  const handleThemeKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      changeTheme()
    }
  }

  return (
    <Slide appear={true} direction="down" in={!trigger}>
      <header className='Header'>
        <div className='navbar flex'>
          <div className='left-nav'>
            <a href='/' aria-label='Home'>
              <lord-icon
                colors={`primary:${state.color},secondary:#d200ff`}
                {...homeIconObj}
              ></lord-icon>
            </a>
          </div>
          <div className='right-nav flex'>
            {linkArr.map((item, idx) =>
              <div key={idx} className={`nav-link-warp-${idx}`}>
                <NavLink
                    text={item.to} handleClick={() => scrollToElement(item.ref)} />
              </div>
            )}
            <div className='nav-link-warp-3'>
              <MyBtn text='Book a call' link={WHATSAPP_URL} primary />
            </div>
            {state.isDark ?
              <Tooltip title='Light mode'>
                <DarkModeIcon
                  onClick={() => changeTheme()}
                  onKeyDown={handleThemeKeyDown}
                  htmlColor='white'
                  aria-label='Toggle dark mode'
                  role='button'
                  tabIndex={0}
                />
              </Tooltip>
              :
              <Tooltip title='Dark mode'>
                <LightModeIcon
                  onClick={() => changeTheme()}
                  onKeyDown={handleThemeKeyDown}
                  aria-label='Toggle dark mode'
                  role='button'
                  tabIndex={0}
                />
              </Tooltip>}
          </div>
        </div>
      </header>
    </Slide>
  )
}

export default Header
