import { ReactNode, createContext, useState } from "react";

const DashContex = createContext<any>(null);
const DashContextProvider = ({ children }: { children: ReactNode }) => {
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const data = {
    setTotalPage,
    totalPage,
  };
  return <DashContex.Provider value={data}>{children}</DashContex.Provider>;
};

export default DashContextProvider;
