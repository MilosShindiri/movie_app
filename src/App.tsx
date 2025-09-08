import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

export default function App() {
  // here potencialy goes breadcrumps ref:https://www.youtube.com/watch?v=h7MTWLv3xvw
  return (
    <AuthProvider>
      <GlobalStyle />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
      <Outlet />
    </AuthProvider>
  );
}
