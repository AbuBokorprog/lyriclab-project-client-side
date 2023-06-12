import React from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext } from "react";
import app from "../Firebase/Firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoader(false);
      setUser(currentUser);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  const updateProfileData = async (Name, Image) => {
    setLoader(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: Name,
        photoURL: Image,
      });
      setUser(auth.currentUser);
    } catch (error) {
      console.log("Error updating profile:", error);
    } finally {
      setLoader(false);
    }
  };

  const google = () => {
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    loader,
    createUser,
    signInUser,
    logout,
    updateProfileData,
    google,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
