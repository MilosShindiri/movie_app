import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/useAuth";
import { useEffect, useRef } from "react";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const toastShownRef = useRef(false);

  useEffect(() => {
    if (!isAuthenticated && !toastShownRef.current) {
      toast.error("Morate biti ulogovani da biste pristupili ovoj stranici", {
        toastId: "auth-error",
      });
      toastShownRef.current = true;
    }
  }, [isAuthenticated]);
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};
