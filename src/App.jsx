import { useDispatch } from "react-redux";
import authService from "./appwrite/auth.js";
import { useEffect, useState } from "react";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components/index.js";
import { Outlet } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setloading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
          toast.warning("Please sign up first");
        }
      })
      .finally(() => setloading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1">
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="light"
            transition={Slide}
            style={{ zIndex: 999 }}
          />
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
