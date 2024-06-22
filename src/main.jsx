import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import Layout from './Layout'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import Logout from './components/Logout/Logout'
import { ToastContainer, toast } from 'react-toastify';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      }, {
        path: "about",
        element: <About />
      },
      {
        path: "contactus",
        element: <ContactUs />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "logout",
        element: <Logout />
      }

    ]

  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
    <ToastContainer position='top-center' />
  </React.StrictMode>,
)
