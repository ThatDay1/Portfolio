import React from 'react'
import './Portfolio.css'
import Card from '../../UI/Card.jsx'
import HeadingText from '../../components/HeadingText/HeadingText.jsx'
import { portfolio } from '../../data/Data.js'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <section className="portfolio">
      <HeadingText title={'Resent'} titlePrimary={'Work'} />
      <div className="container portfolio-container">
        {portfolio.map(({ id, img, name, des, github }) => {
          return (
            <Card className={'project'} key={id}>
              <Link to={github}>
                <img className="project-img" src={img} alt={name} />
              </Link>
              <h3>{name}</h3>
              <p>{des}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
