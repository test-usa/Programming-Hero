import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";

// add baseUrl with axios;
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
});
// add axios hook
const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error) {
          Cookies.remove("user");
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosSecure;
};
export default useAxiosSecure;
