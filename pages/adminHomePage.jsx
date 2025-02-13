import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
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
             
            <div className="w-[20%] h-screen bg-blue-500 flex flex-col items-center justify-center space-y-6">
             <nav className="flex flex-col space-y-4">
             <Link className="flex items-center space-x-3 hover:bg-blue-500 px-4 py-2 rounded transition" to="/admin/dashboard">
            <BsGraphUp size={20} />
            <span>Dashboard</span>
          </Link>
          <Link className="flex items-center space-x-3 hover:bg-blue-500 px-4 py-2 rounded transition" to="/admin/products">
            <FaBox size={20} />
            <span>Products</span>
          </Link>
          <Link className="flex items-center space-x-3 hover:bg-blue-500 px-4 py-2 rounded transition" to="/admin/orders">
            <FaClipboardList size={20} />
            <span>Orders</span>
          </Link>
          <Link className="flex items-center space-x-3 hover:bg-blue-500 px-4 py-2 rounded transition" to="/admin/customers">
            <FaUserCircle size={20} />
            <span>Customers</span>
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

