import { useRef, useState } from 'react'
import './App.scss';
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Socials from './components/Socials'
import MobileHeader from './components/MobileHeader/MobileHeader';
import cx from 'classnames'
import "aos/dist/aos.css"

function App() {

  const [isBlur, setIsBlur] = useState(false)
  const refObj = {
    workRef: useRef(null),
    experienceRef: useRef(null),
    aboutRef: useRef(null),
    contactRef: useRef(null),
    homeRef: useRef(null)
  }
  const linkArr = [
    {
      to: 'Work',
      number: '02.',
      ref: refObj.experienceRef
    },
    {
      to: 'About',
      number: '01.',
      ref: refObj.aboutRef
    },
    // {
    //   to: 'Experience',
    //   number: '03.',
    //   ref: refObj.workRef
    // },
    {
      to: 'Contact',
      number: '04.',
      ref: refObj.contactRef
    }
  ]
  return (
    <div className="App">
      <Header linkArr={linkArr} />
      <MobileHeader linkArr={linkArr} setIsBlur={setIsBlur} />
      <div className={cx('wrapper', { blur: isBlur })}>
        <Work linkArr={linkArr} />
        <About linkArr={linkArr} />
        <Contact linkArr={linkArr} />
      </div>
      <Socials />
    </div>
  );
}

export default App;
