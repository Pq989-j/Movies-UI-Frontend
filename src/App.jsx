import './App.css'
import {Greetings} from './components/Greetings'
import { Routes, Route, NavLink } from "react-router-dom"
import { Characters } from './components/Movies'
import { About } from './Pages/About'
import { Home } from './Pages/Home'
import { CharacterDetail } from './Pages/MovieDetail'
import Searchfield from './components/Counter'
import { ThemeContext } from './context/ThemeContext'
import { useState } from 'react'
import { RegisterForm } from './components/RegisterForm'
import './index.css'
import { LoginForm } from './components/LoginForm'
import { PrivateRoute } from './components/PrivateRoute'

function App() {
  const [theme, setTheme] = useState('Red')
  return (
    <ThemeContext value={{theme, setTheme}}>
      
      <nav className="flex justify-center bg-black text-red-100">
        <NavLink to="/" className="text-3xl" >Inicio</NavLink> |
        <NavLink to="/movies">Peliculas</NavLink> |
        <NavLink to="/about">Acerca de</NavLink>
      </nav>
      <Routes>
        <Route path="/auth/register" element={<RegisterForm />}/>
        <Route path="/character/:id" element={<CharacterDetail />}/>
        <Route element={<PrivateRoute />}>
          <Route path="/movies" element={<Characters />}/>
        </Route>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/counter" element={<Searchfield/>}/>
        <Route path="/auth/login" element={<LoginForm/>}></Route>
      </Routes>
    
    </ThemeContext>
  )
}

export default App
