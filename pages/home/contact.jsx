export default function ContactUs() {
    return (
      <div className="min-h-screen bg-gray-50 font-sans flex items-center justify-center p-4 md:p-8">
        <div className="max-w-4xl w-full bg-white p-6 md:p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">Contact Us</h2>
          <p className="text-gray-600 text-center mb-6 md:mb-8 text-sm md:text-base">Have any questions? We'd love to hear from you.</p>
          
          <form className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold text-sm md:text-base">Name</label>
              <input type="text" className="w-full mt-1 p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" required />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold text-sm md:text-base">Email</label>
              <input type="email" className="w-full mt-1 p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" required />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold text-sm md:text-base">Message</label>
              <textarea className="w-full mt-1 p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" rows="4" md:rows="5" placeholder="Write your message" required></textarea>
            </div>
            
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 md:p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  