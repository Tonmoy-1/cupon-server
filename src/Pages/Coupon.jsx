import { Link, useLoaderData, useParams } from "react-router-dom";
import ReactRating from "react-rating";
import { FaStar } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const Coupon = () => {
  const data = useLoaderData();
  const id = useParams();
  const singleData = data.find((singleData) => singleData._id == id.id);

  const coupons = singleData.coupons;
  return (
    <div>
      <div className="bg-blue-950 py-6">
        <div className="items-center">
          <div className="flex flex-col items-center gap-3">
            {/* singleData Logo */}
            <div className="my-8 w-10/12 text-center">
              <h3 className="text-4xl md:text-7xl font-semibold text-white">
                {singleData.brand_name}
              </h3>
            </div>
            <img
              src={singleData.brand_logo}
              alt={singleData.brand_name}
              className="w-full md:w-[1050px] h-auto md:h-[500px] rounded-lg"
            />
            {/* Rating */}
            <div className="flex items-center">
              <ReactRating
                emptySymbol={<FaStar className="text-gray-300" />}
                fullSymbol={<FaStar className="text-yellow-500" />}
                initialRating={singleData.rating}
                readonly
                className="text-3xl md:text-5xl"
              />
            </div>
          </div>

          {/* Coupons */}
          <div className="flex flex-wrap gap-4 mx-auto items-center justify-center m-5">
            {coupons.map((coupon) => {
              return (
                <div
                  className="w-full sm:w-[500px] md:w-[500px] lg:w-[500px]"
                  key={coupon.coupon_code}
                >
                  <div className="w-full mx-auto pb-3 bg-white rounded-3xl shadow-xl">
                    {/* Card Header with Gradient */}
                    <div className="bg-gradient-to-r from-teal-400 to-cyan-600 p-4 rounded-t-3xl text-center">
                      <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-wide">
                        Exclusive Offer
                      </h2>
                      <p className="text-lg sm:text-xl text-white mt-2">
                        Grab it before it’s gone!
                      </p>
                    </div>

                    {/* Card Body with Discount */}
                    <div className="p-8 text-center">
                      <div className="flex flex-col gap-3 justify-center items-center space-x-4">
                        <span className="text-3xl sm:text-5xl font-bold text-teal-600">
                          {coupon.coupon_type}
                        </span>
                        <span className="text-sm sm:text-xl font-bold text-teal-600">
                          {coupon.description}
                        </span>
                        <p className="font-bold text-sm sm:text-xl">
                          Expire Date: {coupon.expiry_date}
                        </p>
                        <p className="font-bold text-sm sm:text-xl">
                          Condition: {coupon.condition}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer with Button */}
                    <div className="flex justify-center items-center gap-2 text-center rounded-full">
                      <p className="text-white font-bold rounded-xl bg-gradient-to-r from-teal-400 to-cyan-600 text-lg sm:text-xl p-3">
                        {coupon.coupon_code}
                      </p>
                      <CopyToClipboard text={coupon.coupon_code}>
                        <button
                          onClick={() =>
                            toast.success(`Copied: ${coupon.coupon_code}`)
                          }
                          className="btn btn-outline text-sm sm:text-base"
                        >
                          Copy Code
                        </button>
                      </CopyToClipboard>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Use Now Button */}
          <div className="text-center mt-6">
            <Link to={`/brands`}>
              <button className="btn text-lg sm:text-xl text-white bg-gradient-to-r from-teal-400 to-cyan-600 py-2 px-4">
                Use Now
              </button>
            </Link>
            <p className="mt-4">Coupons:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
