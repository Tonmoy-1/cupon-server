/* eslint-disable react/prop-types */

import { FaCircle, FaStar } from "react-icons/fa";
import ReactRating from "react-rating";
import { Link } from "react-router-dom";
const SinglecolCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1  w-10/12 mx-auto gap-6 py-4">
      {data.map((brand) => (
        <div
          key={brand._id}
          className="bg-white py-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 items-center relative">
            {/* Brand Logo Section */}
            <div className="flex flex-col items-center space-x-4">
              <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="w-32 h-32 sm:w-52 sm:h-52 rounded-lg object-contain"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                  {brand.brand_name}
                </h3>
              </div>

              {/* Rating Section */}
              <div className="flex items-center mt-2">
                <ReactRating
                  emptySymbol={<FaStar className="text-gray-300" />}
                  fullSymbol={<FaStar className="text-yellow-500" />}
                  initialRating={brand.rating}
                  readonly
                  className="text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Brand Description Section */}
            <div className="text-center sm:text-left mt-4 sm:mt-0">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                {brand.brand_name}
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 mt-2">
                {brand.description}
              </p>
            </div>

            {/* View Coupons Button */}
            <div className="text-center mt-4 sm:mt-0">
              <Link to={`/brands/${brand._id}`}>
                <button className="btn text-white bg-gradient-to-r from-teal-400 to-cyan-600 px-6 py-3 rounded-md">
                  View Coupons
                </button>
              </Link>
            </div>

            <div className="absolute top-0 md:right-5 right-0">
              {brand.isSaleOn && (
                <div className="md:flex gap-3 items-center">
                  <FaCircle className="text-green-600 text-lg hidden md:block"></FaCircle>
                  <p className=" animate__animated animate__bounce animate__infinite animate__slow text-lg font-bold">
                    Sale is On
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SinglecolCard;
