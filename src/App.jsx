import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
function App() { 
  return (
    <>
      <Navbar/>
        <Landing/>
        <About/>
        <Projects/>
        <Testimonials/>
        <Contact/>
      <Footer/>
    </>
  )
}

export default App
