import CommonContainer from "../../common/CommonContainer"
import codeImg from "../../assets/course details/code-box.svg"
import SpecialityCard from "./SpecialityCard"
import customer from "../../assets/course details/customer-service 2.svg"
import interview from "../../assets/course details/Interview.svg"
import job from "../../assets/course details/job-search.svg"
import live from "../../assets/course details/live-class.svg"
import ebook from "../../assets/course details/ebook.svg"
import steeming from "../../assets/course details/streaming.svg"
import remort from "../../assets/course details/remote-working.svg"


const Specialty = () => {
  return (
    <div className="bg-gradient-to-b from-[#04021C] via-[#210168] to-[#5400EE] p-4 md:pb-[100px] ">
      <CommonContainer>
        <div className="md:w-[85%] w-full mx-auto">
            <h2 className=" md:text-4xl  text-2xl font-semibold text-white text-center capitalize">What Is The Specialty_ Of This Course?</h2>
            
            <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center  gap-5">
               
               <SpecialityCard
                 imgSrc={codeImg}
                 title="Web Development Complete Course"
                 description="By watching a few videos, you will learn HTML, CSS and create two beautiful websites. And you can share those links with anyone."
               
               /> 
               <SpecialityCard
                 imgSrc={ customer}
                 title="Unlimited Support"
                 description="Any questions you may have will be answered within 24 hours during the course (except holidays) kill the owl."
               
               />
                <SpecialityCard
                 imgSrc={interview}
                 title="Special Interview Preparation Group"
                 description="Special Interview Preparation GroupThose who will work daily. 6 to 8 hours will be given daily. Determine the course with passion and seriousness."
               
               />
               <SpecialityCard
                 imgSrc={job}
                 title="Job Placement Coach"
                 description="A couple of concepts to learn may not be clear to everyone at first glance. This is very normal. about this."
               
               />
                <SpecialityCard
                 imgSrc={live}
                 title=" Live Conceptual Session"
                 description="A couple of concepts to learn may not be clear to everyone at first glance. This is very normal. about this."
               
               /> 
               <SpecialityCard
                 imgSrc={ebook}
                 title="Advance Crash Course (ACC)"
                 description="You're not just enrolling in a course at Programming Hero. Rather on a mission to learn life long web development."
               
               />

<SpecialityCard
      imgSrc={steeming}
      title="Option to watch offline videos"
      description="You do not have broadband! Mobile data or buy MB to watch videos? Like int to watch the same video over and over again."
    
    />
    <SpecialityCard
      imgSrc={remort}
      title="International Job Placement"
      description="In the era of globalization, why is your job placement target only Bangladesh? Rather that of the world."
    
    />
          
            </div>            
           
            
        </div>
      </CommonContainer>
    </div>
  )
}

export default Specialty
