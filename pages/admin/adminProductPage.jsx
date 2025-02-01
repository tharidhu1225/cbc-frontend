import axios from "axios"
import { useEffect, useState } from "react"

export default function AdminProductPage(){

   
   const [products,setProducts] = useState(
    [
        {
            "_id": "6798b3f498f26ca6e8740ba5",
            "productId": "ABC123",
            "productName": "Wireless Bluetooth Headphones",
            "altNames": [
                "Wireless Headphones",
                "Bluetooth Headset"
            ],
            "Images": [
                "https://example.com/images/product1.jpg",
                "https://example.com/images/product1_2.jpg"
            ],
            "price": 59.99,
            "lastPrice": 79.99,
            "stock": "In Stock",
            "description": "High-quality wireless Bluetooth headphones with noise-cancelling features.",
            "__v": 0
        },
        {
            "_id": "6798b52ed114e81009838504",
            "productId": "ari buds",
            "productName": "Wireless Bluetooth Headphones",
            "altNames": [
                "Wireless Headphones",
                "Bluetooth Headset"
            ],
            "Images": [
                "https://example.com/images/product1.jpg",
                "https://example.com/images/product1_2.jpg"
            ],
            "price": 59.99,
            "lastPrice": 79.99,
            "stock": "In Stock",
            "description": "High-quality wireless Bluetooth headphones with noise-cancelling features.",
            "__v": 0
        },
        {
            "_id": "6798b577d114e81009838509",
            "productId": "p0012",
            "productName": "Wireless Bluetooth Headphones",
            "altNames": [
                "Wireless Headphones",
                "Bluetooth Headset"
            ],
            "Images": [
                "https://example.com/images/product1.jpg",
                "https://example.com/images/product1_2.jpg"
            ],
            "price": 59.99,
            "lastPrice": 79.99,
            "stock": "In Stock",
            "description": "High-quality wireless Bluetooth headphones with noise-cancelling features.",
            "__v": 0
        }
    ]
   )

   useEffect(
    ()=>{
       axios.get("http://localhost:5000/api/products").then(
        (res)=>{
            console.log(res.data)
            setProducts(res.data)
        }
       )
    },[]
)

   axios.get("http://localhost:5000/api/products").then((res)=>{ 
   
    

   })


    return(
        <div>
            <h1>Admin Product page</h1>
            {
                products.map(
                    (product,index)=>{
                        return(
                            <div key={index}>
                                {index}
                                {product.productName}
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}