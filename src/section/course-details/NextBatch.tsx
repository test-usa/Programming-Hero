import CommonContainer from "../../common/CommonContainer"
import CommonSpace from "../../common/CommonSpace"
import enrollmentImg from "../../assets/course details/enrollment-start.svg"
import enrollmentImg1 from "../../assets/course details/enrollment-end.svg"
import webinartImg from "../../assets/course details/webinar2.svg"
import vedioImg from "../../assets/course details/vedio.png"
import { FaPlay, FaTimes } from "react-icons/fa";
import { useState } from "react"
import Modal from "./Modal"

const NextBatch = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);

  };

  const handleCloseClick = () => {
    setShowVideo(false);
  };


  // State for modal visibility



  const handleEnrollClick = () => {
    setIsModalOpen(true); // Open modal when button is clicked
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="bg-[#010313]">
      <CommonSpace>
        <CommonContainer>
          <div className="md:px-11 md:p-5">
            <h2 className="text-center text-white md:text-4xl text-2xl pb-2 font-semibold">Next Batch Schedule</h2>

            <div className="md:p-8 md:m-8 p-3 bg-gradient-to-b from-[#181829] to-[#020414] rounded-3xl md:pb-[200px] md:w-[85%] w-full mx-auto">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center gap-3 sm:justify-center">
                  <div>
                    <img src={enrollmentImg} alt="Enrollment Starts" className="" />
                  </div>
                  <div>
                    <h3 className="text-white/50  text-base md:text-lg">Enrollment Starts</h3>
                    <p className="text-white md:text-xl text-base font-semibold">10 June, 2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:justify-center">
                  <div>
                    <img src={enrollmentImg1} alt="Enrollment End" />
                  </div>
                  <div>
                    <h3 className="text-white/50 md:text-lg text-base">Enrollment End</h3>
                    <p className="text-white md:text-xl text-base font-semibold">25 June, 2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:justify-center">
                  <div>
                    <img src={webinartImg} alt="Orientation Starts" />
                  </div>
                  <div>
                    <h3 className="text-white/50 md:text-lg text-base">Orientation Starts</h3>
                    <p className="text-white md:text-xl text-base font-semibold">28 June, 2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:justify-center">
                  <div>
                    <img src={webinartImg} alt="Orientation Starts" />
                  </div>
                  <div>
                    <h3 className="text-white/50 md:text-lg text-base">Orientation Starts</h3>
                    <p className="text-white md:text-xl text-base font-semibold">30 June, 2025</p>
                  </div>
                </div>

              </div>
              <hr className="mt-5 border-white/40" />
              <div className=" md:text-center pt-5">
                <p className="text-white/50 capitali text-lg  p-2 md:p-5">If you are interested To <span className="text-[#C85E4E]">enroll in 12th batch,</span> register on the website</p>
                <button
                     onClick={handleEnrollClick} // Open the modal
                 className="px-3 py-2 mt-5 text-lg rounded-md font-semibold text-white bg-custom-gradient hover:brightness-125">Enroll Now</button>

                <h2 className="text-white md:text-4xl  text-2xl font-semibold pt-10  pb-6">What you will learn_ from this course?</h2>

                <div className=" ">
                  <button className="px-3 mx-4  py-2 mt-5 text-lg rounded-md font-semibold text-[#C85E4E] bg-[#251216]   ">HTML</button>
                  <button className="px-3 mx-4 py-2 mt-5 text-lg rounded-md font-semibold text-[#275DDE] bg-[#071234]  ">CSS</button>
                  <button className="px-3 mx-4 py-2 mt-5 text-lg rounded-md font-semibold text-[#38BDF8] bg-[#091F35]  ">Talwind</button>
                  <button className="px-3 mx-4 py-2 mt-5 text-lg rounded-md font-semibold text-[#EED71E] bg-[#262414]  ">JavaScript</button>
                  <button className="px-3 mx-4 py-2 mt-5 text-lg rounded-md font-semibold text-[#38BDF8] bg-[#091F35]  ">React</button>
                  <button className="px-3 mx-4 py-2 mt-5 text-lg rounded-md font-semibold text-[#C85E4E] bg-[#251216]   ">Firebase</button>
                  <button className="px-3 mx-4 py-2 mt-5 text-lg rounded-md font-semibold text-[#80BD00] bg-[#141F10]   ">Node JS</button>
                  <button className="px-3 mx-4 py-2 mt-5 text-lg rounded-md font-semibold text-[#EED71E] bg-[#262414]  ">Express JS</button>
                  <button className="px-3 mx-4 py-2 mt-5 text-lg rounded-md font-semibold text-[#499E3E] bg-[#0D1C1A]  ">MongoDB</button>
                </div>
              </div>

              <div className=" flex flex-col justify-center items-center mt-10">
              <div
                className="md:w-[80%] h-[500px] bg-no-repeat rounded-2xl w-full flex items-center justify-center bg-cover  md:mt-0 mt-3"
                style={{ backgroundImage: `url(${vedioImg})` }} >
                <div>
                  {!showVideo && (
                    <div
                      onClick={handlePlayClick}
                      className="bg-[#F69470] border-[10px] w-[60px] h-[60px] rounded-full border-white/50 flex items-center justify-center animate-pulse duration-[2s] cursor-pointer" >
                      <FaPlay className="text-white" /> </div>
                  )}

                  {showVideo && (
                    <div className="relative">

                      <div
                        onClick={handleCloseClick}
                        className="fixed top-[200px] right-[450px] text-white text-3xl cursor-pointer z-20"
                      >
                        <FaTimes />
                      </div>

                      <iframe
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[50%] w-full h-[50%] z-10"

                        width="730"
                        height="450"
                        src="https://www.youtube.com/embed/nNOQQGszHVA?start=5&autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      >

                      </iframe>
                    </div>
                  )}
                </div>
              </div>
              </div>
            </div>
          </div>
        </CommonContainer>
      </CommonSpace>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} /> {/* Pass modal state */}
    </div>
  )
}

export default NextBatch
