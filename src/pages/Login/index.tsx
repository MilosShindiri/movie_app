import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { PagePaths } from "../../routes/routes_utils";
import { useEffect } from "react";
import { Login } from "../../components/Login/Login";

const LoginPage = () => {
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

export default LoginPage;
