import React from "react";
import { Link } from "react-router-dom";
import { BsGraphUp, BsBox, BsPeople, BsCartCheck } from "react-icons/bs";

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white flex flex-col p-5 space-y-6">
        <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
        <nav className="flex flex-col space-y-4">
          <Link className="flex items-center space-x-3 hover:bg-blue-500 px-4 py-2 rounded transition" to="/admin/dashboard">
            <BsGraphUp size={20} />
            <span>Dashboard</span>
          </Link>
          <Link className="flex items-center space-x-3 hover:bg-blue-500 px-4 py-2 rounded transition" to="/admin/products">
            <BsBox size={20} />
            <span>Products</span>
          </Link>
          <Link className="flex items-center space-x-3 hover:bg-blue-500 px-4 py-2 rounded transition" to="/admin/orders">
            <BsCartCheck size={20} />
            <span>Orders</span>
          </Link>
          <Link className="flex items-center space-x-3 hover:bg-blue-500 px-4 py-2 rounded transition" to="/admin/customers">
            <BsPeople size={20} />
            <span>Customers</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Quick stats and recent orders.</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-4 rounded shadow flex items-center">
            <BsCartCheck size={30} className="text-blue-600" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">120</h2>
              <p className="text-gray-600">Total Orders</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex items-center">
            <BsGraphUp size={30} className="text-green-600" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">$5,230</h2>
              <p className="text-gray-600">Total Sales</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex items-center">
            <BsPeople size={30} className="text-yellow-600" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">340</h2>
              <p className="text-gray-600">Total Users</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex items-center">
            <BsBox size={30} className="text-red-600" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">85</h2>
              <p className="text-gray-600">Total Products</p>
            </div>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white p-6 rounded shadow mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Order ID</th>
                <th className="border p-2">Customer</th>
                <th className="border p-2">Amount</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center border-t">
                <td className="border p-2">#12345</td>
                <td className="border p-2">John Doe</td>
                <td className="border p-2">$120</td>
                <td className="border p-2 text-green-600 font-bold">Completed</td>
              </tr>
              <tr className="text-center border-t">
                <td className="border p-2">#12346</td>
                <td className="border p-2">Jane Smith</td>
                <td className="border p-2">$95</td>
                <td className="border p-2 text-yellow-600 font-bold">Pending</td>
              </tr>
              <tr className="text-center border-t">
                <td className="border p-2">#12347</td>
                <td className="border p-2">Alice Brown</td>
                <td className="border p-2">$230</td>
                <td className="border p-2 text-red-600 font-bold">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
