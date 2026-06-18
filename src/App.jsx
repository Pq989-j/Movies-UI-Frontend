import './App.css'
import {Greetings} from './components/Greetings'
import { Routes, Route, NavLink } from "react-router-dom"
import { Characters } from './components/Characters'
import { About } from './Pages/About'
import { Home } from './Pages/Home'
import { Movies } from './Pages/Movies'
import { CharacterDetail } from './Pages/CharacterDetail'

function App() {
 
  return (
    <div>
      <nav>
        <NavLink to="/">Inicio</NavLink> |
        <NavLink to="/movies">Peliculas</NavLink> |
        <NavLink to="/about">Acerca de</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Greetings />}/>
        <Route path="/character/:id" element={<CharacterDetail />}/>
        <Route path="/characters" element={<Characters />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
