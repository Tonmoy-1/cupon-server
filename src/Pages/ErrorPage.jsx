import { Link } from "react-router-dom";
import errorImage from "../assets/error.webp";

const ErrorPage = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${errorImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay for darkening the image */}
      <div className="relative flex items-center justify-center h-full text-center text-white px-6">
        <div>
          <h1 className="text-6xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Oops! 404
          </h1>
          <p className="text-2xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            to="/"
            className="bg-yellow-500 text-black px-6 py-3 text-xl font-semibold rounded-full hover:bg-yellow-600 transition-all duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
