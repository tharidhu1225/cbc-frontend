export default function SignUpPage(){
    return(
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Create Account</h2>
  
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your full name"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Create a password"
              />
            </div>
  
            <div className="mb-6">
              <label htmlFor="confirm-password" className="block text-sm font-semibold text-gray-600">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Confirm your password"
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200 ease-in-out"
            >
              Sign Up
            </button>
          </form>
  
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account? 
            <a href="#" className="text-indigo-600 hover:underline">Log in</a>
          </p>
        </div>
      </div>
  
    )
}