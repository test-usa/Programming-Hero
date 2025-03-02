import { useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import { ToastContainer } from "react-toastify";
import useAxiosSecure from "./hooks/useAxios";
import { userStore } from "./store/UserStore";

const App = () => {
  // const { , token } = userStore();

  // const Axios = useAxiosSecure();

  // const fetchUser = async () => {
  //   console.log("main file render");
  //   try {
  //     const response = await Axios.get("/user/me", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     if (response.data) {
  //       setUser(response.data);
  //     }
  //     console.log("reddshfkjsdhkjdsfds", response);
  //   } catch (error) {
  //     console.error("Error user authentication:", error);
  //   }
  // };

  // useEffect(() => {
  //   if (token) {
  //     fetchUser();
  //   }
  // }, [token]);
  return (
    <>
      <ToastContainer position="bottom-left" theme="dark" autoClose={3000} />
      <MainLayout />
    </>
  );
};

export default App;
