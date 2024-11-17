/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import {
  FaHome,
  FaTag,
  FaUser,
  FaRegUserCircle,
  //   FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const Header = ({ user, onLogout }) => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left Side  */}
        <div className="flex items-center space-x-2">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-10" />
          <span className="text-xl font-bold text-yellow-500">BrandName</span>
        </div>

        {/* Center  */}
        <div className="flex-grow flex justify-center space-x-6">
          <Link
            to="/"
            className="flex items-center space-x-2 text-lg hover:text-yellow-500"
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            to="/brands"
            className="flex items-center space-x-2 text-lg hover:text-yellow-500"
          >
            <FaTag />
            <span>Brands</span>
          </Link>
          {user && (
            <Link
              to="/my-profile"
              className="flex items-center space-x-2 text-lg hover:text-yellow-500"
            >
              <FaUser />
              <span>My Profile</span>
            </Link>
          )}
          <Link
            to="/about-dev"
            className="flex items-center space-x-2 text-lg hover:text-yellow-500"
          >
            <FaRegUserCircle />
            <span>About Dev</span>
          </Link>
        </div>

        {/* Right Side  */}
        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all duration-200"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-3">
              {/* Welcome message  */}
              <span className="text-lg font-semibold text-yellow-300 mr-4">
                Welcome, {user.name}!
              </span>
              {/* User picture */}
              <div className="flex items-center space-x-3">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-12 h-12 rounded-full border-2 border-yellow-500"
                />
                <span className="text-sm text-gray-300">{user.email}</span>
              </div>
              {/* Logout button */}
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 text-red-500 hover:text-red-600"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
