import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavBar from './SideNavBar'

const Layout = () => {
  return (
    <>
    <div className='flex gap-6'>
        <SideNavBar/>
        <Outlet/>
    </div>
    </>
  )
}

export default Layout

{ /* This parts of codes are visible in every Dashboard of the website */}