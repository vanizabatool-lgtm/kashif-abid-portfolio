import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Expertise from './components/Expertise'
import Work from './sections/work'
import Insights from './sections/insights'
import Contact from './sections/contact'
import Footer from './components/footer'
function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
  <Hero />
  <About />
  <Expertise />
  <Work />
  <Insights />
  <Contact />
</main>
 <Footer />
    </div>
  )
}

export default App
