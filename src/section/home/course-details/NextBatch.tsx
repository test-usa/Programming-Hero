import CommonContainer from "../../../common/CommonContainer"
import CommonSpace from "../../../common/CommonSpace"
import enrollmentImg from "../../../assets/course details/enrollment-start.svg"
import enrollmentImg1 from "../../../assets/course details/enrollment-end.svg"
import webinartImg from "../../../assets/course details/webinar2.svg"


const NextBatch = () => {
  return (
    <div className="bg-[#010313]">
      <CommonSpace>
      <CommonContainer>
        <h2 className="text-center text-white text-4xl font-semibold">Next Batch Schedule</h2>

        <div className="p-8 m-8 bg-gradient-to-b from-[#181829] to-[#020414] rounded-3xl"> 
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3 sm:justify-center">
                <div>
                  <img src={enrollmentImg} alt="Enrollment Starts" />
                </div>
                <div>
                  <h3 className="text-white/50 text-lg">Enrollment Starts</h3>
                  <p className="text-white text-xl font-semibold">10 June, 2025</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:justify-center">
                <div>
                  <img src={enrollmentImg1} alt="Enrollment End" />
                </div>
                <div>
                  <h3 className="text-white/50 text-lg">Enrollment End</h3>
                  <p className="text-white text-xl font-semibold">25 June, 2025</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:justify-center">
                <div>
                  <img src={webinartImg} alt="Orientation Starts" />
                </div>
                <div>
                  <h3 className="text-white/50 text-lg">Orientation Starts</h3>
                  <p className="text-white text-xl font-semibold">28 June, 2025</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:justify-center">
                <div>
                  <img src={webinartImg} alt="Orientation Starts" />
                </div>
                <div>
                  <h3 className="text-white/50 text-lg">Orientation Starts</h3>
                  <p className="text-white text-xl font-semibold">30 June, 2025</p>
                </div>
              </div>
           
      </div>
      <hr className="mt-5 border-white/40"/>
           <div className=" text-center pt-5">
               <p className="text-white/50 capitalize text-lg p-5">If you are interested To <span className="text-[#C85E4E]">enroll in 12th batch,</span> register on the website</p>
                <button className="px-3 py-2 mt-5 text-lg rounded-md font-semibold text-white bg-custom-gradient hover:brightness-125">Enroll Now</button>

                <h2 className="text-white text-4xl font-semibold pt-10">What you will learn_ from this course?</h2>
                <button className="px-3 py-2 mt-5 text-lg rounded-md font-semibold text-white bg-custom-gradient ">Enroll Now</button>
           </div>
        </div>
      </CommonContainer>
      </CommonSpace>
      

    </div>
  )
}

export default NextBatch
