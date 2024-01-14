import React from 'react'
import './Portfolio.css'
import Card from '../../UI/Card.jsx'
import HeadingText from '../../components/HeadingText/HeadingText.jsx'
import { portfolio } from '../../data/Data.js'

const Portfolio = () => {
  return (
    <section className="portfolio">
      <HeadingText title={'Resent'} titlePrimary={'Work'} />
      <div className="container portfolio-container">
        {portfolio.map(({ id, img, name, des, github }) => {
          return (
            <Card classname={'project'} key={id}>
              <img src={img} alt={name} />
              <h3>{name}</h3>
              <p>{des}</p>
              <a href={github}>Github</a>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
