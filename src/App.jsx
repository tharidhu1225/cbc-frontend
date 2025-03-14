import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/logingPage'
import AdminHomePage from '../pages/adminHomePage'
import HomePage from '../pages/homePage'
import SignUpPage from '../pages/signUpPage'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'
import UserCome from '../components/useComeHeadder'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <Toaster/>
       <GoogleOAuthProvider clientId='658159350627-859s1qt5iqutsuscf7km345rseai09hp.apps.googleusercontent.com'>
        <Routes path="/*">
          <Route path="/" element={<UserCome/>}/>
          <Route path='/home/*' element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/TN/*" element={<AdminHomePage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          

          
        </Routes>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </>
  )
}
//succes add new features
export default App