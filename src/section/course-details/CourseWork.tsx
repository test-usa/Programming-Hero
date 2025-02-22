import CommonContainer from "../../common/CommonContainer"
import CourseWorkCard from "./CourseWorkCard"
import time from "../../assets/course details/time-management.svg"
import screen from "../../assets/course details/screen.svg"
import searching from "../../assets/course details/searching.svg"
import webner from "../../assets/course details/webinar.svg"
import paper from "../../assets/course details/paper.svg"
import scolar from "../../assets/course details/scholarship.svg"
import customer from "../../assets/course details/customer-service.svg"
import online from "../../assets/course details/online-education.svg"


const CourseWork = () => {
  return (
  
       
    
<div className="relative bg-[#010312] md:h-[2300px] h-[3000px]">
  {/* SVG Curve at the Top */}
  <svg className="absolute top-0 left-0 w-full md:block hidden" viewBox="0 0 1440 320">
    <path fill="#5400EE" fillOpacity="1" d="M0,96 C360,0 1080,0 1440,96 L1440,0 L0,0 Z"></path>
  </svg>

  {/* Div inside the SVG area */}
  <div className="absolute md:top-[150px] w-full">
    <CommonContainer>
      <div className="md:w-[85%] w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-6"> 
        <div className="p-11 ">
          <h1 className="text-white md:text-5xl text-2xl font-semibold">How Will This Course Work_?</h1>
          <p className="text-white text-lg text-white/50 md:pt-5 pt-3 ">
            This course guides you from basics to mastering the MERN stack with step-by-step lessons, hands-on projects, and assessments.
          </p>
          <button className="px-3 py-2 mt-5 text-lg rounded-md font-semibold text-white bg-custom-gradient hover:brightness-125">Enroll Now</button>
        </div>
        <div className=" ">
       <CourseWorkCard
        imgSrc={time}
        title="Module Release Time"
        description="Everyday we will be given a module/practice task. Videos will be released at 10.00pm. Smart students may trick our system to get module access 2 hours earlier than everyone else"
       />  
       
        <CourseWorkCard
        imgSrc={screen}
        title="Watch Time Duration"
        description="A full module has approximately 10 videos (each video 12-14 min). You have to spend 4-5 hours watching, practicing the contents. We recommend allocating 6-8 hours everyday for this course."
       />    
        <CourseWorkCard
        imgSrc={searching}
        title="Search Similar Topic Online"
        description="Keep 1-2 hours everyday to clear our doubts from google, or using our support system. If you do not have any doubts, we recommend you search the similar topic of the module online"
       />    
       <CourseWorkCard
        imgSrc={webner}
        title="Live Conceptual Session"
        description="You will have a practice day after every 2-4 modules. And there will be a conceptual session on that practice day. We highly recommend our students to join the live conceptual session."
       />  
        <CourseWorkCard
        imgSrc={paper}
        title="Assignment Submit"
        description="After every 4-7 modules, you will have an assignment. Finish the assignment on time to be considered for 60 marks. If you are late by one day, you will be considered for 50 marks. And if you submit the assignment late, you will be considered for 30 marks."
       />   
        <CourseWorkCard
        imgSrc={scolar}
        title="SCIC"
        description="If you finish our main course on time with good marks, you will qualify for the SCIC. you will have to stay focused and dedicated to finish the course on time."
       /> 
         <CourseWorkCard
        imgSrc={customer}
        title="Support Session"
        description="We will answer every question related to our course within 10 hours. Also, you may join our live support session three times in a day (Friday morning there won't be any live support session)"
       />   
       <CourseWorkCard
        imgSrc={online}
        title="20 Week Course"
        description="We believe there is no shortcut, other than hard work. So, be committed to invest 6-8 hours every single day for the next 20 weeks to finish our main course on time."
       />  
      


      </div>
      </div>
    </CommonContainer>
  </div>
  
  

</div>



  
  )
}

export default CourseWork
