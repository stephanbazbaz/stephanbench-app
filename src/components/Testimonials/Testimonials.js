import React from 'react'
import { testimonials } from '../../constants'
import SectionTitle from '../common/SectionTitle'

const Testimonials = () => {
  if (!testimonials.length) return null
  return (
    <section className='Testimonials' id='testimonials'>
      <SectionTitle to='Kind words' />
      <div className='testimonials-grid'>
        {testimonials.map((t) =>
          <figure className='testimonial-card' key={t.name}>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>
              <span className='name'>{t.name}</span>
              {t.brand && (t.link
                ? <a className='brand' href={t.link} target='_blank' rel='noreferrer'>{t.brand}</a>
                : <span className='brand'>{t.brand}</span>)}
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  )
}

export default Testimonials
