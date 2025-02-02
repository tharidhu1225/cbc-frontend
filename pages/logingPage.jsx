import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdImportContacts } from "react-icons/md";


export default function LoginPage() {
  
  const [emali,setEmail]=useState("Enter your email")
  const [password,setPassword]=useState("")

  function login(){
    axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login",{
      
      emali : emali,
      password : password
  
    }).then(
      (res)=>{
  
        console.log(res)
        if(res.data.user==null){
         toast.error(res.data.message)
          return
        }
  
        localStorage.setItem("token",res.data.token)
        if(res.data.user.type == "admin"){
          window.location.href = "/admin"
        }else{
          window.location.href = "/"
        }
      }
    )
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-red-900 ">
      <div className="w-[450px] h-[450px] bg-blue-500 flex flex-col justify-center items-center">
       <img src="/logo.jpg" className="rounded-full w-[150px]"/>
       <span>Email</span>


       <input className="bg-amber-100 rounded-2xl" defaultValue={emali} onChange={(e)=>{
        console.log(res)
        setEmail(e.target.value)
       }}/>
       <span>Password</span>
       <input className="bg-amber-100 rounded-2xl"type="password" defaultValue={password} onChange={
        (e)=>{
          setPassword(e.target.value)
        }
       }/>


       <button onClick={login} className="bg-amber-300">Login</button>
      </div>
    </div> 
  );
}

