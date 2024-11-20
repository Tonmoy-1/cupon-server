import ReactRating from "react-rating";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          What Our Users Are Saying
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Hear from our happy users about how Coupon Saver BD is helping them
          save money and find the best deals!
        </p>

        {/* Review Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6"
            >
              {/* User Avatar and Name */}
              <div className="flex items-center space-x-4 mb-2">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-16 h-16 rounded-full border-2 border-yellow-500"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {review.name}
                  </h3>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                <ReactRating
                  initialRating={review.rating}
                  readonly
                  emptySymbol={<FaStar className="text-gray-300" />}
                  fullSymbol={<FaStar className="text-yellow-500" />}
                />
              </div>

              {/* Review Text */}
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>

        {/* Add a Review Button */}
        <div className="mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            Add Your Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
