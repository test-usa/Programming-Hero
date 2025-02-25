import { create } from "zustand";
import { persist } from "zustand/middleware";
type UserType = {
  state: number;
  increment: () => void;
  decrement: () => void;
};
const userStore = create<UserType>(
  persist((set) => ({
    state: 0,
    increment: () => set((value) => ({ state: value.state + 1 })),
    decrement: () => set((value) => ({ state: value.state - 1 })),
  }))
);

const Test = () => {
  const { state, increment, decrement } = userStore();
  return (
    <div className="flex items-center gap-5 text-white">
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button>{state}</button>
    </div>
  );
};

export default Test;
