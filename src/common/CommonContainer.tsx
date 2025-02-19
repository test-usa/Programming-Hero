import { TChildrenProps } from "../types/Types";
const CommonContainer = ({ children, Class }: TChildrenProps) => {
  return (
    <div className={`max-w-[1520px] mx-auto px-4 ${Class}`}>{children}</div>
  );
};

export default CommonContainer;
