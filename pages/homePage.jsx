import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import LoginPage from "./logingPage";
import ProductOverview from "./home/productOverview";

export default function HomePage(){
    return(
        <div className="h-screen w-full">
             <Header/>
            <div className="w-full h-[calc(100vh-100px)] bg-[#08D9D6]">
            <Routes path="/*">
               <Route path="/" element={<h1>Home page</h1>}/>
               <Route path="/login" element={<LoginPage/>}/>
               <Route path="/productInfo/:id" element={<ProductOverview/>}/>
            </Routes> 
            </div>
        </div>
    )
}