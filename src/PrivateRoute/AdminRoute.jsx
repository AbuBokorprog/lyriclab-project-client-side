import React, { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loader } = useContext(authContext);
  if (user?.role === "admin") {
    return { children };
  }
  if (loader) {
    return (
      <div className="radial-progress text-center" style={{ "--value": 70 }}>
        70%
      </div>
    );
  }
  return <Navigate to="/" replace={true}></Navigate>;
};

export default AdminRoute;
