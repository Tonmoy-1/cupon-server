import { useContext, useState } from "react";
import { NewContext } from "../Components/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../Firebase";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
const Register = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { handleRegister, setUser } = useContext(NewContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const username = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    console.log(username, photo);
    if (password.length < 6) {
      setError("Password Length must be at least 6 character");
    }
    if (!/[A-Z]/.test(password)) {
      setError("Must have an Uppercase letter in the password");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Must have a Lowercase letter in the password ");
      return;
    }

    handleRegister(email, password)
      .then((res) => {
        toast.success("Registered Successfully");
        const user = res.user;
        updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: photo,
        }).then(() => {
          navigate("/");
        });
        setUser(user);
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
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
    <div className="min-h-screen  py-4 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* email field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Photo URL Field */}
          <div>
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-600"
            >
              Photo URL
            </label>
            <input
              id="photoURL"
              name="photo"
              type="url"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
            <div className="relative w-full mt-1">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
          {error && <p className="text-red-500">{error}</p>}
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
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
