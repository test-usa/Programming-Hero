import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { userStore } from "../../store/UserStore";
import Axios from "../useAxios";
const useFetchById = (route: string) => {
  const { token } = userStore();
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
