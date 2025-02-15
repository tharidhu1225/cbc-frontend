import React, { useState, useEffect } from "react";
import axios from "axios";

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL+"/api/orders"); // Update API URL
        setOrders(response.data);
      } catch (error) {
        setError("Failed to fetch orders. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">All Orders</h2>

      {loading && <p>Loading orders...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">#</th>
                <th className="border p-2">My Name</th>
                <th className="border p-2">Customer Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Address</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Order Items</th>
                <th className="border p-2">Payment Method</th>
                <th className="border p-2">Payment Status</th>
                <th className="border p-2">Order Status</th>
                <th className="border p-2">Tracking Number</th>
                <th className="border p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id} className="text-center border-t">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{order.myName}</td>
                  <td className="border p-2">{order.customerName}</td>
                  <td className="border p-2">{order.email}</td>
                  <td className="border p-2">{order.address}</td>
                  <td className="border p-2">{order.phone}</td>
                  <td className="border p-2">
                    {order.orderItems.map((item, i) => (
                      <div key={i}>
                        {item.productName} (x{item.quantity}) - LKR.{item.price}
                      </div>
                    ))}
                  </td>
                  <td className="border p-2">{order.paymentMethod}</td>
                  <td className="border p-2">{order.paymentStatus}</td>
                  <td className="border p-2">{order.orderStatus}</td>
                  <td className="border p-2">{order.trackingNumber || "N/A"}</td>
                  <td className="border p-2">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrdersTable;
