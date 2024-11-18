import { useContext, useState } from "react";
import { NewContext } from "../Components/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const { handleRegister, logout } = useContext(NewContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
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
      .then(() => {
        toast.success("Registered Successfully");
        navigate("/login");
        logout();
      })
      .catch((error) => {
        toast.error(` ${error.message}`);
      });
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
            <input
              id="password"
              type="password"
              name="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
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
