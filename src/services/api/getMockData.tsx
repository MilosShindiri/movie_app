import { useEffect } from "react";
import axios from "axios";

export const useLogin = () => {
  useEffect(() => {
    const loginAndFetchUser = async () => {
      try {
        const loginRes = await axios.post("http://localhost:3333/login", {
          username: "admin",
          password: "password",
          code: "12345",
        });

        const token = loginRes.data.token;

        const userRes = await axios.get("http://localhost:3333/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("User data:", userRes.data);
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

    loginAndFetchUser();
  }, []);
};
