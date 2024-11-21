import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              About Coupon Saver BD
            </h3>
            <p className="text-gray-400">
              Coupon Saver BD helps you save money by collecting the best
              discount coupons for your favorite e-commerce stores in
              Bangladesh.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 cursor-pointer">
              <li>
                <a className="text-gray-400 hover:text-white transition">
                  Browse Coupons
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition">
                  Popular Stores
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full hover:bg-blue-400 transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full hover:bg-pink-500 transition"
              >
                <FaInstagram size={20} />
              </a>
              <a className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Coupon Saver BD. All rights reserved.
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline ml-1"
            >
              Your Profile
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
