import React from 'react'
import './Services.css'
import Card from '../../UI/Card.jsx'
import HeadingText from '../HeadingText/HeadingText.jsx'
import { services } from '../../data/Data.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = () => {
  return (
    <section className="services">
      <HeadingText title={'What I'} titlePrimary={'Offer'} />
      <div className="container services-container">
        {services.map(({ id, icon, name, des }) => {
          return (
            <Card key={id} classname={'services-card'}>
              <span>
                <FontAwesomeIcon icon={icon} />
              </span>
              <h3>{name}</h3>
              <p>{des}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default Services
