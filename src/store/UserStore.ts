import { create } from "zustand";
import { TsigninSchema, TsignupSchema, TuserStore } from "../types/Types";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import { persist } from "zustand/middleware";

const token = Cookies.get("user");
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
});
export const userStore = create<TuserStore>()(
  persist(
    (set) => ({
      user: null,
      token,
      signup_user: async (userData: TsignupSchema) => {
        try {
          const { data } = await axiosSecure.post("/auth/register", userData);
          console.log("response sign sdfkjsa", data);
          if (data.success) {
            toast.success(data.message);
          }
          if (data.error) {
            toast.error(data.message);
          }
        } catch (error) {
          console.log("Problem during Signup", error);
        }
      },
      loginUser: async (userData: TsigninSchema) => {
        try {
          const { data } = await axiosSecure.post("/auth/login", userData);
          console.log("login response", data);
          if (data.success) {
            toast.success(data.message);
            Cookies.set("user", data.data.accessToken);
            set({ user: data });
          }
          if (data.error) {
            toast.error(data.message);
          }
          return data;
        } catch (error) {
          console.log("Problem during login", error);
        }
      },

      logOutUser: () => {
        Cookies.remove("user");
        set({ user: null });
      },
    }),
    { name: "user" }
  )
);
