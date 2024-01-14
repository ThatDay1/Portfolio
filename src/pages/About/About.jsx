import React from 'react'
import './About.css'
import HeadingText from '../../components/HeadingText/HeadingText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import CV from '../../assets/CV.pdf'
import Card from '../../UI/Card.jsx'
import { experience } from '../../data/Data.js'
import Tools from '../../components/Tools/Tools.jsx'
import Services from '../../components/Services/Services.jsx'

const About = () => {
  return (
    <>
      <section className="About">
        <HeadingText title={'About'} titlePrimary={'Me'} />
        <div className="container about-container">
          <div className="about-left">
            <h3>I'm Ogün Karaoğlu</h3>
            <p>
              As a senior student at Yildiz Technical University, studying in
              the Computer Education and Instructional Technology Department, my
              educational journey has equipped me with a rich tapestry of
              experiences, fueling my passion for technology.
            </p>
            <p>
              Eager to transition into the professional realm as a front-end
              developer, i am excited about the prospect of contributing my
              skills and enthusiasm to your esteemed company.
            </p>
            <a href={CV} download className="btn">
              Download CV{' '}
              <span>
                <FontAwesomeIcon icon={faDownload} />
              </span>
            </a>
          </div>
          <div className="about-right">
            {experience.map(({ id, no, title }) => {
              return (
                <Card key={id} classname={'experience-card'}>
                  <h1>
                    <span>{no}</span>
                  </h1>
                  <p>{title}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      <Tools />
      <Services />
    </>
  )
}

export default About
