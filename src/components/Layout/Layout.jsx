import React from 'react'

import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import App from '../../App'


function Layout() {
  return (
    <>
   <Navbar />   
   <Outlet />
   <Footer />
   </>
  )
}

export default Layout