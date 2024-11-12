import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './cart/Cart'


function App() {
  const [count, setCount] = useState(0)
  const[show, setShow] = useState(true);
  const[cart, setCart] = useState([]);

  return (
    <>
    <Navbar size={cart.length}/>
     <div className='min-h-screen'>
        <Outlet/>   
     </div>                                         { /* This parts of codes are visible in every pages of the website */}
     <Footer/>
     
    </>
  )
}

export default App
