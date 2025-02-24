// import Cookies from "js-cookie";
// import { useEffect, useState } from "react";
// import useAxiosSecure from "../hooks/useAxios";
// import { UserLogin, UserSignUp } from "../types/Types";
// import { create } from "zustand";

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const token = Cookies.get("user");
//   const Axios = useAxiosSecure();

//   useEffect(() => {
//     const userAuthentication = async () => {
//       try {
//         const response = await Axios.get("/user/verify", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (response.status === 200) {
//           setUser(response.data);
//         } else {
//           setUser(null);
//         }
//       } catch (error) {
//         console.error("Error user authentication:", error);
//         setUser(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (token) {
//       userAuthentication();
//     } else {
//       setLoading(false);
//     }
//   }, [token, Axios]);

//   const signupUser = async (data: UserSignUp) => {
//     try {
//       const response = await Axios.post("/auth/register", data);

//       if (!response.status) {
//         throw response;
//       }
//       return response;
//     } catch (error) {
//       console.log("Problem during Signup", error);
//       throw error;
//     }
//   };
//   const loginUser = async (data: UserLogin) => {
//     try {
//       const response = await Axios.post("/user/signin", data);

//       if (!response.status) {
//         throw response;
//       }
//       return response;
//     } catch (error) {
//       console.log("Problem during login", error);
//       throw error;
//     }
//   };
//   const logOutUser = async () => {
//     Cookies.remove("user");
//     setUser(null);
//     setLoading(false);
//     return null;
//   };

//   const UserStore = create((set, get) => ({
//     user,
//     signupUser,
//     loginUser,
//     logOutUser,
//   }));
// };
