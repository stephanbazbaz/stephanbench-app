import React, { useState } from 'react'
import RESUME from '../../assets/Stephan Benchemoul Resume.pdf'
import MyBtn from '../common/MyBtn/MyBtn'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Tooltip from '@mui/material/Tooltip';
import NavLink from '../common/NavLink/NavLink';
import { homeIconObj } from '../../constants';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

const Header = (props) => {
  const { refObj, linkArr } = props

  const scrollToHome = () => refObj.homeRef.current.scrollIntoView(false)
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

  return (
    <Slide appear={true} direction="down" in={!trigger}>
      <div className='Header'>
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
    </Slide>
  )
}

export default Header
