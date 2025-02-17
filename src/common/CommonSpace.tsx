
import { TChildrenProps } from "../types/Types";


const CommonSpace = ({ children }:TChildrenProps) => {
  return <div className="py-16 w-full">{children}</div>;
};

export default CommonSpace;
