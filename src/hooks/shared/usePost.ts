import Cookies from "js-cookie";
import useAxiosSecure from "../useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const usePost = (route: string) => {
  const Axios = useAxiosSecure();
  const token = Cookies.get("user");
  const queryClient = useQueryClient();

  const { data, mutate, isPending, isSuccess } = useMutation({
    mutationFn: (obj) => {
      return Axios.post(route, obj, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { data, mutate, isPending, isSuccess };
};

export default usePost;
