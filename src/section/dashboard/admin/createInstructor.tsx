import { zodResolver } from "@hookform/resolvers/zod";
import { createInstructor, TcreateInstructor } from "../../../types/Types";
import { useForm } from "react-hook-form";
import usePost from "../../../hooks/shared/usePost";
import { Spinner } from "@heroui/spinner";

const CreateInstructor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TcreateInstructor>({ resolver: zodResolver(createInstructor) });

  const { data, mutate, isPending } = usePost("/user/instructor/create");
  const submit = async (userData: TcreateInstructor) => {
    mutate(userData);
    // if(data?.data?.succes)
  };

  return (
    <div className="bg-[#170f21] rounded-xl p-6 text-white">
      <h2 className="mb-6 text-xl font-bold">Create Instructor</h2>
      <form onSubmit={handleSubmit(submit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium">
            Full Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Enter full name"
            id="name"
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="Enter email"
            id="email"
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 text-sm font-medium">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            placeholder="Enter password"
            id="password"
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          {isPending ? (
            <Spinner color="warning" size="sm" />
          ) : (
            "Create Instructor"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateInstructor;
