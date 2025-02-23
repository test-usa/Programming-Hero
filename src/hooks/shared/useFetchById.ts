import Cookies from "js-cookie";
import useAxiosSecure from "../useAxios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
const useFetchById = (route: string) => {
  const Axios = useAxiosSecure();
  const token = Cookies.get("user");

  const { data, isLoading, isSuccess, refetch } = useQuery({
    queryKey: ["get-by-id"],
    queryFn: () => {
      Axios.get(route, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    placeholderData: keepPreviousData,
  });

  return { data, isLoading, isSuccess, refetch };
};

export default useFetchById;
