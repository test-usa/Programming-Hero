import { userStore } from "../../store/UserStore";
import { toast } from "react-toastify";
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
    onSuccess: (data) => {
      if (data.data.success) {
        toast.success(data.data.message);
      }
      console.log("ramjan", data);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError(error) {
      console.log("error", error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    },
  });

  return { data, mutate, isPending, isSuccess };
};

export default usePost;
