import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  const login = async (username: string, password: string, code: string) => {
    try {
      const loginRes = await axios.post("http://localhost:3333/login", {
        username,
        password,
        code,
      });

      const token = loginRes.data.token;

      const userRes = await axios.get("http://localhost:3333/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("User data:", userRes.data);

      navigate("/");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error("Axios error:", err.response?.data || err.message);
      } else if (err instanceof Error) {
        console.error("Generic error:", err.message);
      } else {
        console.error("Unknown error:", err);
      }
    }
  };

  return login;
};
