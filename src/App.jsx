import './Globals.css'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutMe } from './components/AboutMe'

function App() {
  return (
    <div>
      <p>portfolio</p>
      <Navbar/>
      <Hero/>
      <main>
        <AboutMe/>
      </main>
    </div>
  )
}
export default App
