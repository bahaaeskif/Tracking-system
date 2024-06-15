import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { LoginPath } from "../Routes";

export const PrivateHome = ({ children }) => {
  const jwt = localStorage.getItem("user");

  return jwt ? children : <Navigate to={LoginPath} />;
};
