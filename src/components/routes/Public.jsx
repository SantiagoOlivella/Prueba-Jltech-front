import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

export const Public = ({ children }) => {
  const initial = JSON.parse(localStorage.getItem("user"));

  return initial ? <Navigate to="/home" /> : children;
};
