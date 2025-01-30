import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/logingPage'
import AdminHomePage from '../pages/adminHomePage'
import HomePage from '../pages/homePage'
import SignUpPage from '../pages/signUpPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes path="/*">
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/admin" element={<AdminHomePage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App