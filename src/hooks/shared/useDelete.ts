import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userStore } from "../../store/UserStore";
import Axios from "../useAxios";
const useDelete = (route: string) => {
  const { token } = userStore();
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
