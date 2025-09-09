import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/useAuth";
import { useEffect, useRef } from "react";
import { PagePaths } from "./routes_utils";

export const ProtectedRoute = () => {
  const { isAuthenticated, didLogout } = useAuth();
  const location = useLocation();
  const toastShownRef = useRef(false);

  useEffect(() => {
    if (!isAuthenticated && !didLogout && !toastShownRef.current) {
      toast.error("You must be logged in to access this page!", {
        toastId: "auth-error",
      });
      toastShownRef.current = true;
    }
  }, [isAuthenticated, didLogout]);

  if (!isAuthenticated) {
    return (
      <Navigate
        to={PagePaths.LOGIN}
        replace={true}
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
};
