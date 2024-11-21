import { useLoaderData } from "react-router-dom";
import SinglecolCard from "../Components/SinglecolCard";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Brands = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
  };

  const data = useLoaderData();

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full mx-auto mt-1 bg-gradient-to-r from-teal-400 to-cyan-600 h-[300px] rounded-xl text-white py-4 px-6 ">
        <div className="mt-20">
          <h1 className="text-2xl md:text-4xl font-semibold text-center">
            Explore Our All Brands and Find Your Best Coupon
          </h1>
          <h2 className="w-11/12 mx-auto mt-5 text-center text-sm sm:text-base md:text-lg lg:w-8/12">
            Discover a diverse range of top brands, each offering unique
            products and opportunities. Explore and choose the perfect match for
            your needs, and unlock the potential for your future success.
          </h2>
        </div>
      </div>

      {/* Search Section */}
      <div className="flex justify-center p-3 mt-8">
        <div className="w-full max-w-lg">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full py-3 pl-10 pr-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button
              type="submit"
              className="absolute top-0 left-0 mt-3 ml-3 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <FaSearch size={20} />
            </button>
          </form>
        </div>
      </div>

      {/* Brands List */}
      <div className="mt-8">
        <SinglecolCard data={data} />
      </div>
    </div>
  );
};

export default Brands;
