import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainPage from './pages/mainPage/MainPage'
import Dashboard from './pages/dashboard/Dashboard'
import Customers from './pages/customers/Customers'
import { MainProvider } from './context/mainContext.jsx'

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
                            <MainProvider>
                              <MainPage/>
                            </MainProvider>}>
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
