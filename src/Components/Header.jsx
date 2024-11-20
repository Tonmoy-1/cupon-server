import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaTag,
  FaUser,
  FaRegUserCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { NewContext } from "./AuthContext";
import logo from "../assets/logo.webp";

const Header = () => {
  const { user, handlelogout, info } = useContext(NewContext);
  const navigate = useNavigate();

  // State to control the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg">
      {info ? (
        <div className="my-4 pb-2 text-yellow-300 text-center text-3xl font-bold">
          Welcome {info.name}
        </div>
      ) : user ? (
        <div className="my-4 pb-2 text-yellow-300 text-center text-3xl font-bold">
          Welcome {user.displayName}
        </div>
      ) : null}

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap sm:gap-3  items-center justify-between">
          {/* Left side: Logo and Title */}
          <div className="flex items-center mb-3 space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-12 md:h-16 w-12 md:w-16 rounded-full"
            />
            <span className="text-xl font-bold text-yellow-500 hidden md:block">
              Coupon Saver BD
            </span>
          </div>

          {/* Navbar Toggle (for mobile and tablet) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Center: Navigation Menu (Hidden on mobile) */}
          <div className="flex-grow  justify-center space-x-6 hidden md:flex">
            <NavLink
              to="/"
              className="flex items-center space-x-2 text-lg hover:text-yellow-500"
            >
              <FaHome />
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/brands"
              className="flex items-center space-x-2 text-lg hover:text-yellow-500"
            >
              <FaTag />
              <span>Brands</span>
            </NavLink>
            {user && (
              <NavLink
                to="/my-profile"
                className="flex items-center space-x-2 text-lg hover:text-yellow-500"
              >
                <FaUser />
                <span>My Profile</span>
              </NavLink>
            )}
            <NavLink
              to="/about-dev"
              className="flex items-center space-x-2 text-lg hover:text-yellow-500"
            >
              <FaRegUserCircle />
              <span>About Dev</span>
            </NavLink>
          </div>

          {/* Right Side - User info and login/logout buttons */}
          <div className="flex items-center space-x-4">
            {!user ? (
              <>
                <NavLink
                  to="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all duration-200"
                >
                  Register
                </NavLink>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                {/* User Picture */}
                <div className="flex items-center space-x-3">
                  <img
                    src={info ? info.photo : user?.photoURL}
                    className="w-12 h-12 rounded-full border-2 border-yellow-500"
                  />
                  <span className="text-sm text-gray-300">{user?.email}</span>
                </div>
                {/* Logout Button */}
                <button
                  onClick={() => {
                    handlelogout();
                    navigate("/");
                  }}
                  className="flex items-center space-x-2 text-red-500 hover:text-red-600"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu (Hidden by default) */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            <NavLink
              to="/"
              className="text-lg text-white hover:text-yellow-500"
            >
              Home
            </NavLink>
            <NavLink
              to="/brands"
              className="text-lg text-white hover:text-yellow-500"
            >
              Brands
            </NavLink>
            {user && (
              <NavLink
                to="/my-profile"
                className="text-lg text-white hover:text-yellow-500"
              >
                My Profile
              </NavLink>
            )}
            <NavLink
              to="/about-dev"
              className="text-lg text-white hover:text-yellow-500"
            >
              About Dev
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
