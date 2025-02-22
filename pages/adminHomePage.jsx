import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { BsBox, BsCartCheck, BsGraphUp, BsPeople } from "react-icons/bs";
import { FaBox, FaClipboardList, FaUserCircle } from "react-icons/fa";
import AdminProductPage from "./admin/adminProductPage";
import AddProductForm from "./admin/addProduct";
import EditProductForm from "./admin/editProductForm";
import OrdersTable from "./admin/adminOrderPage";
import AdminDashboard from "./admin/adminDashbord";
import AdminUsers from "./admin/adminUsers";




export default function AdminHomePage() {
    
    return (
        
        <div className="flex h-screen bg-gray-100">
             
            <div className="w-50 bg-blue-600 text-white flex flex-col p-5 space-y-6">
                    <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
                    <nav className="flex flex-col space-y-4">
                      <Link className="flex items-center space-x-3 hover:bg-blue-500 px-4 py-2 rounded transition" to="/TN/dashboard">
                        <BsGraphUp size={20} />
                        <span>Dashboard</span>
                      </Link>
                      <Link className="flex items-center space-x-3 hover:bg-blue-500 px-4 py-2 rounded transition" to="/TN/products">
                        <BsBox size={20} />
                        <span>Products</span>
                      </Link>
                      <Link className="flex items-center space-x-3 hover:bg-blue-500 px-4 py-2 rounded transition" to="/TN/orders">
                        <BsCartCheck size={20} />
                        <span>Orders</span>
                      </Link>
                      <Link className="flex items-center space-x-3 hover:bg-blue-500 px-4 py-2 rounded transition" to="/TN/customers">
                        <BsPeople size={20} />
                        <span>Users</span>
                      </Link>
                    </nav>
                  </div>


            <div className="w-[80%] h-full">
                <Routes path="/*">
                <Route path="/dashboard" element={<AdminDashboard/>}/>
                <Route path="/products" element={<AdminProductPage/>}/>
                <Route path="/products/addProduct" element={<AddProductForm/>}/>
                <Route path="/products/editProduct" element={<EditProductForm/>}/>
                <Route path="/orders" element={<OrdersTable/>}/>
                <Route path="/customers" element={<AdminUsers/>}/>
                <Route path="/*" element={<h1>404 not found</h1>}/>
                </Routes>
               
            </div>
  
        </div>
    );
}

