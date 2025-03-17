import React from 'react'
import AOS from "aos"
import { aosFadeUpUp, aosConfig} from '../../constants'
import SectionTitle from '../common/SectionTitle'

// AOS.init(aosConfig)
const Experience = (props) => {
    const {linkArr} = props
    // const [state, setState] = useState({
    //     value: 0,
    //     visible: true
    // })
    // const handleChange = (event, newValue) => {
    //     setState({value: newValue, visible: false})
    //     setTimeout(() => {
    //         setState(prev => ({...prev, visible: true}))
    //     }, 200);
    // }
    return (
        <div className='Experience' ref={linkArr[2].ref}>
            <SectionTitle
                // number={linkArr[1].number}
                to={'Experience'}
            />
            <div>
                <div className='experience-list-warp'>
                    <div>
                        <p>
                            nRich - Backend developer ||
                            Nov 2022 - Nov 2024
                        </p>
                    </div>
                    <div>
                        <p>
                            PWM - Full Stack Developer ||
                            May 2021 - Sep 2022
                        </p>
                    </div>
                    <div>
                        <p>
                            Moveo Group - Junior Web Developer ||
                            Jan 2020 - Apr 2021
                        </p>
                    </div>
                    {/*<VerticalTabs*/}
                    {/*  handleChange={handleChange}*/}
                    {/*  value={state.value}*/}
                    {/*  list={experienceArr}*/}
                    {/*/>*/}
                    {/*<WorkDetails*/}
                    {/*  visible={state.visible}*/}
                    {/*  obj={experienceArr[state.value]}*/}
                    {/*/>*/}
                </div>
            </div>
        </div>
    )
}

export default Experience
