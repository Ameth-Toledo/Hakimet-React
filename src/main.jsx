import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/Page/NotFound/NotFound.jsx'
import LoginForm from './components/Page/LoginForm/LoginForm.jsx'
import Home from './components/Page/Home/Home.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <NotFound/>
  },
  {
    path:'/login',
    element:<LoginForm/>
  },
  {
    path:'/home',
    element: <Home/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
