import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, About, Contact, Portfolio } from '../pages/index.js'
import { Nav, Theme } from '../components/index.js'

const router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Theme />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default router
