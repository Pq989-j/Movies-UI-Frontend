import './App.css'
import {Greetings} from './components/Greetings'
import { Routes, Route, NavLink } from "react-router-dom"
import { Movies } from './components/Movies'
import { About } from './Pages/About'
import { Home } from './Pages/Home'
import { MovieDetail } from './Pages/MovieDetail'
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
      
      <nav className="flex justify-evenly items-center bg-black text-red-100 px-6 py-3">
        <div className='flex gap-4 items-center text-xl'>
          <NavLink to="/" className="text-3xl" >Inicio</NavLink> |
          <NavLink to="/movies">Peliculas</NavLink> |
          <NavLink to="/about">Acerca de</NavLink>
        </div>
        <div className="flex gap-3 w-32 justify-end text-sm">
          <NavLink 
            to="/auth/login" 
            className="hover:text-red-400 transition-colors self-center"
          >
            Login
          </NavLink>
          <NavLink 
            to="/auth/register" 
            className="bg-red-700 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
          >
            Registro
          </NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/auth/register" element={<RegisterForm />}/>
        <Route path="/movies/:id" element={<MovieDetail />}/>
        <Route element={<PrivateRoute />}>
          <Route path="/movies" element={<Movies />}/>
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
