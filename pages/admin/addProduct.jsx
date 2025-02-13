import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../../src/utils/mediaUpload";

export default function AddProductForm() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [alternativeNames, setAlternativeNames] = useState("");
  const [imagefiles,setImageFiles] = useState ([]);
  const [price, setPrice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate()

    async function handleSubmit(){
      const altNames = alternativeNames.split(",")

      const promisesArray = []
      
      for(let i=0; i<imagefiles.length; i++){
        promisesArray[i] = uploadMediaToSupabase(imagefiles[i])
      }
      
      const imagUrls = await Promise.all(promisesArray)


      const product = {
          productId : productId,
          productName : productName,
          altNames : altNames,
          Images : imagUrls,
          price : price,
          lastPrice : lastPrice,
          stock : stock,
          description : description
        }

        const token = localStorage.getItem("token")
        try{
          await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/products",product,{
            headers : {
              Authorization : "Beare"+token
            }
          })
          navigate("/admin/products")
          toast.success("Product added successfully")
        }catch(err){
          toast.error("Failed to add Product")
        }

        

    }

  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-50 p-12">
      <div className="w-full max-w-lg bg-white p-10 rounded-xl shadow-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Add Product Form
        </h1>
        <div>      
          {/* Product ID */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-lg font-medium mb-2" >
              Product ID
            </label>
            <input
              type="text"
              id="productId"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter Product ID"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>

          {/* Product Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-lg font-medium mb-2">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          {/* Alternative Names */}
          <div className="flex flex-col">
            <label htmlFor="altNames" className="text-gray-700 text-lg font-medium mb-2">
              Alternative Names
            </label>
            <input
              type="text"
              id="altNames"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter Alternative Names"
              value={alternativeNames}
              onChange={(e) => setAlternativeNames(e.target.value)}
            />
          </div>

          {/* Image URLs */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-lg font-medium mb-2">
              Image URLs
            </label>
            <input
              type="file"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter Image URLs"
              onChange={(e) =>{
                setImageFiles(e.target.files)
              }}
              multiple
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-lg font-medium mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* Last Price */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-lg font-medium mb-2">
              Last Price
            </label>
            <input
              type="number"
              id="lastPrice"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter Last Price"
              value={lastPrice}
              onChange={(e) => setLastPrice(e.target.value)}
            />
          </div>

          {/* Stock */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-lg font-medium mb-2">
              Stock
            </label>
            <input
              type="text"
              id="stock"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter Stock Status"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-lg font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all 
              duration-300"

              onClick={handleSubmit}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

  