import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="bg-[#FFEDFA] w-full h-[100px] relative flex justify-center items-center">
            <img src="/logo2.png" className="cursor-pointer w-[200px] h-[200px] rounded-full absolute left-[10px]"/>

            <div className="h-full flex items-center w-[500px] justify-evenly">

            <Link to="/" className="text-[#052d6f] font-bold text-xl hover:border-b border-b-[#052d6f]">Home</Link>
            <Link to="/products" className="text-[#052d6f] font-bold text-xl hover:border-b border-b-[#052d6f]">Products</Link>
            <Link to="/about" className="text-[#052d6f] font-bold text-xl hover:border-b border-b-[#052d6f]">About Us</Link>
            <Link to="/contact" className="text-[#052d6f] font-bold text-xl hover:border-b border-b-[#052d6f]">Contact Us</Link>

            </div>

        </header>
    )
}