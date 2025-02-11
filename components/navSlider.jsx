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
    
               <div className="bg-white flex flex-col w-[300px] h-screen">
                <Link to="/" className="text-[#052d6f] font-bold text-xl hover:border-b border-b-[#052d6f]">Home</Link>
                <Link to="/products" className="text-[#052d6f] font-bold text-xl hover:border-b border-b-[#052d6f]">Products</Link>
                <Link to="/about" className="text-[#052d6f] font-bold text-xl hover:border-b border-b-[#052d6f]">About Us</Link>
                <Link to="/contact" className="text-[#052d6f] font-bold text-xl hover:border-b border-b-[#052d6f]">Contact Us</Link>
                <Link to="/cart" className="text-[#052d6f] font-bold text-xl hover:border-b border-b-[#052d6f]">Cart</Link>
               </div>
               </div>
    )
}