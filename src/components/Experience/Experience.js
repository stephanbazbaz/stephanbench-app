import React, { useState } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import VerticalTabs from '../common/VerticalTabs'
import { experienceArr, aosFadeUpUp, aosConfig2 } from '../../constants'
import WorkDetails from '../common/WorkDetails/WorkDetails'

AOS.init(aosConfig2)
const Experience = (props) => {
  const { linkArr } = props
  const [state, setState] = useState({
    value: 0,
    visible: true
  })
  const handleChange = (event, newValue) => {
    setState({ value: newValue, visible: false })
    setTimeout(() => {
      setState(prev => ({ ...prev, visible: true }))
    }, 200);
  }
  return (
    <div className='Experience' ref={linkArr[1].ref}>
      <h1 className='title flex' {...aosFadeUpUp} >
        <span className='link-number'>{linkArr[1].number}</span>
        {linkArr[1].to}
        <div className='line'></div>
      </h1>
      <div>
        <div className='experience-list-warp' {...aosFadeUpUp}>
          <VerticalTabs
            handleChange={handleChange}
            value={state.value}
            list={experienceArr}
          />
          <WorkDetails
            visible={state.visible}
            obj={experienceArr[state.value]}
          />
        </div>
      </div>
    </div>
  )
}

export default Experience