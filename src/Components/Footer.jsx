import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Left Side  */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-12 mb-4" />
          <span className="text-sm md:text-base text-gray-400">
            © 2024 CouponCollect. All rights reserved.
          </span>
        </div>

        {/* Center */}
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-10">
          <a
            href="/home"
            className="hover:text-yellow-400 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="/brands"
            className="hover:text-yellow-400 transition-all duration-300"
          >
            Brands
          </a>
          <a
            href="/about-dev"
            className="hover:text-yellow-400 transition-all duration-300"
          >
            About Dev
          </a>
          <a
            href="/faq"
            className="hover:text-yellow-400 transition-all duration-300"
          >
            FAQ
          </a>
        </div>

        {/* Right Side  */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-all duration-300"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-all duration-300"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition-all duration-300"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 transition-all duration-300"
            >
              <FaGithub size={28} />
            </a>
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-4">
            <a
              href="/contact"
              className="text-lg text-yellow-300 hover:text-yellow-400 transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="/profile"
              className="text-lg text-yellow-300 hover:text-yellow-400 transition-all duration-300"
            >
              My Profile
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
