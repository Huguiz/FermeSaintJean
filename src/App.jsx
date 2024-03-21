// modules
import { Routes, Route } from 'react-router-dom'

// components
import NavBar from './components/navbar'
import Footer from './components/footer'

// pages
import Welcome from './page/welcome'

// styles
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/produits' element={<Welcome/>} />
        <Route path='/contact' element={<Welcome/>} />
        <Route path='*' element={<p>Not found</p>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App