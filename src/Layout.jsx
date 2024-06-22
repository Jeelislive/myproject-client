import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

export default Layout
