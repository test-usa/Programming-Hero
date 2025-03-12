import { Spinner } from "@heroui/spinner";
import usePost from "../../hooks/shared/usePost";
import { useState } from "react";
import { toast } from "react-toastify";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const { mutate, isPending } = usePost("/auth/forgot-password");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required!");
      return;
    }

    mutate(
      { email },
      {
        onSuccess: () => {
          setEmail(""); 
        },
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-16 md:block">
      <h2 className="self-start py-5 bg-[linear-gradient(97.64deg,#eaaaff,#b5acff)] bg-clip-text text-transparent text-5xl">
        Forgot password
      </h2>
      <div className="bg-[rgba(10,10,43,.75)] backdrop-blur text-white max-w-xl w-full rounded-3xl px-6 py-10">
        <div className="flex flex-col items-center justify-center w-full gap-4">
         

          <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
            <input
              className="w-full p-4 bg-[#131237] outline-none rounded-lg border border-transparent focus-within:border-[#405aff]"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

       
            <button
              type="submit"
              className="relative bg-clip-padding p-4 bg-[#080723] w-full before:absolute before:inset-0 before:bg-[linear-gradient(90deg,#384fde,#985cf0)] before:-m-[1px] before:rounded-lg before:-z-10 rounded-lg hover:bg-[linear-gradient(90deg,#384fde,#985cf0)] transition-all"
              disabled={isPending} 
            >
              {isPending ? <Spinner color="warning" size="sm" /> : "Next"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
