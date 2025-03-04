import { create } from "zustand";
import { TsigninSchema, TsignupSchema, TuserStore } from "../types/Types";
import axios from "axios";
import { toast } from "react-toastify";
import { persist } from "zustand/middleware";
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
});
export const userStore = create<TuserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      signup_user: async (userData: TsignupSchema) => {
        try {
          const { data } = await axiosSecure.post("/auth/register", userData);
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
          if (data.success) {
            toast.success(data.message);
            set({ token: data.data.accessToken });
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
        set({ user: null });
        set({ token: null });
      },
    }),
    { name: "user" }
  )
);
