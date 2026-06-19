import './App.css'
import {Greetings} from './components/Greetings'
import { Routes, Route, NavLink } from "react-router-dom"
import { Characters } from './components/Characters'
import { About } from './Pages/About'
import { Home } from './Pages/Home'
import { Movies } from './Pages/Movies'
import { CharacterDetail } from './Pages/CharacterDetail'
import Searchfield from './components/Counter'
import { ThemeContext } from './context/ThemeContext'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('Red')
  return (
    <ThemeContext value={{theme, setTheme}}>
      
      <nav>
        <NavLink to="/">Inicio</NavLink> |
        <NavLink to="/movies">Peliculas</NavLink> |
        <NavLink to="/about">Acerca de</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Greetings />}/>
        <Route path="/character/:id" element={<CharacterDetail />}/>
        <Route path="/movies" element={<Characters />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/counter" element={<Searchfield/>}/>
      </Routes>
    
    </ThemeContext>
  )
}

export default App
