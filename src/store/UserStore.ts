import { create } from "zustand";
import { TsigninSchema, TsignupSchema, TuserStore } from "../types/Types";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";

const token = Cookies.get("user");
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
});
export const userStore = create<TuserStore>()((set) => ({
  user: null,
  token,
  signup_user: async (data: TsignupSchema) => {
    try {
      const response = await axiosSecure.post("/auth/register", data);
      console.log("response sign sdfkjsa", response);
      if (response.data.success) {
        toast.success(response.data.message);
      }
      if (response.data.error) {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("Problem during Signup", error);
    }
  },
  loginUser: async (data: TsigninSchema) => {
    try {
      const response = await axiosSecure.post("/auth/login", data);
      if (response.data.success) {
        toast.success(response.data.message);
      }
      if (response.data.error) {
        toast.error(response?.data.message);
      }
      return Cookies.set("user", response.data.data.accessToken);
    } catch (error) {
      console.log("Problem during login", error);
      throw error;
    }
  },
  setUser: async (newUser: object) => {
    set({ user: newUser });
  },
  logOutUser: () => {
    Cookies.remove("user");
    set({ user: null });
  },
}));
