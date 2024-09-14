import React from "react";

function Cards({ item }) {
  // Check if item is available
  if (!item) {
    return null; // Do not render if item is undefined
  }

  const handleBuyNowClick = () => {
    // Open the book's Open Library link in a new tab
    window.open("https://openlibrary.org/works/OL82560W", "_blank");
  };

  return (
    <>
      <div className="mt-4 my-3 p-3 perspective-1000">
        <div className="card w-full max-w-xs bg-white shadow-lg hover:shadow-2xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border dark:border-gray-700 hover:rotateX-3 hover:rotateY-3 hover:shadow-xl relative hover:shadow-pink-500/50">
          {/* Image */}
          <figure className="relative h-48 w-full overflow-hidden">
            <img
              src={item.image || "/default-image.jpg"}
              alt={item.name || "No Name"}
              className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
            />
          </figure>

          {/* Card Body */}
          <div className="card-body p-4">
            <h2 className="card-title text-lg font-semibold text-gray-800 dark:text-gray-200">
              {item.name || "Untitled"} {/* Fallback name */}
              {item.category && (
                <div className="badge badge-secondary ml-2 bg-pink-500 text-white">
                  {item.category}
                </div>
              )}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {item.title || "No description available."}
            </p>

            {/* Card Footer */}
            <div className="card-actions flex justify-between items-center mt-4">
              <div className="text-pink-500 font-bold text-lg">
                ${item.price !== undefined ? item.price : "N/A"}
              </div>
              <div
                className="cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-md"
                onClick={handleBuyNowClick} // Open the Open Library link
              >
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;


