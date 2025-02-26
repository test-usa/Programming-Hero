import { useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import { ToastContainer } from "react-toastify";
import useAxiosSecure from "./hooks/useAxios";
import { userStore } from "./store/UserStore";
const App = () => {
  const { setUser, user, token } = userStore();

  const Axios = useAxiosSecure();
  useEffect(() => {
    const userAuthentication = async () => {
      console.log("main file render");
      try {
        const response = await Axios.get("/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data) {
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error user authentication:", error);
      }
    };

    if (token) {
      userAuthentication();
    }
  }, [token, setUser]);
  return (
    <>
      <ToastContainer
        // toastStyle={{ color: "#fff", backgroundColor: "#405aff" }}
        theme="dark"
        autoClose={3000}
      />
      <MainLayout />
    </>
  );
};

export default App;
