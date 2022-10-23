import React, { useState } from 'react'
import AOS from "aos"
import VerticalTabs from '../common/VerticalTabs'
import { experienceArr, aosFadeUpUp, aosConfig } from '../../constants'
import WorkDetails from '../common/WorkDetails'
import SectionTitle from '../common/SectionTitle'

AOS.init(aosConfig)
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
    <div className='Experience' ref={linkArr[1].ref}  {...aosFadeUpUp}>
      <SectionTitle
        number={linkArr[1].number}
        to={linkArr[1].to}
      />
      <div>
        <div className='experience-list-warp'>
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
