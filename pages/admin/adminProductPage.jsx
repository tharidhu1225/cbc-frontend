import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function AdminProductPage() {
  const [products, setProducts] = useState([]);
  const [productsLoaded,setProductsLoaded] = useState(false);

  useEffect(() => {
    if(!productsLoaded){
      axios.get("http://localhost:5000/api/products").then((res) => {
      
        setProducts(res.data);
        setProductsLoaded(true);
      });
    }
  }, [productsLoaded]);

  return (
    <div className="bg-gray-50 p-8 min-h-screen relative">

        <Link to={"/admin/products/addProduct"} className="absolute right-[35px] bottom-0 text-[25px] border-[#3b82f6] border-[2px]
         text-[#3b82f6] p-2 rounded-xl hover:rounded-full "><FaPlus/></Link>
     
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">TN International(PVT)LTD...</h1>
      <div className="overflow-x-auto bg-white shadow-xl rounded-lg p-6">
        <table className="min-w-full table-auto text-gray-700">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Product ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Product Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Price</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Last Price</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Stock</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Description</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product._id}
                className={`border-b hover:bg-blue-200 transition duration-200 ease-in-out`}
              >
                <td className="px-6 py-4 text-sm font-medium">{product.productId}</td>
                <td className="px-6 py-4 text-sm">{product.productName}</td>
                <td className="px-6 py-4 text-sm">${product.price.toFixed(2)}</td>
                <td className="px-6 py-4 text-sm">${product.lastPrice.toFixed(2)}</td>
                <td className="px-6 py-4 text-sm">{product.stock}</td>
                <td className="px-6 py-4 text-sm max-w-xs truncate">{product.description}</td>
                <td className="px-6 py-4">
                  <button
                    
                    className="text-red-600 hover:text-red-800 mr-3 transition duration-200 ease-in-out"
                    title="Delete Product"
                    
                    onClick={()=>{
                      axios.delete(`http://localhots:5000/api/products/${product.productId}`,{
                       
                      }).then((res)=>{
                        
                        toast.success("Product deleted successfully")
                        setProductsLoaded(false);
                      });                       
                      }
                    }
                    
                    >
                  <FaTrash/>
                    
                  </button>
                  <button
                    className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                    title="Edit Product">
                  <FaPencil/>
                    
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
