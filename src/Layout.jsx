import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

function Layout() {
    return (
        <div className=' w-full'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout
