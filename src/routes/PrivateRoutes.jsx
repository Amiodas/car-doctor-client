import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
        <div className="my-16 text-center min-h-screen">
            <span className="loading loading-spinner text-orange-600"></span>;
        </div>
    )
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoutes;
