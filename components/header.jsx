import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import NavSlider from "./navSlider";

export default function Header(){
    const [isSliderOpean, setIsSliderOpen] =useState(false);
    return(
        <>
           {isSliderOpean&&<NavSlider closeSlider={()=>{setIsSliderOpen(false)}}/>}

           <header className="bg-[#FFEDFA] w-full h-[100px] relative flex justify-center items-center">
           
            <img src="/logo2.png" className="cursor-pointer w-[200px] h-[200px] rounded-full absolute left-[10px]"/>

            <GiHamburgerMenu onClick={()=>{setIsSliderOpen(true)}} className="text-3xl cursor-pointer text-[#1079bf] absolute right-[10px] lg:hidden"/>

            <div className="h-full items-center w-[500px] justify-evenly hidden lg:flex space-x-10">

            <Link to="/home/home" className="text-[#052d6f] font-bold text-xl hover:border-b border-b-[#052d6f]">Home</Link>
            <Link to="/home/products" className="text-[#052d6f] font-bold text-xl hover:border-b border-b-[#052d6f]">Products</Link>
            <Link to="/home/about" className="text-[#052d6f] font-bold text-xl hover:border-b border-b-[#052d6f]">About Us</Link>
            <Link to="/home/contact" className="text-[#052d6f] font-bold text-xl hover:border-b border-b-[#052d6f]">Contact Us</Link>
            <Link to="/home/orders" className="text-[#052d6f] font-bold text-xl hover:border-b border-b-[#052d6f]">Add Order</Link>
            

            </div>

           </header>
        </>
    )
}