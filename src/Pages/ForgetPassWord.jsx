import { useContext } from "react";
import { NewContext } from "../Components/AuthContext";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import auth from "../Firebase";

const ForgetPassWord = () => {
  const { forgetemail } = useContext(NewContext);
  const resetPassword = (e) => {
    e.preventDefault();
    const email = forgetemail;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(
          "A code has been sent to your email. Please check your inbox."
        );
        const openMail = window.confirm(
          "Do you want to open Gmail in a new tab?"
        );
        if (openMail) {
          window.open(
            "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
            "_blank"
          );
        }
      })
      .catch(() => {
        toast.error("Failed to send reset email. Please try again.");
      });
  };
  return (
    <div className="min-h-screen  flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Forgot Password?
        </h2>
        <form onSubmit={resetPassword} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              value={forgetemail}
              name="email"
              type="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassWord;
