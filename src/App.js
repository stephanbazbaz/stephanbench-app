import { useRef } from 'react'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Socials from './components/Socials'
function App() {
  const refObj = {
    workRef: useRef(null),
    experienceRef: useRef(null),
    aboutRef: useRef(null),
    contactRef: useRef(null),
    homeRef: useRef(null)
  }
  return (
    <div className="App">
      <Header refObj={refObj} />
      <div className='wrapper'>
        <Home myRef={refObj.homeRef} />
        <About myRef={refObj.aboutRef} />
        <Experience myRef={refObj.experienceRef} />
        <Work myRef={refObj.workRef} />
        <Contact myRef={refObj.contactRef} />
        <Socials />
      </div>
    </div>
  );
}

export default App;
