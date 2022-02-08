import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

export const Private = ({ children }) => {
  const initial = JSON.parse(localStorage.getItem("user"));
  return initial ? children : <Navigate to="/" />;
};
