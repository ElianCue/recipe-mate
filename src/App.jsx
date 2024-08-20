import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Almuerzo from './pages/Almuerzo'
import Recetas from './pages/Recetas'
import Cena from './pages/Cena'
import NavBar from './components/Navbar'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-recipes' element={<Recetas />} />
        <Route path='/breakfast' element={<Almuerzo />} />
        <Route path='/lunch' element={<Cena />} />
      </Routes>
    </>
  )
}

export default App
