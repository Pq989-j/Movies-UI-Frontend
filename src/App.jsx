import './App.css'
import {Greetings} from './components/Greetings'
import { Routes, Route, Link } from "react-router-dom"
import { EffectPage } from './components/EffectPages'
import { About } from './Pages/About'
import { Home } from './Pages/Home'
import { Movies } from './Pages/Movies'

function App() {
 
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link> |
        <Link to="/movies">Peliculas</Link> |
        <Link to="/about">Acerca de</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Greetings />}/>
        <Route path="/effect" element={<EffectPage />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
