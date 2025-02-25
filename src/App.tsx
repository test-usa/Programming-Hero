import { useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import { ToastContainer } from "react-toastify";
import useAxiosSecure from "./hooks/useAxios";
import { userStore } from "./store/UserStore";

const App = () => {
  const { updateUser, token } = userStore();

  const Axios = useAxiosSecure();
  useEffect(() => {
    const userAuthentication = async () => {
      try {
        const response = await Axios.get("/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data) {
          updateUser(response.data);
        }
      } catch (error) {
        console.error("Error user authentication:", error);
      }
    };

    if (token) {
      userAuthentication();
    }
  }, [token, Axios]);
  return (
    <>
      <ToastContainer />
      <MainLayout />
    </>
  );
};

export default App;
