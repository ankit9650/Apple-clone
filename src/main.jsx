import React from 'react'
import ReactDOM from 'react-dom/client'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import './index.css'
import App from './App'
import Buyiphone from './components/iphone15/Buyiphone'
import Buymac from './components/Buymac/Buymac'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>
     <Route path='/' element={<App/>}/>        
        <Route path='/Buyiphone' element={<Buyiphone/>}/>
        <Route path='/Buymac' element={<Buymac/>}/>
        
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)