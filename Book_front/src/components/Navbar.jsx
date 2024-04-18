import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

//    react icons syntax:
//    import { reacticons } from "react-icons/io5";

import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  //hooks
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  //toggle Menu
  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
        const handleScroll = () => {
          if(window.scrollY > 100)
          {
            setSticky(true);
          }
          else
          {
            setSticky(false);
          }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
          window.addEventListener("scroll", handleScroll);
        }
  }, [])
    //navbar Items here
    const navItems = [      //array of objects
        {link: "Home", path: "/"},
        {link: "About", path: "/about"},
        {link: "Blog", path: "/blog"},
        {link: "Shop", path: "/shop"},
       
    ]

  return (
    <header className='w-full bg-transparent fixed top-0 right-0 left-0 transition-all ease-in duration-300'>
      <nav className={` py-4 lg: px-24
            ${isSticky ? "stickytop-0 right-0 left-0 bg-blue-300" : ""}`}>

              <div className='flex justify-between text-base gap-8'>

              <Link to="/"  className='inline-block flex items-center'> 
              <img src={"/logo.ico"} alt="BookVerse Logo" />
              BookVerse
              </Link>
                          
            <ul className='md:flex space-x-12 hidden'>
                {
                  navItems.map(({link, path}) => 
                  <Link 
                  key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>
                   {link} 
                  </Link>)
                }
            </ul>

            {  /* btn for large devices */}

              <div className='space-x-12 hidden lg:flex items-center'>
                  <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
              </div>

           {/* menu btn for mobile devices */}
      <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-black focus:outline-none'>
              {
                  isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered  className="h-5 w-5 text-black"/>
                  
              }

          </button>
      </div>
    </div>
                {/*  small devices*/}
            <div className = {`space-y-4 px-4 py-4 mt-16 bg-blue-700 
            ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`} 
            >
            {
                  navItems.map(({link, path}) => 
                  <Link 
                  key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-red-700'>
                   {link} 
                  </Link>)
                }
            </div>
      </nav>
    </header>
  )
}

export default Navbar