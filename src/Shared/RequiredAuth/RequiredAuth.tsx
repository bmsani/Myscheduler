import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../init.firebase";
import Loading from "../LoadingSpinner/Loading";

interface childrenProps {
  children: JSX.Element;
}

const RequiredAuth = ({ children }: childrenProps) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequiredAuth;
