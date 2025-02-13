import { Link } from "react-router-dom"

export default function ProductCard(props){

    return(
        <Link to={`/productInfo/${props.product.productId}`}>
            <div className="w-[300px] h-[400px] m-[40px] rounded-xl shadow-lg shadow-blue-900 hover:shadow-[#f3f9fa] hover:border-[3px] hover:border-[#032c70] overflow-hidden flex flex-col">
                <img src={props.product.Images} alt={props.product.name} className="h-[65%] w-full object-cover"/>
                <div className="max-h-[35%] h-[35%] p-4 flex flex-col justify-between">
                <h1 className="text-xl font-bold text-center">{props.product.productName}</h1>
                <p className="text-left text-lg text-red-400 font-semibold">LKR.{props.product.lastPrice.toFixed(2)}</p>
                {
                    props.product.lastPrice<props.product.price&&
                    <p className="text-left text-xl text-gray-500 font-semibold line-through">LKR.{props.product.price.toFixed(2)}</p>
                }
                
                </div>
                
            </div>
        </Link>
    )
}