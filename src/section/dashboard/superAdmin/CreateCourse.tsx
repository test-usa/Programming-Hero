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
import { useState } from "react";

const CreateCourse = ({ refetch }) => {
  // Modal state to control its open/close state
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TcreateCourse>({ resolver: zodResolver(createCourse) });

  const { mutate, isPending } = usePost("/course");

  const submit = async (userData: TcreateCourse) => {
    mutate(
      {
        title: userData.title,
        price: Number(userData.price), // Ensure price is a number
        thumbnail: userData.thumbnail || "", // Ensure thumbnail is included
      },
      {
        onSuccess: () => {
          refetch();
          setIsOpen(false); // Close the modal after successful submission
          setTimeout(() => reset(), 500); // Small delay to prevent clearing too early
        },
      }
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <span
          className="p-2 text-2xl text-white bg-purple-600 rounded-full cursor-pointer"
          onClick={() => setIsOpen(true)} // Open the modal on button click
        >
          <FaPlus />
        </span>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl bg-[#170f21] text-white">
        <div className="p-6 text-white rounded-xl">
          <h2 className="mb-6 text-xl font-bold">Create Course</h2>
          <form onSubmit={handleSubmit(submit)} className="space-y-4">
            {/* Title Field */}
            <div>
              <label htmlFor="title" className="block mb-1 text-sm font-medium">
                Title
              </label>
              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                placeholder="Enter title"
                id="title"
                className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.title && <p className="text-red-500">{errors.title.message}</p>}
            </div>

            {/* Price Field */}
            <div>
              <label htmlFor="price" className="block mb-1 text-sm font-medium">
                Price
              </label>
              <input
                {...register("price", { valueAsNumber: true, required: "Price is required" })}
                type="number"
                placeholder="Enter price"
                id="price"
                className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.price && <p className="text-red-500">{errors.price.message}</p>}
            </div>

            {/* Thumbnail Field */}
            <div>
              <label htmlFor="thumbnail" className="block mb-1 text-sm font-medium">
                Thumbnail URL
              </label>
              <input
                {...register("thumbnail", { required: "Thumbnail URL is required" })}
                type="text"
                placeholder="Enter thumbnail URL"
                id="thumbnail"
                className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.thumbnail && <p className="text-red-500">{errors.thumbnail.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              {isPending ? <Spinner color="warning" size="sm" /> : "Create Course"}
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCourse;
