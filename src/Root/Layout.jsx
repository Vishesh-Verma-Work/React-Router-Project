import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
// import Home from '../components/Home/Home'
// import Space from '../components/Space'
import User from '../components/User/User'

function Layout() {
  return (
    <>
    < Header />     
    < Outlet /> 
    < Footer />    
    </>
  )
}

export default Layout
