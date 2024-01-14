import React from 'react'
import './Card.css'

const Card = ({ classname, children }) => {
  return <article className={`card ${classname}`}>{children}</article>
}

export default Card
