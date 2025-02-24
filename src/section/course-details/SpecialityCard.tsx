
interface SpecialityCard {
    imgSrc: string;
    title: string;
    description: string;
    className?: string;
  }

const SpecialityCard = ({ imgSrc, title, description,className}: SpecialityCard) => {
  return (
    <div>
       <div className="h-[300px]  bg-gradient-to-b from-[#ffffff1a] to-[#99999900] mt-3 md:p-6 p-3 rounded-2xl text-white hover:bg-gradient-to-b hover:from-[#FFA08C] hover:to-[#FD3F85] hover:text-black transition-all duration-300 ease-in-out">
      <img
        src={imgSrc}
        alt="Course Image"
        
      />
      <h2 className="md:text-2xl text-lg font-semibold pt-4">
        {title}
      </h2>
      <p className="md:text-lg trxt-base pt-4">
        {description}
      </p>
    </div>
    </div>
  )
}

export default SpecialityCard
