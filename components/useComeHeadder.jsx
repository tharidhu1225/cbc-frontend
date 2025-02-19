import { useNavigate } from "react-router-dom";

export default function UserCome() {
  const navigate = useNavigate();

  function Log() {
    navigate("/login");
  }

  return (
    <>
      {/* Header with Glassmorphism Effect */}
      <header className="fixed top-0 left-0 w-full bg-[#083171] shadow-lg flex items-center justify-between px-6 py-4 md:py-5 rounded-b-2xl z-50">
        {/* Logo */}
        <img
          src="/logo2.png"
          alt="Company Logo"
          className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-white shadow-md transition-transform transform hover:scale-110"
        />

        {/* Title */}
        <h2 className="text-lg md:text-2xl font-extrabold text-white tracking-wide text-center drop-shadow-lg">
          Welcome to TN International
        </h2>

        {/* Login Button */}
        <button
          onClick={Log}
          className="px-5 md:px-7 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 focus:ring-4 focus:ring-blue-300"
        >
          Login
        </button>
      </header>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative bg-gray-900">
        {/* Background Image */}
        <img
          src="/welcome.jpg"
          alt="Welcome Image"
          className=" absolute inset-0 w-full h-full object-cover brightness-75"
        />

      </div>
    </>
  );
}
