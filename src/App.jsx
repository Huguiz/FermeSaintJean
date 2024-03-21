// modules
import { Routes, Route } from 'react-router-dom';

// components
import NavBar from './components/navbar';
import Footer from './components/footer';

// pages
import Welcome from './page/Welcome';
import Products from './page/Products';
import Contact from './page/Contact';

// styles
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/produits' element={<Products/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<Welcome/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App