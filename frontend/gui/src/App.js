import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import PrivateRoute from "./utils/PrivateRoute"

import LoginPage from './components/pages/Auth'
import HomePage from './components/pages/HomePage'
import Register from './components/pages/Register'
import Navbar from './components/Navbar'
import ProtectedPage from './utils/ProtectedPage'

import './App.css'
import { AuthProvider } from './context/AuthContext'

export default function App() {
    return (
      // <BrowserRouter>
      //   <Routes>
      //       <Route path='/login' element={<LoginPage/>}/>
      //       <Route path='/register' element={<Register/>}/>
      //   </Routes>
      // </BrowserRouter>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <AuthProvider>
            <Navbar/>
              <Routes>
                
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path="/" element={HomePage} />
              </Routes>
          </AuthProvider>
        </div>
      </BrowserRouter>
    )
}