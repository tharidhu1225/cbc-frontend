import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../../src/utils/mediaUpload";

export default function EditProductForm() {
  const location = useLocation()
  const navigate = useNavigate()
  const product = location.state.product

  const altNames = product.altNames.join(",") //add to alt names But it is a Array

  if(!product){
    navigate("/admin/products")
  }
  const [productId, setProductId] = useState(product.productId);
  const [productName, setProductName] = useState(product.productName);
  const [alternativeNames, setAlternativeNames] = useState(altNames);
  const [imagefiles,setImageFiles] = useState ([]);
  const [price, setPrice] = useState(product.price);
  const [lastPrice, setLastPrice] = useState(product.lastPrice);
  const [stock, setStock] = useState(product.stock);
  const [description, setDescription] = useState(product.description);
  
  

    async function handleSubmit(){
      const altNames = alternativeNames.split(",")

      const promisesArray = []
      let imagUrls = product.images
      if(imagefiles.length > 0){

      for(let i=0; i<imagefiles.length; i++){
        promisesArray[i] = uploadMediaToSupabase(imagefiles[i])
       }
      
        imagUrls = await Promise.all(promisesArray)
      }

      const productData = {
          productId : productId,
          productName : productName,
          altNames : altNames,
          images : imagUrls,
          price : price,
          lastPrice : lastPrice,
          stock : stock,
          description : description
        }

        const token = localStorage.getItem("token")
        try{
          await axios.put(import.meta.env.VITE_BACKEND_URL+"/api/products"+product.productId,productData,{
            headers : {
              Authorization : "Beare"+token
            }
          })
          navigate("/admin/products")
          toast.success("Product Updated successfully")
        }catch(err){
          toast.error("Failed to Update Product")
        }

        

    }

  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-50 p-12">
      <div className="w-full max-w-lg bg-white p-10 rounded-xl shadow-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Edit Product Form
        </h1>
        <div>      
          {/* Product ID */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-lg font-medium mb-2">
              Product ID
            </label>
            <input
              disabled
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
              id="imageUrls"
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
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

  