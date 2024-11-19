import { useContext, useRef } from "react";
import { FaGoogle } from "react-icons/fa";
import { NewContext } from "../Components/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { handleLogin, setForgetemail } = useContext(NewContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  // forget password section
  const forGetPass = () => {
    const email = emailRef.current.value;
    if (!email) {
      return toast.error("please enter email");
    } else {
      setForgetemail(email);
      navigate("/forgetpass");
    }
  };
  const handleLogin2 = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleLogin(email, password)
      .then(() => {
        toast.success("Loged In Successfully");
        navigate("/");
        navigate(location.state.from);
      })
      .catch(() => {});
  };
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Loged In Successfully");
        navigate("/");
        navigate(location.state.from);
      })
      .catch(() => {});
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin2} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              ref={emailRef}
              name="email"
              type="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* forgot pass */}
          <div>
            <label
              onClick={forGetPass}
              htmlFor="password"
              className="block text-sm underline cursor-pointer text-gray-600"
            >
              Forgot Password?
            </label>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        {/* Social Login Section */}
        <div className="mt-6 space-y-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <FaGoogle className="mr-3 text-xl" /> Login with Google
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
