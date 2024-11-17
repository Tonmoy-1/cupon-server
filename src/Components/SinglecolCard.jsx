/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa"; // React Icons (for stars)
import ReactRating from "react-rating";
const SinglecolCard = ({ data }) => {
  console.log(data);

  return (
    <div className="grid grid-cols-1 w-10/12 mx-auto gap-6 py-4">
      {data.map((brand) => (
        <div
          key={brand._id}
          className="bg-white py-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="grid grid-cols-3 gap-2 items-center">
            <div className="flex col-span-1 flex-col items-center space-x-4">
              {/* Brand Logo */}
              <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="w-52 h-52 rounded-lg object-contain"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {brand.brand_name}
                </h3>
              </div>

              {/* Rating */}
              <div className="flex items-center">
                <ReactRating
                  emptySymbol={<FaStar className="text-gray-300" />}
                  fullSymbol={<FaStar className="text-yellow-500" />}
                  initialRating={brand.rating}
                  readonly
                  className="text-sm"
                />
              </div>
            </div>

            <div className="col-span-1">
              <div className="mt-4 text-center">
                <h3 className="text-4xl font-semibold text-gray-800">
                  {brand.brand_name}
                </h3>
                <p className="text-lg text-gray-600 mt-2">
                  {brand.description}
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="text-center">
              <button className="btn text-white bg-green-600">
                View Coupons
              </button>
              <p>Coupons:</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SinglecolCard;
