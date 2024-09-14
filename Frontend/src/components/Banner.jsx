import React, { useState } from "react";
import banner from "../../public/banner.png";

const Banner = () => {
  const [email, setEmail] = useState(""); // State for email input

  // Handle subscription click
  const handleSubscribe = () => {
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail(""); // Clear the email input after successful submission
    } else {
      alert("Please enter a valid email address!");
    }
  };

  // Handle explore button click (navigate to Goodreads History Books page)
  const handleExplore = () => {
    window.location.href = "https://www.goodreads.com/list/show/1362.Best_History_Books_";
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center my-10 space-y-8 md:space-y-0">
      {/* Text Section */}
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-8 md:mt-32">
        <div className="space-y-6">
          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold leading-tight text-gray-800 dark:text-white">
            Hello, Welcome to Learn Something{" "}
            <span className="text-pink-500">New Every Day!!!</span>
          </h1>
          {/* Subheading */}
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Welcome to our bookstore, where a world of literature awaits you.
            Explore an extensive collection of books, all at your fingertips.
            Whether you're seeking to indulge in a new adventure or gain
            knowledge, start your literary journey with us today and discover
            the joy of reading.
          </p>

          {/* Email Input Section */}
          <div className="flex items-center space-x-3">
            <label className="flex items-center w-full bg-gray-100 dark:bg-gray-800 p-3 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6 text-gray-400"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent focus:outline-none text-gray-700 dark:text-white w-full pl-3"
                placeholder="Enter your email"
              />
            </label>
            <button
              onClick={handleSubscribe}
              className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Call to Action Button */}
        <button
          onClick={handleExplore}
          className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-600 transition-transform transform hover:scale-105"
        >
          Explore More
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full order-1 md:w-1/2 md:order-2 flex justify-center relative">
        <div className="relative overflow-hidden rounded-full shadow-2xl w-90 h-90 bg-gradient-to-br from-purple-200 to-pink-500 mt-5">
          <img
            src={banner}
            className="object-cover w-full h-full mix-blend-overlay"
            alt="Books Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
