import React, { useState } from 'react'
import './MobileHeader.scss'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import NavLink from '../common/NavLink';
import Drawer from "@mui/material/Drawer";
import { homeIconObj } from '../../constants';
import { Spin as Hamburger } from 'hamburger-react'
import cx from 'classnames'
import RESUME from '../../assets/Stephan Benchemoul Resume.pdf'
import MyBtn from '../common/MyBtn/MyBtn';

const MobileHeader = (props) => {
  const { refObj, linkArr, setIsBlur } = props
  const [state, setState] = useState({
    isOpen: false,
    isFirstIcon: false,
    isSecondIcon: false,
  })
  const scrollToHome = () => {
    closeModal(false)
    setTimeout(() => {
      refObj.homeRef.current.scrollIntoView(false)
    }, 300);
  }
  const scrollToElement = (ref) => {
    ref.current.scrollIntoView()
  }
  const openModal = () => {
    setState((p) => ({ ...p, isFirstIcon: true }))
    setTimeout(() => {
      setState((p) => ({ ...p, isOpen: true }))
      setIsBlur(true)
    }, 200);
  }
  const closeModal = (ref) => {
    setState((p) => ({ ...p, isOpen: false, isFirstIcon: false }))
    setIsBlur(false)
    if (ref) {
      setTimeout(() => {
        scrollToElement(ref)
      }, 200);
    }
  }
  const trigger = useScrollTrigger();
  return (
    <>
      <Slide appear={true} direction="down" in={!trigger}>
        <div className={cx('MobileHeader')}>
          <div className='flex-between'>
            <lord-icon
              onClick={scrollToHome}
              colors='primary:#ffffff,secondary:#d200ff'
              {...homeIconObj}>
            </lord-icon>
          </div>
        </div>
      </Slide>
      <Slide appear={true} direction="down" in={!trigger}>
        <div className='burger-warp'>
          <div>
            <Hamburger
              onToggle={toggled => toggled ? openModal() : closeModal(false)}
              toggled={state.isOpen}
              color="#d200ff"
              duration={0.4}
              easing="ease"
            />
          </div>
        </div>
      </Slide>
      <Drawer
        transitionDuration={{ enter: 500, exit: 500 }}
        anchor="right"
        open={state.isOpen}
        classes={{ paper: 'drawer-row', root: 'drawer-root' }}
        hideBackdrop={true}
        disablePortal={true}
      >
        {linkArr.map((item, idx) =>
          <div key={idx}>
            <NavLink number={item.number} text={item.to} handleClick={() => closeModal(item.ref)} />
          </div>
        )}
        <MyBtn text='Resume' link={RESUME} />
      </Drawer>
    </>
  )
}

export default MobileHeader
