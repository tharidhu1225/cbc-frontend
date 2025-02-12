import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import ProductCard from "../../components/productCard"

export default function ProductPage(){
    const [products,setProduct] = useState([])
    const [loadingStatus,setLoadingStatus] = useState("loading")
    const [query,setQuery] = useState("");

    useEffect(
        ()=>{
           if(loadingStatus==="loading"){
              axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products").then(

                (res)=>{console.log(res.data)
                setProduct(res.data)
                setLoadingStatus("loaded");
                
                }

              ).catch(
                (err)=> toast.error("Faile to fetch products")
              )
            }

           
        },[]);

        function search(e){
            const query = e.target.value;
            setQuery(query);
            setLoadingStatus("loading");
            if(query == ""){
                axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products").then(

                    (res)=>{
                    setProduct(res.data)
                    setLoadingStatus("loaded");
                   
                    }
    
                  ).catch(
                    (err)=> toast.error("Faile to fetch products")
                  )
            }else{
                axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products/search/"+query).then(

                    (res)=>{
                    setProduct(res.data)
                    setLoadingStatus("loaded");
                    
                    }
    
                  ).catch(
                    (err)=> toast.error("Faile to fetch products")
                  )
            }
        }

    return(
        <div className="w-full h-full relative pt-5">
            <div className="absolute w-full flex justify-center">
            <input
             type="text"
             className="w-1/2 p-2 absolute text-black font-bold bg-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 z-50" 
             placeholder="Search Products"
             onChange={search}
             value={query}
            />
            </div>
        {loadingStatus=="loaded"&&<div className="w-full h-full overflow-y-scroll flex flex-wrap justify-center pt-10 relative">
            
            {
                products.map(
                    (product)=>
                        <ProductCard product={product}/>
                )
            }
        </div>}
        {loadingStatus=="loading"&&<div className="w-full h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-2 border-blue-500 border-b-blue-900 border-b-4"></div>
            </div>}
        </div>
    )
}