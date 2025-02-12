import { AiFillCodeSandboxSquare, AiOutlineAppstore, AiOutlineHome, AiOutlineInfoCircle, AiOutlinePhone, AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function NavSlider(props){
    const closeSlider = props.closeSlider
    return(
    <div className="fixed w-full h-screen bg-[#00000080] z-[10]">
        
        <div className="bg-[#FFEDFA] w-full h-[100px] relative flex justify-center items-center">
           
           <img src="/logo2.png" className="cursor-pointer w-[200px] h-[200px] rounded-full absolute left-[10px]"/>
           <IoCloseCircleOutline onClick={closeSlider} className="text-3xl absolute cursor-pointer text-[#1079bf] right-[60px] lg:hidden"/>
           </div>
    
               <div className="bg-[#052d6f] flex flex-col w-[200px] h-screen space-y-7">
               <Link to="/" className="flex flex-row items-center text-white hover:text-gray-300 text-2xl"><AiOutlineHome className="mr-2"/> Home</Link>
               <Link to="/products" className="flex flex-row items-center text-white hover:text-gray-300 text-2xl"><AiOutlineAppstore className="mr-2" /> Products</Link>
               <Link to="/about" className="flex flex-row items-center text-white hover:text-gray-300 text-2xl"><AiOutlineInfoCircle className="mr-2" /> About Us</Link>
               <Link to="/contact" className="flex flex-row items-center text-white hover:text-gray-300 text-2xl"><AiOutlinePhone className="mr-2" /> Contact Us</Link>
               <Link to="/orders" className="flex flex-row items-center text-white hover:text-gray-300 text-2xl"><AiFillCodeSandboxSquare className="mr-2" />Add Order</Link>
               </div>
               </div>
    )
}