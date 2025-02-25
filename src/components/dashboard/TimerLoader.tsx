import { useEffect } from "react";

const TimerLoader = ({ isLoading }: { isLoading: boolean }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      isLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return <p>Not Found, Please wait few of second</p>;
};

export default TimerLoader;
