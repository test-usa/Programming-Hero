import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Axios from "../useAxios";
import { userStore } from "../../store/UserStore";

const useFetch = (route: string, params = {}) => {
  const { token } = userStore();
  const { data, isSuccess, isLoading, refetch } = useQuery({
    queryKey: [" course", route, ...Object.values(params)],
    queryFn: () =>
      Axios(route, {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    placeholderData: keepPreviousData,
  });

  return { data: data?.data, isSuccess, isLoading, refetch };
};

export default useFetch;
