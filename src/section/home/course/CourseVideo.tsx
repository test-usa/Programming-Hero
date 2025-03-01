import { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
const CourseVideo = ({ setIsPlay }) => {

    const modal = useRef();
    useEffect(() => {
      const handler = (e) => {
        if (!modal.current?.contains(e.target)) {
          setIsPlay(false);
        }
      };

      document.addEventListener("mousedown", handler);
    });
  return (
    <div ref={modal} className="flex flex-col-reverse gap-2 sm:flex-row w-full md:w-[60%] lg:w-[40%] px-4">
      <iframe 
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/-pUYbz0v70c?si=2Keet-7EAFUETRmz"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <div onClick={()=>{setIsPlay(false)}} className="text-4xl text-white max-sm:self-end">
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default CourseVideo;
