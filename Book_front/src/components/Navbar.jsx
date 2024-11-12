import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

//    react icons syntax:
//    import { reacticons } from "react-icons/io5";

import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";

const Navbar = ({size}) => {
  //hooks

  const [isMenuOpen, SetIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const[show, setShow] = useState(true);
  const[cart, setCart] = useState([]);

  // toggle menu open
  const toggleMenu = () => {
    SetIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
    //navbar Items here
    const navItems = [      //array of objects
        {link: "Home", path: "/"},
        {link: "About", path: "/about"},
        {link: "Find Your Book", path: "/best"},
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
              <b>BookVerse</b>
              </Link>
                          
            {/* nav items for map operation */}
          <ul className="md:flex space-x-6 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition duration-300"
              >
                {link}
              </Link>
            ))}
          </ul>

        {/* btn for devices */}
<div className="flex items-center space-x-12 hidden lg:flex">
  <span className="relative">
    <Link to="/cart">
      <FaCartPlus className="w-6 hover:text-blue-700" />
    </Link>
    {/* Badge for cart size */}
      <span className="absolute bottom-3 right-0 bg-red-500 text-white text-xs rounded-full w-3 h-4 flex items-center justify-center">
        {size}
      </span>
  </span>
  
  <button>
    <FaBarsStaggered className="w-6 hover:text-blue-700" />
  </button>
</div>



          {/* menu for mobile devices */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for sm devices */}
        <div className={`space-y-4 px-4 py-4 mt-16 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white uppercase px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
            >
              {link}
            </Link>
          ))
                }
            </div>
      </nav>
    </header>
  )
}

export default Navbar