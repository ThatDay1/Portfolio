import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderImage from '../../assets/header.jpg'
import { Link } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <header>
      <div className="container container-lg header-container">
        <img src={HeaderImage} alt="" />
        <div className="header-right">
          <h1>
            <span>Hi, I'm Ogün Karoağlu</span> <br />
            Web Programmer
          </h1>
          <p>
            I proficiently utilize technologies such as C#, .NET, React, and
            Next.js to develop user-friendly and fast web applications. My
            experience spans both frontend and backend development, allowing me
            to create modern and compelling user interfaces as well as robust
            and scalable backend systems. This combination of skills enables me
            to deliver comprehensive, full-stack solutions that enhance user
            experience and application performance.
          </p>
          <Link className="btn" to={'/about'}>
            About Me
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Home
