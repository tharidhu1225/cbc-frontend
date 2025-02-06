import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NotFoundPage from "./productNotFound";
import { addToCart } from "../../src/utils/cartFunction";
import toast from "react-hot-toast";

export default function ProductOverview(){

   const params = useParams();
   const productId = params.id;
   const [product, setProduct] = useState(null)
   const [status, setStatus] = useState("loading")
   
   useEffect(
     ()=>{
      axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products/"+productId).then((res)=>{
        console.log(res.data)

        if(res.data == null){
            setStatus("not-found")
        }

        if(res.data != null){
            setProduct(res.data)
             setStatus("found")
        }
     })
    }
    ,[])

    function onAddtoCardClick(){
        addToCart(product.productId,1)
        toast.success(product.productId+"added to cart")
    }

    return(
        <div className="w-full h-[calc(100vh-100px)]">
            {
                status == "loading"&&(
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-2 border-blue-500 border-b-blue-900 border-b-4">

                        </div>
                    </div>
                )
            }
            {
                status == "not-found"&&(
                   <NotFoundPage/>
                )
            }
            {
                status == "found"&&(
                    <div className="w-full h-full flex items-center justify-center">
                       <div className="w-[35%] h-full">
                        <img src={product[0]} className="w-full h-[300px] object-cover rounded-lg"/>
                       </div>
                       <div className="w-[65%] h-full p-4">
                        <h1 className="flex text-3xl font-bold text-gray-800">{product.productName}</h1>
                        <h1 className="flex text-3xl font-bold text-gray-500">{product.altNames.join(" | ")}</h1>
                        <p className="flex text-xl text-gray-600">{
                        (product.price>product.lastPrice)&&
                        <span className="line-through text-red-500">LKR.{product.price}</span>
                        }<span>{"LKR"+product.lastPrice}</span></p>
                        <p className="flex text-lg text-gray-600 line-clamp-3">{product.description}</p>
                        <button onClick={onAddtoCardClick} className="bg-orange-500 text-white p-2 rounded-lg">Add to cart</button>
                       </div>

                    </div>
                )
            }
        </div>
    )
}

