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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            reiciendis fuga velit eum accusantium, ut eligendi nostrum quod
            accusamus aut itaque harum sunt temporibus. Iste soluta tempora
            eligendi atque debitis.
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
