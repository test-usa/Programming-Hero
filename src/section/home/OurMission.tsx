import CommonContainer from "../../common/CommonContainer"
import CommonSpace from "../../common/CommonSpace"
import team from "../../assets/team.webp"
import SapceBottom from "../../common/SapceBottom"


const OurMission = () => {
  return (
    <div className="bg-[#0D0518] p-5 ">
    <CommonSpace>
        <CommonContainer>
        <SapceBottom>
        <h2 className=" relative text-center bg-[linear-gradient(97.64deg,#eaaaff,#b5acff)] bg-clip-text text-transparent md:text-7xl text-4xl after:absolute after:bg-text-gradient after:inset-0 after:h-2  after:w-[10%] after:mx-auto after:top-20">
    Our Mission_
       </h2>
       </SapceBottom>
      
       <div className="md:w-[85%] p-5 md:flex gap-5 w-full">
            <div className="md:w-1/2 w-full p-3">
                <img src={team} alt="" className="w-full rounded-lg" />
            </div>
            <div className="md:w-1/2 w-full p-3">
           
   <p className="text-lg text-white"> <span className="text-[#D14DC9]">Why:</span> We are passionate about empowering individuals to transform their lives through the power of coding. We believe that everyone should have access to high-quality, affordable coding education, regardless of their background or experience. 
<p className="text-lg text-white"><span className="text-[#D14DC9]"> What:</span> We provide a comprehensive range of online programming courses, from beginner-level Web Development to advanced CSE Fundamentals and Advanced Programming Courses. Our courses are designed to be engaging, effective, and tailored to the needs of today's learners. </p>
     

     <p className="text-lg text-white"> <span className="text-[#D14DC9]"> What:</span> We nurture our students in a personalized and supportive environment that fosters confidence and success. Our friendly and dedicated instructors are always available to guide and mentor our students, ensuring they receive the support they need to achieve their coding goals.
     Level-4, 34, Awal Centre, Banani, Dhaka</p>
</p>

            </div>

         </div>
       
        </CommonContainer>


    </CommonSpace>
      
    </div>
  )
}

export default OurMission
