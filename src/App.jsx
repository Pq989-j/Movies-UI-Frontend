import './App.css'
import { Routes, Route, NavLink } from "react-router-dom"
import { Movies } from './components/Movies'
import { About } from './Pages/About'
import { Home } from './Pages/Home'
import { MovieDetail } from './Pages/MovieDetail'
import { ThemeContext } from './context/ThemeContext'
import { useState } from 'react'
import { RegisterForm } from './components/RegisterForm'
import './index.css'
import { LoginForm } from './components/LoginForm'
import { PrivateRoute } from './components/PrivateRoute'
import { Profile } from './components/Profileaccount'
import { Navbar } from './components/Navbar'

function App() {
  const [theme, setTheme] = useState('Red')
  return (
    <ThemeContext value={{theme, setTheme}}>

      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/auth/register" element={<RegisterForm />}/>
        <Route path="/movies/:id" element={<MovieDetail />}/>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/auth/login" element={<LoginForm/>}></Route>
      </Routes>
    
    </ThemeContext>
  )
}

export default App
