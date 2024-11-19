/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  // updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase";

export const NewContext = createContext();

const AuthContext = ({ children }) => {
  const [forgetemail, setForgetemail] = useState(null);
  const [name, setName] = useState("");

  const [user, setUser] = useState();
  console.log(user);

  const [loading, setLoading] = useState(true);
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updatedProfile = ({ updateData }) => {
    updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo,
    }).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        setUser(currentuser);
      } else {
        setUser(null);
      }
      setLoading(false);
      return () => {
        unSubscribe();
      };
    });
  }, []);

  const logout = () => {
    signOut(auth);
    setName("");
  };

  const allfunction = {
    name,
    setName,
    handleRegister,
    handleLogin,
    logout,
    user,
    setUser,
    loading,
    setForgetemail,
    forgetemail,
    updatedProfile,
  };
  return (
    <div>
      <NewContext.Provider value={allfunction}>{children}</NewContext.Provider>
    </div>
  );
};

export default AuthContext;
