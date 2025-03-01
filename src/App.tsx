import { useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import { ToastContainer } from "react-toastify";
import useAxiosSecure from "./hooks/useAxios";
import { userStore } from "./store/UserStore";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const App = () => {
  const { updateUser, token } = userStore();
  const stripePromise = loadStripe("pk_test_51NiF1SKVFWA3nojbTVAqv3yij9CoqTw7Zes5HyJQll4LJv964bTbqtLj5pIUVzASgqeShrASY7A33hJWu9WYP7NP000gXVepGK")
  console.log("user", token);
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
    <Elements stripe={stripePromise}>
      <ToastContainer />
      <MainLayout />
    </Elements>
    </>
  );
};

export default App;
