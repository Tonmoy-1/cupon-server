/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase";

export const NewContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
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
  };

  const allfunction = {
    handleRegister,
    handleLogin,
    logout,
    user,
    setUser,
    loading,
  };
  return (
    <div>
      <NewContext.Provider value={allfunction}>{children}</NewContext.Provider>
    </div>
  );
};

export default AuthContext;
