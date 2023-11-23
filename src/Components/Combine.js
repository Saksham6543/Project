// import Home from '@mui/icons-material/Home'
import React from 'react'

import About from './About'
import Work from './Work'
import Home from './Home'
import Testimonial from './Testimonial'
import Footer from './Footer'
import Contact from './Contact'

export default function Combine() {
  return (
    <div>
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}
