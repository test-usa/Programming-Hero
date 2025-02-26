import { useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import { ToastContainer } from "react-toastify";
import useAxiosSecure from "./hooks/useAxios";
import { userStore } from "./store/UserStore";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const App = () => {
  const { updateUser, token } = userStore();
  const stripePromise = loadStripe("pk_test_51QshxRDCuwY7X1ekWucBpXSXbuTKO1ZUnHemwAGukdk8z7ZafMYPh70OO55C0DUntcj0AlDqLbRc8VWNwpJ7a8xA0036PrwSWD")
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
