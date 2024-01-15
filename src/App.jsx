import './App.css'
import { NavBar, Hero, About, Offer, Footer } from './components'

const App = () => (
  <header>
    <section className='main__app-header'>
      <NavBar />
      <Hero />
    </section>
    <About />
    <Offer />
    <Footer />
  </header>
)

export default App
