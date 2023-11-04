import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './Component/Router/Router.jsx'
import { AuthProvider } from './Component/Auth/auth.service'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider> <RouterProvider router={router} /> </AuthProvider>
  </React.StrictMode>,
)
//<RouterProvider router={router} /> 