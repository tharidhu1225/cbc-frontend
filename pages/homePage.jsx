import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import LoginPage from "./logingPage";
import ProductOverview from "./home/productOverview";
import ProductPage from "./home/product";
import About from "./home/about";
import Contact from "./home/contact";
import Cart from "./home/cart";
import Home from "./home/home";
import ContactUs from "./home/contact";

export default function HomePage(){
    return(
        <div className="h-screen w-full">
             <Header/>
            <div className="w-full h-[calc(100vh-100px)] bg-[#f3f9fa]">

            <Routes path="/*">
               <Route path="/" element={<Home/>}/>
               <Route path="/products" element={<ProductPage/>}/>
               <Route path="/login" element={<LoginPage/>}/>
               <Route path="/productInfo/:id" element={<ProductOverview/>}/>
               <Route path="/about/" element={<About/>}/>
               <Route path="/contact/" element={<ContactUs/>}/>
               <Route path="/cart" element={<Cart/>}/>
            </Routes> 
            </div>
        </div>
    )
}