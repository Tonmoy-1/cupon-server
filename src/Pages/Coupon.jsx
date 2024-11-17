import { Link, useLoaderData, useParams } from "react-router-dom";
import ReactRating from "react-rating";
import { FaStar } from "react-icons/fa";

const Coupon = () => {
  const data = useLoaderData();
  const id = useParams();
  const singleData = data.find((singleData) => singleData._id == id.id);
  console.log(singleData.coupons);
  const coupons = singleData.coupons;
  return (
    <div>
      <div className="bg-white py-6 rounded-lg  ">
        <div className=" items-center">
          <div className="flex gap-3  flex-col items-center space-x-4">
            {/* singleData Logo */}
            <div className="mt-4 text-center">
              <h3 className="text-5xl font-semibold text-gray-800">
                {singleData.brand_name}
              </h3>
            </div>
            <img
              src={singleData.brand_logo}
              alt={singleData.brand_name}
              className="w-[900px] h-[400px]  rounded-lg "
            />
            {/* Rating */}
            <div className="flex items-center">
              <ReactRating
                emptySymbol={<FaStar className="text-gray-300" />}
                fullSymbol={<FaStar className="text-yellow-500" />}
                initialRating={singleData.rating}
                readonly
                className="text-5xl"
              />
            </div>
          </div>
          {/* ccccccccccccccc */}
          <div className="flex gap-4 mx-auto items-center justify-center m-5">
            {coupons.map((coupon) => {
              return (
                <div key={coupon.coupon_code}>
                  <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl ">
                    {/* Card Header with Gradient */}
                    <div className="bg-gradient-to-r from-teal-400 to-cyan-600 p-4 rounded-t-3xl text-center">
                      <h2 className="text-4xl font-extrabold text-white tracking-wide">
                        Exclusive Offer
                      </h2>
                      <p className="text-xl text-white mt-2">
                        Grab it before it’s gone!
                      </p>
                    </div>

                    {/* Card Body with Discount */}
                    <div className="p-8 text-center">
                      <div className="flex flex-col gap-3 justify-center items-center space-x-4">
                        <span className="text-5xl font-bold text-teal-600">
                          {coupon.coupon_type}
                        </span>
                        <span className="text-2xl font-bold text-teal-600">
                          {coupon.description}
                        </span>
                        <p className="font-bold text-xl  ">
                          Expire Date: {coupon.expiry_date}
                        </p>
                        <p className="font-bold text-xl  ">
                          Condition: {coupon.condition}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer with Button */}
                    <div className="px-8 pb-8">
                      <button className="w-full bg-teal-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transform transition-all duration-300">
                        Claim Your Coupon
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3 */}
          <div className="text-center">
            <Link to={`/singleDatas/${singleData._id}`}>
              <button className="btn text-white bg-green-600">
                View Coupons
              </button>
            </Link>
            <p>Coupons:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
