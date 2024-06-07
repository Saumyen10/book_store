import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {Authcontext } from '../auth/AuthProvider'

const LogIn = () => {

  const location = useLocation();
  const navigate = useNavigate();
  
  const {login, loginGoogle} = useContext(Authcontext);
  const [error, setError] = useState("error");
  
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    //const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Login successful!!!");
      navigate(from,{replace:true})
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
   //sign-up using Google account
   const handleRegister = () => {
      loginGoogle().then((result) => {
         const user = result.user;
         alert("Sign up successfully!");
         navigate(from,{replace:true})
   })    
   .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
      // ..
   });;
   };
 }


  return (
    <div className="bg-gray-800">
   <div className="p-8 lg:w-1/2 mx-auto">
     
      
      <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
         
         <form onSubmit={handleLogIn} className="mt-6">
  
               
            <div className="relative mt-3">
               <input            className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"            id="email"            type="email"            placeholder="Email"          />
               <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg              xmlns="http://www.w3.org/2000/svg"              className="h-7 w-7 ml-3 text-gray-400 p-1"              viewBox="0 0 20 20"              fill="currentColor"            >
                     <path                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"              />
                     <path                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"              />
                  </svg>
               </div>
            </div>
            <div className="relative mt-3">
               <input            className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"            id="password"            type="text"            placeholder="Password"          />
               <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg              xmlns="http://www.w3.org/2000/svg"              className="h-7 w-7 ml-3 text-gray-400 p-1"              viewBox="0 0 20 20"              fill="currentColor"            >
                     <path                d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"              />
                  </svg>
               </div>
            </div>

            <div className="flex items-center justify-center mt-8">    
                  <button className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" >   
                  Login  </button>       
            </div>
         
            <p className='mt-4'>Don't have an account? Please <Link to="/signup" className='font-bold underline'>SignUp</Link></p>
         
         </form>
      </div>
   </div>
</div>
    
  )
}

export default LogIn