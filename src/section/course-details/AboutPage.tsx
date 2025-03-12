
import CommonContainer from "../../common/CommonContainer";
import CommonSpace from "../../common/CommonSpace";
import Img from "../../assets/Jhankar-Mahbub.png"
import team from "../../assets/team-bg.png"
import team2 from "../../assets/glow-bg.png"


interface TeamMember {
  id: number;
  name: string;
  designation: string;
  imgSrc: string;
}

const teamMembers: TeamMember[] = new Array(50).fill(null).map((_, index) => ({
  id: index + 1,
  name: `Team Member ${index + 1}`,
  designation: `Designation ${index + 1}`,
  imgSrc:Img , 
}));

interface TeamCardProps {
  imgSrc: string;
  name: string;
  designation: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ imgSrc, name, designation }) => {
  return (
    <div className="bg-black flex flex-col gap-4 items-center rounded-lg overflow-hidden w-full sm:w-48 md:w-56 lg:w-64 m-4 transition-all duration-300 hover:scale-105 group shadow-lg relative">
      
      {/* Background Image Changes on Hover */}
      <div className="relative md:w-[80%] w-[56%] h-[250px] overflow-hidden top-[53px]">
        <img
          src={team}
          alt="Default Background"
          className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0 "
        />
        
        <img
          src={team2}
          alt="Hover Background"
          className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 "
        />
      </div>

      {/* User Profile Image (No Hover Effect) */}
     
      <div className="clip-custom-shape overflow-hidden absolute  z-15">
      <img src={imgSrc} alt={name} className="w-full transition-all duration-300 h-[300px] " />
    </div>
      {/* Name & Designation */}
      <div className="mt-16 p-4 text-center">
        <h3 className="text-xl text-white font-semibold">{name}</h3>
        <p className="text-gray-500">{designation}</p>
      </div>
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#010313]">
      <CommonContainer>
        <CommonSpace>
          <div className="mx-auto p-8">
            <h2 className="md:text-7xl font-bold text-center mb-8 text-purple-300 text-5xl ">
              Meet our team_
            </h2>
            <div className="flex flex-wrap justify-center md:pt-[50px]">
              {teamMembers.map((member) => (
                <TeamCard
                  key={member.id}
                  imgSrc={member.imgSrc}
                  name={member.name}
                  designation={member.designation}
                />
              ))}
            </div>
          </div>
        </CommonSpace>
      </CommonContainer>
    </div>
  );
};

export default AboutPage;
