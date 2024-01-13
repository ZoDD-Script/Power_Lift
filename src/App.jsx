import './App.css'
import { NavBar, Hero, About, Offer } from './components'

const App = () => (
  <header>
    <section className='main__app-header'>
      <NavBar />
      <Hero />
    </section>
    <About />
    <Offer />
  </header>
)

export default App
