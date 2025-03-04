import React from "react";
import CommonContainer from "../../../../common/CommonContainer";

interface Testimonial {
  id: number;
  name: string;
  jobTitle: string;
  company: string;
  description: string;
  batch: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Md Abdullah Al Noman",
    jobTitle: "Software Engineer (Full-Time Intern)",
    company: "EMYTHMAKERS.COM",
    description:
      "আমি যখন প্রার্থীদের সাথে সম্পর্কে জানি তখনই প্রথম ব্যাচের সাথে কোর...",
    batch: "Batch 2",
    imageUrl:
      "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1740645933~exp=1740649533~hmac=6baefcdb4f45508cc46c4815ae68012137b9b3c359a84e4f5d94ce6f0e9bee36&w=740", // Replace with actual image
  },
  {
    id: 2,
    name: "Md. Alamin Ul Islam",
    jobTitle: "Front-End Developer (Full-Time)",
    company: "TECHFORING LTD.",
    description:
      "Programming Hero team helps me to make my basics strong and keep me busy wit...",
    batch: "Batch 2",
    imageUrl:
      "https://img.freepik.com/free-vector/gradient-avatar-illustration_52683-142426.jpg?t=st=1740646022~exp=1740649622~hmac=c48ed9d92641856bf0192c43e6684c2647e270d2eb35c547faa89d10acd13637&w=740", // Replace with actual image
  },
  {
    id: 3,
    name: "John Doe",
    jobTitle: "Backend Developer",
    company: "XYZ Tech",
    description: "Building scalable backend systems and APIs...",
    batch: "Batch 3",
    imageUrl:
      "https://img.freepik.com/premium-vector/cool-afro-man_3042-371.jpg?w=740",
  },
  {
    id: 4,
    name: "Jane Smith",
    jobTitle: "UI/UX Designer",
    company: "DesignHub",
    description: "Passionate about creating user-friendly interfaces...",
    batch: "Batch 4",
    imageUrl:
      "https://img.freepik.com/premium-vector/free-vector-highly-detailed-cartoon-artwork-cartoon-style-vector-icon-illustration_1116403-355.jpg?w=740",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="bg-[#120f3c] text-white rounded-lg p-5 flex items-center gap-6 shadow-lg">
      {/* Left Section - Profile Image */}
      <div className="relative w-24 h-24">
        <img
          src={testimonial.imageUrl}
          alt={testimonial.name}
          className="w-full h-full rounded-lg object-cover"
        />
        <span className="absolute bottom-1 left-1 bg-purple-600 text-white text-xs px-2 py-1 rounded-md">
          {testimonial.batch}
        </span>
      </div>

      {/* Right Section - Content */}
      <div className="flex-1">
        <h3 className="text-sm text-gray-400 uppercase">
          {testimonial.company}
        </h3>
        <h2 className="text-lg font-bold">{testimonial.name}</h2>
        <p className="text-sm text-gray-400">{testimonial.jobTitle}</p>
        <p className="text-sm mt-2 text-gray-300">
          {testimonial.description}{" "}
          <span className="text-orange-400 font-medium cursor-pointer">
            See More
          </span>
        </p>
      </div>
    </div>
  );
};

// Main Component that maps through testimonials
const CardList: React.FC = () => {
  return (
    <div className="bg-[#08061A] p-10">
      <CommonContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </CommonContainer>
    </div>
  );
};

export default CardList;
