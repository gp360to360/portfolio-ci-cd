const ExperienceCard = ({ img, heading, para }) => {
  return (
    <div className="md:h-[190px] md:w-[585px] xl:w-[585px] lg:w-[470px] mt-4 bg-[#161935] rounded-t-3xl rounded-l-2xl rounded-br-2xl flex justify-start border  ">
      <div className="md:h-[190px] md:w-[590px] w-[90vw] mt-2 ml-0 border border-[#363749] rounded-2xl bg-linear-to-tr from-[#04071D] to-[#0C0E23] flex md:flex-row flex-col justify-between md:px-10 px-6 py-4 md:gap-6 gap-4 items-center ">
        <div className="md:h-[120px] md:w-[120px] flex items-center justify-start md:justify-center ">
          <img src={img} alt="Job" />
        </div>
        <div>
            <h1 className="text-white font-bold md:text-[26px] text-[20px] pb-2">{heading}</h1>
            <p className="text-[#BEC1DD] font-medium md:text[16px] text[14px]">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
