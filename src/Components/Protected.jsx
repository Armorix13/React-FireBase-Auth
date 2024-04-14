import React from "react";

const ProtectedRoute = ({ element }) => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  if (user && token) {
    return element;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
