import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout ,DesignSummerSchool} from './components/index.js'
import Home from './Pages/Home.jsx'
import {Login} from './components/index.js'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/summer-program' element={<DesignSummerSchool/>}/>
          <Route path='/login' element={<Login/>}/>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
