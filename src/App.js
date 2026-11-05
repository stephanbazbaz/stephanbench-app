import { useEffect, useRef, useState } from 'react'
import './App.scss';
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Socials from './components/Socials'
import MobileHeader from './components/MobileHeader/MobileHeader';
import cx from 'classnames'
import "aos/dist/aos.css"

function App() {
  const [isBlur, setIsBlur] = useState(false)
  const servicesRef = useRef(null)
  const workRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  // Honor shareable links like /#work once the SPA has rendered
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  const linkArr = [
    { to: 'Services', ref: servicesRef },
    { to: 'Work', ref: workRef },
    { to: 'About', ref: aboutRef },
    { to: 'Contact', ref: contactRef },
  ]

  return (
    <div className="App">
      <Header linkArr={linkArr} />
      <MobileHeader linkArr={linkArr} setIsBlur={setIsBlur} />
      <main className={cx('wrapper', { blur: isBlur })}>
        <Hero onSeeWork={() => workRef.current?.scrollIntoView()} />
        <Services ref={servicesRef} />
        <Work ref={workRef} />
        <Testimonials />
        <About ref={aboutRef} />
        <Contact ref={contactRef} />
      </main>
      <Socials />
    </div>
  );
}

export default App;
