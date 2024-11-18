import { FaEdit } from "react-icons/fa"; // Icon for the update button
import { Link } from "react-router-dom";

const MyProfile = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Your MyProfile
      </h1>

      <div className="flex justify-center items-center flex-col">
        {/* MyProfile Picture */}
        <img
          //   src={user.MyProfilePicture}
          src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/356649623_1192373974762966_829248570328935216_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=sx9bFk89zIoQ7kNvgH0E0_k&_nc_zt=23&_nc_ht=scontent.fdac27-1.fna&_nc_gid=AQfzcO9sie9KYuDzFUdEVtF&oh=00_AYArF2snGPumaYctsVVZ48yD78t54YrhYHkX_A7WT5xCdw&oe=673F5A5C"
          alt="MyProfile"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />

        {/* Display Name */}
        <p className="text-2xl font-semibold text-gray-700">
          {/* {user.displayName} */}
          Md Tonmoy Bisswas
        </p>

        {/* Email */}
        <p className="text-sm text-gray-500 mt-2">tonmoyhosen767@gmail.com</p>

        {/* Update MyProfile Button */}
        <Link to={"/update-profile"}>
          <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition flex items-center">
            <FaEdit className="mr-2" />
            Update MyProfile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
