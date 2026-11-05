import React, { forwardRef } from 'react'
import { services } from '../../constants'
import SectionTitle from '../common/SectionTitle'

const Services = forwardRef((props, ref) => {
  return (
    <section className='Services' id='services' ref={ref}>
      <SectionTitle to='Services' />
      <div className='services-grid'>
        {services.map((s) =>
          <div className='service-card' key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            {s.priceFrom && <span className='price'>From {s.priceFrom}</span>}
          </div>
        )}
      </div>
    </section>
  )
})

export default Services
