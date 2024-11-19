import { useContext } from "react";
import { NewContext } from "../Components/AuthContext";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { setInfo } = useContext(NewContext);
  const handleSubmit2 = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const info = {
      name,
      photo,
    };
    setInfo(info);
    navigate("/my-profile");
  };
  return (
    <div>
      <div className="bg-white rounded-xl max-w-lg border-2 border-gray-400 mx-auto p-10 mt-5">
        <form onSubmit={handleSubmit2} className="space-y-6">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="firstName"
              name="name"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="photoUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URl
            </label>
            <input
              id="photourl"
              name="photo"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Update Iformation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
