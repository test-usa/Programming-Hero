import Cookies from "js-cookie";
import useAxiosSecure from "../useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const useDelete = (route: string) => {
  const Axios = useAxiosSecure();
  const token = Cookies.get("user");
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (id) => {
      return Axios.delete(route + id, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", route] });
    },
  });

  return { mutate, isPending, isSuccess };
};

export default useDelete;
