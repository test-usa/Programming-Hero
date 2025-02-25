import Cookies from "js-cookie";
import useAxiosSecure from "../useAxios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
const useFetchQuery = (route: string, params: object = {}) => {
  const Axios = useAxiosSecure();
  const token = Cookies.get("user");

  const { data, isLoading, isSuccess, refetch } = useQuery({
    queryKey: ["user", route, ...Object.values(params)],
    queryFn: () => {
      Axios.get(route, {
        params,
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    placeholderData: keepPreviousData,
  });

  return { data, isLoading, isSuccess, refetch };
};

export default useFetchQuery;
