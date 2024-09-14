import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-base text-pink-600 font-semibold tracking-wide uppercase ">About Us</h2>
          <p className="mt-2 text-3xl leading-9 font-extrabold text-gray-900">
            Discover Our Story
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We are passionate about bringing the best books from around the world right to your fingertips.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-lg text-gray-500">
                At our bookstore, we envision a world where knowledge and stories are easily accessible to everyone. Our mission is to curate an extensive collection of literature that caters to diverse readers, from timeless classics to the latest bestsellers.
              </p>
            </div>

            {/* Values Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
              <p className="text-lg text-gray-500">
                We believe in the power of reading to inspire, educate, and transform lives. Our values are built on trust, quality, and community, ensuring that every book lover finds a place in our store.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mx-auto">
                <svg
                  className="w-8 h-8 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14v8m-4-4h8"
                  ></path>
                </svg>
              </div>
              <h4 className="mt-4 text-xl font-bold text-gray-900">Wide Selection</h4>
              <p className="mt-2 text-gray-500">
                From fiction to history, find a vast selection of books that suit your taste.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mx-auto">
                <svg
                  className="w-8 h-8 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14v8m4-8h8m-12 4h4m-2 4v8"
                  ></path>
                </svg>
              </div>
              <h4 className="mt-4 text-xl font-bold text-gray-900">Trusted Source</h4>
              <p className="mt-2 text-gray-500">
                We partner with reliable publishers and authors to bring you the best.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mx-auto">
                <svg
                  className="w-8 h-8 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.428 15.517a7.5 7.5 0 10-14.856 0M15 12v7m-3-3h6m-3 0v3"
                  ></path>
                </svg>
              </div>
              <h4 className="mt-4 text-xl font-bold text-gray-900">Customer Satisfaction</h4>
              <p className="mt-2 text-gray-500">
                Our focus is on delivering a seamless and enjoyable experience to every reader.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

