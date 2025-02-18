import { useNavigate } from "react-router-dom"

export default function UserCome(){
   const navigate = useNavigate();
   function Log(){
    navigate("/login")
   }
    return(
        <>
        <header className="bg-[#032f6e] w-full h-[100px] relative flex justify-center items-center">
           
            <img src="/logo2.png" className="cursor-pointer w-[200px] h-[200px] rounded-full absolute left-[10px]"/>
            <h2 className="text-2xl font-bold text-[#dae2ed]">Welcome TN International (PVT) LTD...</h2>
            <button onClick={Log} className="mt-6 px-6 md:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full text-white font-bold shadow-md transition-transform transform hover:scale-105 w-full md:w-auto absolute right-[10px]">
                Login in to System
                </button>
           </header>

           <div className="min-h-screen bg-gray-50 font-sans">
           <div className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center text-white text-center px-4 md:px-0">
            <img src="/welcome.jpg" className="w-full h-[600px]"/>
            </div>
           </div>

           </>
    )
}