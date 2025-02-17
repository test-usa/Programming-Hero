import { TChildrenProps } from "../types/Types";
const CommonWrapper = ({ children, Class }:TChildrenProps) => {
  return (
    <div className={`max-w-[1520px] mx-auto px-4 ${Class}`}>{children}</div>
  );
};

export default CommonWrapper;
