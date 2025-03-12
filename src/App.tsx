import { useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import { ToastContainer } from "react-toastify";
import useAxiosSecure from "./hooks/useAxios";
import { userStore } from "./store/UserStore";
import { Elements } from "@stripe/react-stripe-js";

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
    <Elements stripe={null}>
      <ToastContainer position="bottom-left" theme="dark" autoClose={3000} />
      <ToastContainer position="bottom-left" autoClose={3000} />
      <MainLayout />
    </Elements>
    </>
  );
};

export default App;
