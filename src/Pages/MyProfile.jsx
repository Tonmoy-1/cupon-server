import { useContext } from "react";
import { FaEdit } from "react-icons/fa"; // Icon for the update button
import { Link } from "react-router-dom";
import { NewContext } from "../Components/AuthContext";

const MyProfile = () => {
  const { user, info } = useContext(NewContext);
  return (
    <div className="mb-32">
      <div className="w-full mx-auto mt-1 bg-gradient-to-r from-teal-400 to-cyan-600 h-[350px] rounded-xl text-white py-4 px-6 ">
        <div className="mt-10">
          <h1 className="text-2xl md:text-4xl font-semibold text-center">
            Hey Welcome To Your Profile
          </h1>
        </div>
        <div className="max-w-3xl mx-auto mt-4 p-8 bg-white border-2 border-teal-500 rounded-lg shadow-lg">
          <div className="flex justify-center items-center flex-col">
            {/* MyProfile Picture */}
            <img
              //   src={user.MyProfilePicture}
              src={info ? info.photo : user?.photoURL}
              alt="MyProfile"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />

            {/* Display Name */}
            <p className="text-3xl font-semibold text-gray-700">
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
      </div>
    </div>
  );
};

export default MyProfile;
