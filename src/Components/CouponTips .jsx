const Tips = () => {
  return (
    <section className=" py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Tips & Guides</h2>
        <p className="text-lg text-gray-600 mb-12">
          Discover the best ways to save money with our expert tips and guides
          for using s and discounts efficiently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tip 1 */}
          <div className="bg-white rounded-lg border-2 border-gray-300 shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              How to Stack s for Maximum Savings
            </h3>
            <p className="text-gray-600 mb-4">
              Learn how to combine multiple s and promo codes to get the biggest
              discounts on your purchases. Maximize your savings without any
              hassle!
            </p>
            <a className="text-blue-600 hover:text-blue-800 font-semibold">
              Read More →
            </a>
          </div>

          {/* Tip 2 */}
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Best Times to Shop for s and Discounts
            </h3>
            <p className="text-gray-600 mb-4">
              Discover the best times of the year and day to shop for the most
              valuable discounts. Plan ahead and get the best deals on your
              favorite products!
            </p>
            <a className="text-blue-600 hover:text-blue-800 font-semibold">
              Read More →
            </a>
          </div>

          {/* Tip 3 */}
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              How to Use s on Mobile Apps
            </h3>
            <p className="text-gray-600 mb-4">
              Learn how to easily use codes on mobile shopping apps. Stay savvy
              and never miss a discount while shopping on your phone!
            </p>
            <a className="text-blue-600 hover:text-blue-800 font-semibold">
              Read More →
            </a>
          </div>

          {/* Tip 4 */}
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Avoiding Expiry – How to Track Your s
            </h3>
            <p className="text-gray-600 mb-4">
              Never miss out on an expiring again! Learn how to track and
              organize your s to ensure you never lose a great deal.
            </p>
            <a className="text-blue-600 hover:text-blue-800 font-semibold">
              Read More →
            </a>
          </div>

          {/* Tip 5 */}
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              How to Find Hidden Codes Online
            </h3>
            <p className="text-gray-600 mb-4">
              There are hidden gems all over the web! Learn where to look for
              codes that aren&apos;t always shown on the store&apos;s website.
            </p>
            <a className="text-blue-600 hover:text-blue-800 font-semibold">
              Read More →
            </a>
          </div>

          {/* Tip 6 */}
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              The Best Websites and Apps to Use
            </h3>
            <p className="text-gray-600 mb-4">
              Not all websites are created equal. Get the inside scoop on the
              best platforms for finding trustworthy and updated codes.
            </p>
            <a className="text-blue-600 hover:text-blue-800 font-semibold">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
