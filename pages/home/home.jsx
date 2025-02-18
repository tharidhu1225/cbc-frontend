import { useNavigate } from "react-router-dom";

export default function Home() {
  const addOrder = useNavigate()
  function add(){
    addOrder("/orders")
  }
    return (
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* Hero Section */}
        <div className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center text-white text-center px-4 md:px-0" 
             style={{ backgroundImage: "url('https://ahcxsogdcpapmgxdzixu.supabase.co/storage/v1/object/public/images//home.jpg')" }}>
          <div className="bg-[#00000070] bg-opacity-60 p-6 md:p-12 rounded-xl shadow-lg w-full max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide">Experience Premium DropShipping</h1>
            <p className="text-lg md:text-xl mt-4 text-gray-200">Discover exclusive deals on high-end products</p>
            <button onClick={add} className="mt-6 px-6 md:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full text-white font-bold shadow-md transition-transform transform hover:scale-105 w-full md:w-auto">
              Add Your Orders
            </button> 
          </div>
        </div>
        </div>//edit
    );
  }
  