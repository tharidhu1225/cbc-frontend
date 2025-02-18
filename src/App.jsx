import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/logingPage'
import AdminHomePage from '../pages/adminHomePage'
import HomePage from '../pages/homePage'
import SignUpPage from '../pages/signUpPage'
import { Toaster } from 'react-hot-toast'
import FileUploadTest from '../pages/test'
import { GoogleOAuthProvider } from '@react-oauth/google'
import UserCome from '../components/userComeheadder'


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
          <Route path="/admin/*" element={<AdminHomePage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/testing" element={<FileUploadTest/>}/>

          
        </Routes>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </>
  )
}

//add new feature login

export default App