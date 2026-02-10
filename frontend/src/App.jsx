import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="bg-[#050505] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App