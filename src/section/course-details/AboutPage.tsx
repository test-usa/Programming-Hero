
import CommonContainer from "../../common/CommonContainer";
import CommonSpace from "../../common/CommonSpace";
import Img from "../../assets/Jhankar-Mahbub.png"


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
    <div className="bg-black border border-black shadow-lg rounded-lg overflow-hidden w-full sm:w-48 md:w-56 lg:w-64 m-4 transition-all duration-300 hover:scale-105 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-500/50">
    <img src={imgSrc} alt={name} className="w-full transition-all duration-300 hover:opacity-80" />
    <div className="p-4">
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
            <h2 className="text-4xl font-bold text-center mb-8 text-white sm:text-3xl md:text-4xl">
              Meet our team_
            </h2>
            <div className="flex flex-wrap justify-center">
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
