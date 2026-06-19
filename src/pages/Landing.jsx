import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div className='bg-white'>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Footer />
        
    </div>
  )
}

export default Landing