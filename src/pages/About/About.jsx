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
              As a recent graduate of Yildiz Technical University, where I
              earned my degree in Computer Education and Instructional
              Technology. My dedication and passion for technology have been the
              driving forces behind my academic and professional journey.
            </p>
            <p>
              Currently, I am gaining hands-on experience as a backend software
              developer. This role allows me to apply my theoretical knowledge
              in practical settings, further honing my skills and preparing me
              for a successful career in tech.
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
