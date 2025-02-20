
interface SpecialityCard {
    imgSrc: string;
    title: string;
    description: string;
    className?: string;
  }

const CourseWorkCard = ({imgSrc, title, description,className}: SpecialityCard) => {
  return (
 
      <div>
         <div className="hover:bg-gradient-to-l  border hover:border-[#a855f7] hover:from-[#11043C] hover:to-[#291139]  border-[rgb(255,125,255,0.05)] bg-[rgb(255,255,255,0.05)] p-5 rounded-lg mb-5 group  hover:brightness-100 transition-all duration-300 ease-in-out">
      <img
        src={imgSrc}
        alt="Course Image"
        
      />
      <h2 className="text-2xl font-semibold pt-4 group-hover:text-[#E050DF] text-white">
        {title}
      </h2>
      <p className="text-lg pt-4 text-white/50 group-hover:text-white">
        {description}
      </p>
        </div>
    </div>
    
  )
}

export default CourseWorkCard
