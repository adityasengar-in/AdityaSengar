import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <main className='min-h-screen bg-white text-zinc-950 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100'>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Footer />
        
    </main>
  )
}

export default Landing
