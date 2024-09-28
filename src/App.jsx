import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainPage from './pages/mainPage/MainPage'
import Dashboard from './pages/dashboard/Dashboard'
import Customers from './pages/customers/Customers'

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route exact path='/dashboard' element={<Dashboard/>}/>
            <Route path='/customers' element={<Customers/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
