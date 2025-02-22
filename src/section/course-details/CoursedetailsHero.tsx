import CommonContainer from "../../common/CommonContainer"
import CommonSpace from "../../common/CommonSpace"
import htmlImg from "../../assets/course details/Html.svg"
import reactImg from "../../assets/course details/React.svg"
import tailwindImg from "../../assets/course details/Tailwind.svg"

const CoursedetailsHero = () => {
    return (
        <div className="bg-gradient-to-b from-[#10031A] to-[#2E0746]   text-center">
            <CommonContainer>

                <CommonSpace>
                    <div className="">
                    
                            <img src={htmlImg} alt=""  className="lg:block md:hidden hidden w-16 absolute top-[160px] left-[160px] animate-rotated-bounce"/>  
                            
                            <img src={reactImg} alt=""  className="lg:block md:hidden hidden w-16 absolute top-[250px] left-[250px] animate-custom-spin"/> 
                            <img src={reactImg} alt=""  className="lg:block md:hidden hidden w-16 absolute top-[160px] right-[160px] animate-custom-spin"/>
                            <img src={tailwindImg} alt=""  className="lg:block md:hidden hidden w-16 absolute top-[250px] right-[250px] animate-swing-rotate"/> 

                        <div className=" md:w-[60%] w-full mx-auto text-center">
                            <h2 className="text-white md:text-4xl text-2xl font-semibold text-center md:leading-[60px] px-3 md:px-8">Breakthroughs Begin with learning, reach for the future you deserve</h2>
                            <p className="text-white/50 text-lg  text-center leading-7 pt-5">Master MongoDB, Express, React, and Node.js to build efficient, full-stack web applications from scratch. Connect front-end and back-end seamlessly for a smooth user experience.</p>

                        </div>
        

                    </div>

                </CommonSpace>

            </CommonContainer>
        </div>
    )
}

export default CoursedetailsHero
