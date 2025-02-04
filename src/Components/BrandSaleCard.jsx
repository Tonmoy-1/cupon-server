/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const BrandSaleCard = ({ data }) => {
  const saleBrands = data.filter((brand) => brand.isSaleOn);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6 p-4">
      {saleBrands.map((brand) => (
        <div
          data-aos="fade-left"
          key={brand._id}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-gray-300 border-2"
        >
          <div className="flex flex-col items-center text-center">
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-36 h-36 object-cover rounded-full mb-4"
            />
            <h3 className="text-3xl font-semibold text-gray-800 mb-2">
              {brand.brand_name}
            </h3>
            <p className="text-lg text-gray-700 mb-2">
              Total Coupons: {brand.coupons.length}
            </p>
            <p className="text-lg text-gray-500 mb-2">
              Category: {brand.category}
            </p>
            {brand.isSaleOn && (
              <span className="mt-4 px-7 py-3 bg-gradient-to-r from-teal-400 to-cyan-600 text-sm font-bold text-white rounded-full">
                Sale On
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandSaleCard;
