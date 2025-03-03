import { userStore } from "../../store/UserStore";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import Axios from "../useAxios";

// post hoook
const usePost = (route: string) => {
  const { token } = userStore();
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
