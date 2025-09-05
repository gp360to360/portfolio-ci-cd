import JobCard from "../ui/JobCard";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiPrisma, SiTurborepo, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiNestjs } from "react-icons/si";


const Projects = () => {
    return (
        <div id="projects" className=" w-full bg-[#000319]">
          <div className="flex justify-center items-center flex-col lg:pt-24 pt-12 ">
            <div className="text-center px-8 leading-8">
            <span className="lg:text-[48px] md:text-[44px] text-[30px] font-bold  text-white">A small selection of </span>
            <span className="text-[30px] md:text-[44px] lg:text-[48px] font-bold text-[#CBACF9] pl-3">recent projects</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 pt-16">

            <JobCard img="/src/assets/crtd.svg" 
             h1={"CRTD Technology Web Application"}
             p={"Developed and deployed a Web for CRTD Technology in MERN. Implemented backend in node-js, frontend using React, and database features using mongodb. Automated deployment on a VM using a CI/CD pipeline."}
             icon1={<FaReact size={24} color="38BDF8" />}
             icon2={<FaNodeJs size={24} color="ffffff" />}
             icon3={<SiMongodb size={24} color="00684A" />}
             icon4={<DiNodejs size={24} color="38BDF8" />}
             liveUrl="https://crtd.in/"
             />
            <JobCard img="/src/assets/Meal.svg" 
             h1={"Patient Food Management App"}
             p={"Developed Mealpe, a real-time patient food management app with a React.js frontend and a PostgreSQL database (TypeORM). The backend uses both HTTP and WebSockets for live data updates."}
             icon1={<RiNextjsFill size={24} color="FFFFFF" />}
             icon2={<BiLogoTypescript size={24} color="3178C6" />}
             icon3={<BiLogoPostgresql size={24} color="38BDF8" />}
             icon4={<SiNestjs size={24} color="#FF6B6B" />} 
             liveUrl="https://github.com/gp360to360/Hospital-Food-Management"
             />
            <JobCard img="/src/assets/brainly.svg" 
             h1={"Brainly - Knowledge Hub"}
             p={"Brainly organizes learning content (YouTube/Twitter) into personal knowledge bases. Features dashboard with stats, content management, and sharing. Built with React, TypeScript, Node.js. Shows full-stack skills."}
             icon1={<FaReact size={24} color="38BDF8" />}
             icon2={<BiLogoTypescript size={24} color="3178C6" />}
             icon3={<SiMongodb size={24} color="00684A" />}
             icon4={<SiExpress size={24} color="38BDF8" />} 
             liveUrl="https://github.com/chouhanrahul1999/paytm"
             />
            <JobCard img="/src/assets/Food.svg" 
             h1={"Tomato - Food Ordering App"}
             p={"Developed Tomato, a full-stack food ordering application using the MERN stack. It features a responsive frontend built with React, a Node.js/Express.js backend API, and a MongoDB database."}
             icon1={<FaReact size={24} color="38BDF8" />}
             icon2={<BiLogoTypescript size={24} color="3178C6" />}
             icon3={<SiMongodb size={24} color="00684A" />}
             icon4={<SiExpress size={24} color="38BDF8" />} 
             liveUrl="https://github.com/gp360to360/Tomato"
             />
            </div>
          </div>
        </div>
    )
}

export default Projects; 