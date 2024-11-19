import { useContext } from "react";
import { FaEdit } from "react-icons/fa"; // Icon for the update button
import { Link } from "react-router-dom";
import { NewContext } from "../Components/AuthContext";

const MyProfile = () => {
  const { user, info } = useContext(NewContext);
  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Your MyProfile
      </h1>

      <div className="flex justify-center items-center flex-col">
        {/* MyProfile Picture */}
        <img
          //   src={user.MyProfilePicture}
          src={info ? info.photo : user?.photoURL}
          alt="MyProfile"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />

        {/* Display Name */}
        <p className="text-2xl font-semibold text-gray-700">
          {/* {user.displayName} */}
          {info ? info.name : user?.displayName}
        </p>

        {/* Email */}
        <p className="text-sm text-gray-500 mt-2">{user?.email}</p>

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
