import TestimonialCard from "./TestimonialCard"
import student1 from "../../assets/student1.webp"
import student2 from "../../assets/student2.webp"
import student3 from "../../assets/student3.webp"
import student4 from "../../assets/student4.webp"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const SuccesStory = () => {
    var settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };




  return (
    <div className="bg-[#0D0518] p-5 ">
       <h2 className=" relative text-center bg-[linear-gradient(97.64deg,#eaaaff,#b5acff)] bg-clip-text text-transparent md:text-7xl text-4xl after:absolute after:bg-text-gradient after:inset-0 after:h-2  after:w-[10%] after:mx-auto after:top-20">
       Success_ Story
          </h2>


          <div className=" overflow-x-hidden pt-[100px]">
     <Slider {...settings}>

         
             <TestimonialCard
            name="Mahdi Hasan"
            position="Software Engineer"
            company="TechCorp"
            imageUrl={student1}
            message="Programming Hero changes my life within six months. I thought I was so lucky to join the programming hero community. Thank you so much jhankar mahbub vaiya."
            bgColor="bg-gradient-to-r from-[#264F60] to-[#0E1222]" 
            buttonColor="bg-gradient-to-r from-[#08907C] to-[#264F60]" 
            textColor="white"
            batch="Batch 7" /> 
            
             <TestimonialCard
            name="Shaif Shajed Tonoy"
            position=" MERN Stack Developer"
            company="Antopolis"
            imageUrl={student2}
            message="Programming Hero is not just a course. It is a complete guideline for the career. If you are determined, you'll surely get a path In Sha Allah. You will learn from scratch and becomes an entry-level developer. Thanks to Almighty Allah for making me suitable for a journey with Programming Hero."
            bgColor="bg-gradient-to-l from-[#25082E] to-[#4C0B52]" 
            buttonColor="bg-gradient-to-l from-[#6F10EC] to-[#C742E1]" 
            textColor="white"
            batch="Batch 6" /> 

             <TestimonialCard
            name="Arifuzzaman Tusar"
            position="IT Specialist"
            company="Priequity LLC"
            imageUrl={student3}
            message="Programming Hero, Helped me to bloom myself for the carrier by providing lots of guide and instructions. Specially SCIC and BootsCamps are awesomeness! Learned a lot from SCIC and Carrier Buildup bootcamp thats uncountable."
            bgColor="bg-gradient-to-l from-[#281518] to-[#482918]" 
            buttonColor="bg-gradient-to-l from-[#ED1476] to-[#E9565F]" 
            textColor="white" 
            batch="Batch 5"/>
            
             <TestimonialCard
            name="Niloy Das"
            position="Full Stack Developer"
            company="Tender Trading Inc."
            imageUrl={student4}
            message="Programming Hero, Helped me to bloom myself for the carrier by providing lots of guide and instructions. Specially SCIC and BootsCamps are awesomeness! Learned a lot from SCIC and Carrier Buildup bootcamp thats uncountable."
            bgColor="bg-gradient-to-r from-[#1B0D5A] to-[#140936]" 
            buttonColor="bg-gradient-to-r from-[#7211EB] to-[#BF3EE2]" 
            textColor="white" 
            batch="Batch 9"/>

<TestimonialCard
            name="Arifuzzaman Tusar"
            position="IT Specialist"
            company="Priequity LLC"
            imageUrl={student3}
            message="Programming Hero, Helped me to bloom myself for the carrier by providing lots of guide and instructions. Specially SCIC and BootsCamps are awesomeness! Learned a lot from SCIC and Carrier Buildup bootcamp thats uncountable."
            bgColor="bg-gradient-to-l from-[#281518] to-[#482918]" 
            buttonColor="bg-gradient-to-l from-[#ED1476] to-[#E9565F]" 
            textColor="white" 
            batch="Batch 5"/>

             <TestimonialCard
            name="Mahdi Hasan"
            position="Software Engineer"
            company="TechCorp"
            imageUrl={student1}
            message="Programming Hero changes my life within six months. I thought I was so lucky to join the programming hero community. Thank you so much jhankar mahbub vaiya."
            bgColor="bg-gradient-to-r from-[#264F60] to-[#0E1222]" 
            buttonColor="bg-gradient-to-r from-[#08907C] to-[#264F60]" 
            textColor="white"
            batch="Batch 7" /> 
             <TestimonialCard
            name="Arifuzzaman Tusar"
            position="IT Specialist"
            company="Priequity LLC"
            imageUrl={student3}
            message="Programming Hero, Helped me to bloom myself for the carrier by providing lots of guide and instructions. Specially SCIC and BootsCamps are awesomeness! Learned a lot from SCIC and Carrier Buildup bootcamp thats uncountable."
            bgColor="bg-gradient-to-l from-[#281518] to-[#482918]" 
            buttonColor="bg-gradient-to-l from-[#ED1476] to-[#E9565F]" 
            textColor="white" 
            batch="Batch 5"/>
            
    </Slider>
          </div>
    </div>
  )
}

export default SuccesStory
