import React, { useState } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import VerticalTabs from '../common/VerticalTabs'
import { experienceArr, aosFadeUpUp, aosConfig2 } from '../../constants'
import WorkDetails from '../common/WorkDetails'
import SectionTitle from '../common/SectionTitle'

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
      <SectionTitle
        number={linkArr[1].number}
        to={linkArr[1].to}
        fadeConfig={aosFadeUpUp} />
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
