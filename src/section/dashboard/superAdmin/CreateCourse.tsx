import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../../components/ui/dialog";

import { FaPlus } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { createCourse, TcreateCourse } from "../../../types/Types";
import { zodResolver } from "@hookform/resolvers/zod";
import usePost from "../../../hooks/shared/usePost";
import { Spinner } from "@heroui/spinner";
const CreateCourse = ({ refetch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TcreateCourse>({ resolver: zodResolver(createCourse) });
  const { data, mutate, isPending, isSuccess } = usePost("/course");
  const submit = async (userData: TcreateCourse) => {
    mutate(userData);
    refetch();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="p-2 text-2xl text-white bg-purple-600 rounded-full cursor-pointer">
          <FaPlus />
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl bg-[#170f21] text-white">
        <div className="p-6 text-white rounded-xl">
          <h2 className="mb-6 text-xl font-bold">Create Instructor</h2>
          <form onSubmit={handleSubmit(submit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Title
              </label>
              <input
                {...register("title")}
                type="text"
                placeholder="Enter title"
                id="name"
                className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {errors.title && (
                <p className="text-red-500">{errors.title.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Price
              </label>
              <input
                {...register("price", { valueAsNumber: true })}
                type="number"
                placeholder="Enter price"
                id="email"
                className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              {isPending ? (
                <Spinner color="warning" size="sm" />
              ) : (
                "Create User"
              )}
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CreateCourse;
