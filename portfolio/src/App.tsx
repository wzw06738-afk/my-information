import { ThemeProvider } from './context/ThemeContext'
import { ParticleBackground } from './components/ParticleBackground/ParticleBackground'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Skills } from './components/Skills/Skills'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import styles from './App.module.css'

function App() {
  return (
    <ThemeProvider>
      <div className={styles.app}>
        <ParticleBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
