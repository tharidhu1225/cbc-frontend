import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import LoginPage from "./logingPage";
import ProductOverview from "./home/productOverview";
import ProductPage from "./home/product";
import About from "./home/about";
import Home from "./home/home";
import ContactUs from "./home/contact";
import ShippingPage from "./home/shipping";



export default function HomePage(){
    return(
        <div className="h-screen w-full">
             <Header/>
            <div className="w-full h-[calc(100vh-100px)] bg-[#f7f3fad8]">

            <Routes path="/*">
               <Route path="/home/" element={<Home/>}/>
               <Route path="/products" element={<ProductPage/>}/>
               <Route path="/productInfo/:id" element={<ProductOverview/>}/>
               <Route path="/about/" element={<About/>}/>
               <Route path="/contact/" element={<ContactUs/>}/>
               <Route path="/orders/" element={<ShippingPage/>}/>
               
            </Routes> 
            </div>
        </div>
    )
}