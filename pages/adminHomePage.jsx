import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { FaBox, FaClipboardList, FaUserCircle } from "react-icons/fa";
import AdminProductPage from "./admin/adminProductPage";


export default function AdminHomePage() {
    return (
        <div className="bg-blue-200 w-full h-screen flex">
             
             <div className="w-[20%] h-screen bg-blue-500 flex flex-col items-center justify-center space-y-6">
                <Link className="flex flex-row items-center text-white hover:text-gray-300" to="/admin/dashboard">
                    <BsGraphUp className="mr-2" />
                    Dashboard
                </Link>
                <Link className="flex flex-row items-center text-white hover:text-gray-300" to="/admin/products">
                    <FaBox className="mr-2" />
                    Products
                </Link>
                <Link className="flex flex-row items-center text-white hover:text-gray-300" to="/admin/orders">
                    <FaClipboardList className="mr-2" />
                    Orders
                </Link>
                <Link className="flex flex-row items-center text-white hover:text-gray-300" to="/admin/customers">
                    <FaUserCircle className="mr-2" />
                    Customers
                </Link>

            </div>


            <div className="w-[80%] h-screen bg-red-400">
                <Routes path="/*">
                <Route path="/dashboard" element={<h1>Dashboard</h1>}/>
                <Route path="/products" element={<AdminProductPage/>}/>
                <Route path="/orders" element={<h1>Oders</h1>}/>
                <Route path="/customers" element={<h1>Customers</h1>}/>
                <Route path="/*" element={<h1>404 not found</h1>}/>
                </Routes>
            </div>
  
        </div>
    );
}

