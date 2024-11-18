/* eslint-disable react/prop-types */
import { useContext } from "react";
import { NewContext } from "../Components/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Spiner from "../Components/Spiner";

const PrivetRouts = ({ children }) => {
  const { user, loading } = useContext(NewContext);
  const location = useLocation();
  if (loading) {
    return <Spiner></Spiner>;
  }

  if (!user) {
    return (
      <Navigate state={{ from: location.pathname }} to={"/login"}></Navigate>
    );
  }
  return children;
};

export default PrivetRouts;
