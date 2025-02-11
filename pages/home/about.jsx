export default function About(){
    return (
        <div className="min-h-screen bg-gray-50 font-sans flex items-center justify-center p-4 md:p-8">
          <div className="max-w-4xl w-full bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-xl md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">About Us</h2>
            <p className="text-gray-600 text-center mb-4 md:mb-8 text-sm md:text-base">
              Welcome to TN International, your number one source for the best products. 
              We're dedicated to giving you the best shopping experience, with a focus on quality, customer service, and uniqueness.
            </p>
            
            <div className="space-y-4 md:space-y-6">
              <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-md md:text-xl font-semibold text-gray-700">Our Mission</h3>
                <p className="text-gray-600 text-sm md:text-base mt-2">
                  To provide top-notch products that add value to our customers' lives while maintaining excellence in service and innovation.
                </p>
              </div>
              
              <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-md md:text-xl font-semibold text-gray-700">Our Vision</h3>
                <p className="text-gray-600 text-sm md:text-base mt-2">
                  To be the most trusted and customer-centric online store, offering high-quality and innovative products worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}