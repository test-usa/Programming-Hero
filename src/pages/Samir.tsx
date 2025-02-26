import { NavLink, Outlet } from "react-router-dom";
import CommonContainer from "../common/CommonContainer";
import DashNavbar from "../components/dashboard/DashNavbar";
import Footer from "../layout/Footer";
import {
  User,
  Info,
  MapPin,
  GraduationCap,
  Link as LinkIcon,
  Star,
  Target,
  Briefcase,
  History,
  Award,
  BookOpen,
  ShoppingBag,
  CheckCircle,
  Users,
  FileText,
  PlusCircle,
  Book,
} from "lucide-react";

// Define menu items for different roles
const studentMenuItems = [
  {
    path: "/dashboard/profile",
    label: "My Profile",
    icon: <User size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/additional-info",
    label: "Additional Info",
    icon: <Info size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/address",
    label: "Address",
    icon: <MapPin size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/education",
    label: "Education",
    icon: <GraduationCap size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/important-links",
    label: "Important Links",
    icon: <LinkIcon size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/skill-set",
    label: "Skill Set",
    icon: <Star size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/level-2-goal",
    label: "Level-2 Goal",
    icon: <Target size={18} />,
    completed: false,
  },
  {
    path: "/dashboard/job-profile",
    label: "Job Profile",
    icon: <Briefcase size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/job-experience",
    label: "Job Experience",
    icon: <History size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/got-hired",
    label: "Got Hired",
    icon: <Award size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/course-request",
    label: "Course Request",
    icon: <BookOpen size={18} />,
    completed: false,
  },
  {
    path: "/dashboard/order-history",
    label: "Order History",
    icon: <ShoppingBag size={18} />,
    completed: false,
  },
  {
    path: "/dashboard/certification",
    label: "Certification",
    icon: <Award size={18} />,
    completed: false,
  },
];

const adminMenuItems = [
  {
    path: "/dashboard/profile",
    label: "My Profile",
    icon: <User size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/admins",
    label: "Admins",
    icon: <Users size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/instructors",
    label: "Instructors",
    icon: <Users size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/students",
    label: "Students",
    icon: <Users size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/create-instructor",
    label: "Create Instructor",
    icon: <PlusCircle size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/courses",
    label: "Courses",
    icon: <FileText size={18} />,
    completed: true,
  },
];

const superAdminMenuItems = [
  ...adminMenuItems.filter((item) => item.label !== "Create Instructor"), // Exclude "Create Instructor"
  {
    path: "/dashboard/create-user",
    label: "Create User",
    icon: <PlusCircle size={18} />,
    completed: true,
  },
];

const instructorMenuItems = [
  {
    path: "/dashboard/profile",
    label: "My Profile",
    icon: <User size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/courses",
    label: "Courses",
    icon: <Book size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/create-course",
    label: "Create Course",
    icon: <PlusCircle size={18} />,
    completed: true,
  },
  {
    path: "/dashboard/students",
    label: "All Students",
    icon: <Users size={18} />,
    completed: true,
  },
];

const Samir = () => {
  // Determine the user's role (this can come from your authentication system or context)
  const userRole = "admin"; // Example: 'student', 'admin', 'superAdmin', or 'instructor'

  // Choose the appropriate menu items based on the user's role
  const menuItems =
    userRole === "admin"
      ? adminMenuItems
      : userRole === "superAdmin"
      ? superAdminMenuItems
      : userRole === "instructor"
      ? instructorMenuItems
      : studentMenuItems;

  return (
    <main className="bg-[#010313] w-full">
      <DashNavbar />
      <CommonContainer>
        <section className="mx-auto grid lg:grid-cols-4 gap-7 mt-5 mb-14">
          {/* Sidebar */}
          <div className="lg:col-span-1 bg-[#170f21] rounded-xl p-4 flex flex-col items-center">
            {/* Profile Section */}
            <div className="flex flex-col items-center w-full mb-4">
              <div className="relative w-[80px] h-[80px] rounded-full border-2 border-purple-500 overflow-hidden">
                <img
                  src="/photo/copyright.png"
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-[#e2aaff] font-bold mt-2 text-lg text-center">
                Shahriar Samir
              </h1>
              <p className="text-sm text-gray-400 text-center">WEB9-0906</p>
              <p className="text-sm text-gray-400 text-center">
                shabusiness035@gmail.com
              </p>
              <p className="text-sm text-gray-400 text-center">
                +8801311297872
              </p>

              {/* Profile Completion Bar */}
              <div className="w-full mt-2">
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>Complete your profile</span>
                  <span className="text-white">100%</span>
                </div>
                <div className="w-full h-1 bg-gray-700 rounded-full mt-1">
                  <div className="h-1 bg-purple-500 rounded-full w-full"></div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="w-full mt-3">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-purple-600 text-white"
                        : "text-gray-300 hover:bg-purple-500/10 hover:text-white"
                    }`
                  }
                >
                  {item.icon} {item.label}
                  {item.completed && (
                    <CheckCircle size={18} className="text-green-400 ml-auto" />
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-3 bg-[#170f21] rounded-xl p-4 h-fit">
            <Outlet />
          </div>
        </section>
      </CommonContainer>
      <Footer />
    </main>
  );
};

export default Samir;
