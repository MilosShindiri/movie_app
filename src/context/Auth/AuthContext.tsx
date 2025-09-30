import axios from "axios";
import React, { useState, useEffect } from "react";
import { AuthContext } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SESSION_TIMEOUT_MS } from "./authConstants";
import { PagePaths } from "../../routes/routes_utils";

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: {
    username: string;
    password: string;
    code: number;
  }) => Promise<void>;
  logout: (autoLogout?: boolean) => void;
  didLogout: boolean;
  setDidLogout: (value: boolean) => void;
}

interface User {
  username: string;
  image?: string;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem("token");
    const expiresAt = Number(localStorage.getItem("tokenExpiresAt"));
    return !!token && Date.now() < expiresAt;
  });

  const [didLogout, setDidLogout] = useState(false);

  const navigate = useNavigate();

  const saveAuthToStorage = (token: string, expiresAt: number) => {
    localStorage.setItem("token", token);
    localStorage.setItem("tokenExpiresAt", String(expiresAt));
  };

  const clearAuthFromStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiresAt");
  };

  const logout = (autoLogout = false) => {
    setDidLogout(!autoLogout);
    setUser(null);
    setIsAuthenticated(false);
    clearAuthFromStorage();
    navigate(PagePaths.HOME, { replace: true });
    window.history.pushState(null, "", PagePaths.HOME);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiresAt = Number(localStorage.getItem("tokenExpiresAt"));

    if (!token || !expiresAt || Date.now() > expiresAt) {
      clearAuthFromStorage();
      setUser(null);
      setIsAuthenticated(false);
      return;
    }

    axios
      .get("http://localhost:3333/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const userData = res.data;
        setUser({ username: userData.username });
        setIsAuthenticated(true);
      })
      .catch(() => {
        clearAuthFromStorage();
        setUser(null);
        setIsAuthenticated(false);
      });
  }, []);

  useEffect(() => {
    const expiresAt = Number(localStorage.getItem("tokenExpiresAt"));
    if (!isAuthenticated || !expiresAt) return;

    const timeout = expiresAt - Date.now();
    if (timeout <= 0) {
      logout(true);
      return;
    }

    const timer = setTimeout(() => {
      toast.info("Session expired. Please log in again.");
      logout(true);
    }, timeout);

    return () => clearTimeout(timer);
  });

  const login = async (credentials: {
    username: string;
    password: string;
    code: number;
  }) => {
    try {
      const { username, password, code } = credentials;
      const loginRes = await axios.post("http://localhost:3333/login", {
        username,
        password,
        code,
      });

      const token = loginRes.data.token;
      const expiresAt = Date.now() + SESSION_TIMEOUT_MS;
      saveAuthToStorage(token, expiresAt);

      const userRes = await axios.get("http://localhost:3333/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = userRes.data;
      setUser({ username: userData.username });

      setIsAuthenticated(true);
      toast.success("Successfully logged in!");
      navigate(PagePaths.HOME, { replace: true });
    } catch {
      toast.error("Login failed");
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    login,
    logout,
    didLogout,
    setDidLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
