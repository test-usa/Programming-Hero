import { create } from "zustand";
import { TsigninSchema, TsignupSchema, TuserStore } from "../types/Types";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials:false,
});

export const userStore = create<TuserStore>()((set) => ({
  user: null,
  signup_user: async (data: TsignupSchema) => {
    try {
      const response = await axiosSecure.post("/auth/register", data);
      if (response.data) {
        toast.success(response.data.message);
      }
      return set((state) => (state.user = response.data));
    } catch (error) {
      console.log("Problem during Signup", error);
    }
  },
  loginUser: async (data: TsigninSchema) => {
    try {
      const response = await axiosSecure.post("/auth/login", data);

      if (!response.status) {
        return response;
      }
      return Cookies.set("user", response.data);
    } catch (error) {
      console.log("Problem during login", error);
      throw error;
    }
  },
  logOutUser: () => {
    Cookies.remove("user");
    return () => set({ user: null });
  },
}));
