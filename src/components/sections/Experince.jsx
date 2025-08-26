import ExperienceCard from "../ui/ExperanceCard";

const Experience = () => {
  return (
    <div id="experience" className="w-full  bg-[#000319] flex flex-col  items-center pt-24 ">
      <div className="lg:text-[48px] md:text-[44px] text-[30px] font-bold">
        <span className="text-white">My </span>
        <span className="text-[#CBACF9]"> work experince </span>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-10 gap-6 pt-12 ">
        <ExperienceCard
          img="/src/assets/group1.svg"
          heading="Frontend Engineer Intern"
          para="Assisted in the development of a web-based platform using React.js, enhancing interactivity at Wyreflow Tech."
        />
        <ExperienceCard
          img="/src/assets/group2.svg"
          heading="Personal Projects"
          para="Independent developer building modern web apps. Expertise in full-stack development ecosystem."
        />
        <ExperienceCard
          img="/src/assets/group3.svg"
          heading="Lead Frontend Developer"
          para="Managed and led the frontend development team at Wireflow Technology, delivering user-centric solutions."
        />
        <ExperienceCard
          img="/src/assets/group4.svg"
          heading="Freelance Dev Project"
          para="I haven't taken on any freelance projects yet, but I'm genuinely excited and motivated to start contributing."
        />
      </div>
    </div>
  );
};

export default Experience;
