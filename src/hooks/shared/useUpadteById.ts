import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userStore } from "../../store/UserStore";
import Axios from "../useAxios";
const useUpadteById = (route: string) => {
  const { token } = userStore();
  const queryClient = useQueryClient();

  const { data, mutate, isPending, isSuccess } = useMutation({
    mutationFn: (obj) => {
      return Axios.patch(route + obj, obj, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", route] });
    },
  });

  return { data, mutate, isPending, isSuccess };
};

export default useUpadteById;
