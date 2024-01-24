import './App.css'
import { NavBar, Hero, About, Offer, Footer, Classes, Testimonial } from './components'

const App = () => (
  <header>
    <section className='main__app-header'>
      <NavBar />
      <Hero />
    </section>
    <About />
    <Offer />
    <Classes />
    <Testimonial />
    <Footer />
  </header>
)

export default App
