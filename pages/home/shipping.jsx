import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  // Add item to order
  const addItem = () => {
    setItems([...items, { productName: "", quantity: 1, price: 0 }]);
  };

  // Update item fields
  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  // Submit order
  const handleOrder = async () => {
    if (!name || !email || !address || !phone || items.length === 0) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/orders", {
        name, email, address, phone, orderItems: items
      });

      if (response.status === 201) {
        toast.success("Order placed successfully!");
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (error) {
      toast.error("Failed to place order.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Toaster />
      <h1 className="text-2xl font-bold text-center mb-4">Checkout</h1>

      {/* Add Items Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Order Items</h2>
        {items.map((item, index) => (
          <div key={index} className="flex space-x-2 mb-2">
            <input type="text" placeholder="Product Name"
              className="border p-2 flex-1"
              onChange={(e) => updateItem(index, "productName", e.target.value)}
            />
            <input type="number" placeholder="Qty"
              className="border p-2 w-20"
              onChange={(e) => updateItem(index, "quantity", parseInt(e.target.value))}
            />
            <input type="number" placeholder="Price"
              className="border p-2 w-24"
              onChange={(e) => updateItem(index, "price", parseFloat(e.target.value))}
            />
          </div>
        ))}
        <button className="mt-2 bg-blue-500 text-white p-2 rounded" onClick={addItem}>Add Item</button>
      </div>

      {/* Customer Details */}
      <div className="mb-4">
        <label className="block">Full Name</label>
        <input type="text" className="border p-2 w-full"
          onChange={(e) => setName(e.target.value)} placeholder="Enter name"
        />
      </div>

      <div className="mb-4">
        <label className="block">Email</label>
        <input type="email" className="border p-2 w-full"
          onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"
        />
      </div>

      <div className="mb-4">
        <label className="block">Address</label>
        <input type="text" className="border p-2 w-full"
          onChange={(e) => setAddress(e.target.value)} placeholder="Enter address"
        />
      </div>

      <div className="mb-4">
        <label className="block">Phone Number</label>
        <input type="tel" className="border p-2 w-full"
          onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number"
        />
      </div>

      {/* Submit Order */}
      <button className="bg-green-500 text-white p-2 w-full rounded"
        onClick={handleOrder}>Place Order</button>
    </div>
  );
}