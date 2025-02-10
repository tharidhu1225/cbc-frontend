import { useEffect, useState } from "react"
import { loadCart } from "../../src/utils/cartFunction"
import CartCard from "../../components/cartCard"
import axios from "axios"


export default function Cart(){
    const [cart,setCart]=useState([])
    const [total,setTotal]=useState(0)
    const [labeledTotal,setLabeledTotal]=useState(0)

    useEffect(
        ()=>{
           setCart(loadCart())
           axios.post(import.meta.env.VITE_BACKEND_URL+"/api/orders/quote",{
            orderedItems : loadCart()
           }).then(
            (res)=>{
                console.log(res.data)
                setTotal(res.data.total)
                setLabeledTotal(res.data.lebeledTotal)
            }
           )         
        } , []
    )


    function onOderChekOutClick(){
        const token = localStorage.getItem("token")
        if(token == null){
            return;
        }

        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/orders",
            {orderedItems : cart,
                name:"John Doe",
                address:"123,Galle,Colombo",
                phone:"0767412346",
            },
            {headers: {
            Authorization: "Bearer " + token,}

          }).then(
            (res)=>{
                console.log(res.data)
            }
        )
    }

    return(
        <div className="w-full h-full overflow-y-scroll flex flex-col items-end">
            <table className="w-full">
              <thead>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Product Id</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
              </thead>
            {
                cart.map(
                    (item)=>{
                        return(
                            <CartCard key={item.productId} productId={item.productId} qty={item.qty}/>
                        )
                    }
                )
            }
            </table>
            <h1 className="text-2xl font-bold text-orange-600">Total : LKR.{labeledTotal.toFixed(2)}</h1>
            <h1 className="text-2xl font-bold text-orange-600">Discount : LKR.{(labeledTotal-total).toFixed(2)}</h1>
            <h1 className="text-2xl font-bold text-orange-600">Grand Total : LKR.{total.toFixed(2)}</h1>
            <button onClick={onOderChekOutClick} className="bg-orange-400 text-white p-2 rounded-lg w-[300px] hover:bg-orange-300">Checkout</button>
        </div>
    )
}