import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <div className='min-h-screen'>
        <Outlet/>   
     </div>                                         { /* This parts of codes are visible in every pages of the website */}
     <Footer/>
    </>
  )
}

export default App
