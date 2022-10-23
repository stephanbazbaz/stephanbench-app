import { useRef, useState } from 'react'
import './App.scss';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
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
      to: 'About',
      number: '01.',
      ref: refObj.aboutRef
    },
    {
      to: 'Experience',
      number: '02.',
      ref: refObj.experienceRef
    },
    {
      to: 'Work',
      number: '03.',
      ref: refObj.workRef
    },
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
        <Home myRef={refObj.homeRef} />
        <About linkArr={linkArr} />
        <Experience linkArr={linkArr} />
        <Work linkArr={linkArr} />
        <Contact linkArr={linkArr} />
      </div>
      <Socials />
    </div>
  );
}

export default App;
