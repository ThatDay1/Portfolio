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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vero
              iste sunt reiciendis temporibus quaerat illo, beatae ratione
              consequuntur, enim dolorem architecto porro repudiandae at!
              Inventore provident deserunt iure et.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium asperiores culpa in! Blanditiis dolorum consequuntur
              vero enim molestiae dolor. Repellat!
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
