import { Navigate } from "react-router-dom";
import { PagePaths } from "../../routes/routes_utils";
import { useAuth } from "../../context/Auth/useAuth";
import { useEffect } from "react";
import { Login } from "../../components/Login";

export const LoginPage = () => {
  const { isAuthenticated, didLogout, setDidLogout } = useAuth();

  useEffect(() => {
    if (didLogout) {
      setDidLogout(false);
    }
  }, [didLogout, setDidLogout]);

  if (isAuthenticated) {
    return <Navigate to={PagePaths.HOME} replace />;
  }

  return <Login />;
};
