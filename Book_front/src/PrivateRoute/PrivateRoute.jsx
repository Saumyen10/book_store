import React, { useContext } from 'react'
import {Authcontext } from '../auth/AuthProvider'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Button, Spinner } from "flowbite-react";

const PrivateRoute = ({children}) => {
  
  const {user,loading} = useContext(Authcontext);
  const location = useLocation();
  
  if(loading)
    {
      return 
      <div className='text-center'>
          <Button>
            <Spinner aria-label="Spinner button example" size="sm" />
            <span className="pl-3">Loading...</span>
          </Button>
      </div>
    }

    if(user) {
      return children;
    }
  
    return (
      <Navigate to="/login" state={{from:location}} replace ></Navigate>
  )
}

export default PrivateRoute