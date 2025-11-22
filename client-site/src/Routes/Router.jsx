import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Feed from '../Pages/Feed/Feed'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Feed/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    }
])

export default Router
