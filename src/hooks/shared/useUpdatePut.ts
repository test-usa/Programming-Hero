import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userStore } from "../../store/UserStore";
import Axios from "../useAxios";
const useUpdatePut = (route: string) => {
  const { token } = userStore();
  const queryClient = useQueryClient();

  const { data, mutate, isPending, isSuccess } = useMutation({
    mutationFn: (obj) => {
      return Axios.put(route, obj, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", route] });
    },
  });

  return { data, mutate, isPending, isSuccess };
};

export default useUpdatePut;
