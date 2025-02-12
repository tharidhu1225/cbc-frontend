import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import NotFoundPage from "./productNotFound";


export default function ProductOverview(){

   const params = useParams();
   const productId = params.id;
   const [product, setProduct] = useState(null)
   const [status, setStatus] = useState("loading")
   const goTpOreder = useNavigate()
   
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

    function onBuyClick(){
       goTpOreder("/orders")
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
                    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center">
                       <div className="w-[100%] lg:w-[35%] h-full">
                       <h1 className="flex text-3xl font-bold text-gray-800 lg:hidden">{product.productName}</h1>
                       <p className="flex text-xl text-gray-600 lg:hidden">{
                        (product.price>product.lastPrice)&&
                        <span className="line-through text-red-500">LKR.{product.price}</span>
                        }<span>{"LKR"+product.lastPrice}</span></p>
                        <img src={product[0]} className="w-full h-[300px] object-cover rounded-lg"/>
                       </div>
                       <div className="w-[65%] h-full p-4">
                        <h1 className="text-3xl font-bold text-gray-800 hidden lg:block">{product.productName}</h1>
                        <h1 className="flex text-3xl font-bold text-gray-500">{product.altNames.join(" | ")}</h1>
                        <p className="text-xl text-gray-600 hidden lg:block">{
                        (product.price>product.lastPrice)&&
                        <span className="line-through text-red-500">LKR.{product.price}</span>
                        }<span>{"LKR"+product.lastPrice}</span></p>
                        <p className="flex text-lg text-gray-600 line-clamp-3">{product.description}</p>
                        <button onClick={onBuyClick} className="mt-6 px-6 md:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full text-white font-bold shadow-md transition-transform transform hover:scale-105 w-full md:w-auto">Order This</button>
                       </div>

                    </div>
                )
            }
        </div>
    )
}

