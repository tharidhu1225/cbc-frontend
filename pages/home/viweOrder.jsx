import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function MyOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            return;
        }
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/orders", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setOrders(res.data);
        }).catch(() => {
            toast.error("Failed to Get Orders");
        });
    }, []);

    const updateStatus = (orderId, newStatus) => {
        const token = localStorage.getItem("token");
        if (!token) return;
        
        axios.put(import.meta.env.VITE_BACKEND_URL + `/api/orders/${orderId}`, 
        { status: newStatus }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            toast.success("Order status updated!");
            setOrders((prevOrders) => 
                prevOrders.map(order => 
                    order._id === orderId ? { ...order, status: newStatus } : order
                )
            );
        }).catch(() => {
            toast.error("Failed to update status");
        });
    };

    return (
        <div className="w-full h-full flex flex-col items-center p-4 overflow-x-auto">
            <h1 className="text-2xl font-bold mb-4">My Orders</h1>
            <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Address</th>
                            <th className="border p-2">Phone</th>
                            <th className="border p-2">Product</th>
                            <th className="border p-2">Qty</th>
                            <th className="border p-2">Price</th>
                            <th className="border p-2">Date</th>
                            <th className="border p-2">Total</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? orders.map((order, index) => (
                            order.orderItems.map((item, itemIndex) => (
                                <tr key={`${index}-${itemIndex}`} className="text-center cursor-pointer" onClick={() => setSelectedOrder(order)}>
                                    {itemIndex === 0 && (
                                        <>
                                            <td rowSpan={order.orderItems.length} className="border p-2">{order.name}</td>
                                            <td rowSpan={order.orderItems.length} className="border p-2">{order.address}</td>
                                            <td rowSpan={order.orderItems.length} className="border p-2">{order.phone}</td>
                                        </>
                                    )}
                                    <td className="border p-2">{item.productName}</td>
                                    <td className="border p-2">{item.quantity}</td>
                                    <td className="border p-2">LKR.{item.price.toFixed(2)}</td>
                                    {itemIndex === 0 && (
                                        <>
                                            <td rowSpan={order.orderItems.length} className="border p-2">{new Date(order.date).toLocaleDateString()}</td>
                                            <td rowSpan={order.orderItems.length} className="border p-2 font-bold">LKR.{order.orderItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}</td>
                                        </>
                                    )}
                                    <td className="border p-2">
                                        <select 
                                            value={order.status} 
                                            onChange={(e) => updateStatus(order._id, e.target.value)} 
                                            className="border p-1"
                                        >
                                            <option value="Pending">Pending</option>
                                           
                                        </select>
                                    </td>
                                    <td className="border p-2">{order.paymentMethod}</td> {/* Added payment method here */}
                                </tr>
                            ))
                        )) : (
                            <tr>
                                <td colSpan="10" className="border p-4 text-center">No Orders Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {selectedOrder && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg overflow-auto max-h-[80vh]">
                        <h2 className="text-xl font-bold mb-4">Order Details</h2>
                        <p><strong>Name:</strong> {selectedOrder.name}</p>
                        <p><strong>Address:</strong> {selectedOrder.address}</p>
                        <p><strong>Phone:</strong> {selectedOrder.phone}</p>
                        <p><strong>Date:</strong> {new Date(selectedOrder.date).toLocaleDateString()}</p>
                        <h3 className="mt-4 font-bold">Products:</h3>
                        <ul className="text-sm md:text-base">
                            {selectedOrder.orderItems.map((item, index) => (
                                <li key={index} className="border-b py-2">
                                    <p><strong>Product:</strong> {item.productName}</p>
                                    <p><strong>Qty:</strong> {item.quantity}</p>
                                    <p><strong>Price:</strong> LKR.{item.price.toFixed(2)}</p>
                                </li>
                            ))}
                        </ul>
                        
                        <p className="mt-4"><strong>Payment Method:</strong> {selectedOrder.paymentMethod}</p> {/* Display payment method here */}
                        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full" onClick={() => setSelectedOrder(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
