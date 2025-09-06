import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { Login } from "../../components/Login";

const LoginPage = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Login />;
};

export default LoginPage;
