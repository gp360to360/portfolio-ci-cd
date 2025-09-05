import { Copy } from "lucide-react";
import { useState } from "react";

function CopyInput({ email }) {
  const [copied, setCopied] = useState(false);
  const [showValue, setShowValue] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setShowValue(false);
    setTimeout(() => {
      setCopied(false);
      setShowValue(true);
    }, 1500);
  };

  return (
    <input
      type="text"
      readOnly
      value={showValue ? email : ""}
      onClick={handleCopy}
      placeholder={copied ? "Copied!" : "Copy my email address"}
      className="font-medium text-[14px] text-center text-white border border-[#272A3C]  p-2 rounded-md bg-[#06091F] ml-6 w-60 pl-8  "
      style={{ caretColor: "transparent" }}
    />
  );
}

const About = () => {
  return (
    <div id="about" className="  w-full bg-[#000319]">
      <div className="bg-[url('/src/assets/grid-pattern.svg')] bg-cover bg-center bg-no-repeat  w-full h-full">
        <div className="flex flex-col sm:flex-col lg:flex-row justify-center items-center lg:gap-8 gap-4 lg:pt-16 pt-24 lg:">
          <div className="border-[#363749] border relative bg-[url('/src/assets/image.svg')] bg-cover bg-center bg-no-repeat xl:w-[689px] lg:w-[512px] w-[90vw] h-[312px] md:h-[412px] lg:max-h-[540px] lg:min-h-[510px] rounded-3xl text-white text-[20px] md:text-[36px] lg:text-[32px] font-bold flex justify-start items-end pl-4 pr-16 xl:pl-10 lg:pl-8 lg:pr-56 leading-tight pb-6 lg:pb-12 ">
            <span>
              I prioritize client collaboration, fostering open communication
            </span>
            {/* Gradient overlay at the bottom */}
            <div className="absolute left-0 bottom-0 w-full h-36 rounded-b-3xl pointer-events-none bg-gradient-to-t from-[#000319] to-transparent" />
          </div>
          <div className="flex flex-col justify-center items-center lg:flex-col gap-6 lg:gap-6 lg:justify-center">
            <div className="bg-gradient-to-r from-[#04071D] to-[#0C0E23] opacity-90 border border-[#363749] xl:w-[521px] lg:w-[432px] w-[90vw] lg:h-[245px] md:h-[330px] h-[195px] rounded-3xl overflow-hidden ">
              <div className="text-white text-3xl text-[20px] md:text-[30px] xl:text-[30px] lg:text-[26px] text-center pt-8 pb-1 md:pt-12 md:pb-8 lg:pb-1 px-12 font-bold flex justify-start items-center">
                I'm flexible with time‑zone communication
              </div>
              <div className="bg-[url('/src/assets/Pagination.svg')] bg-cover bg-clip-border bg-no-repeat xl:w-[501px] lg:w-[480px]  w-[90vw] xl:h-[120px] lg:h-[130px] md:h-[205px] h-[100px] rounded-2xl flex flex-col justify-between items-start "></div>
            </div>
            <div className="bg-[url('/src/assets/box-type.svg')] bg-cover bg-center bg-no-repeat border border-[#363749] xl:w-[521px] lg:w-[432px] w-[90vw] md:h-[330px]  lg:h-[245px] h-[195px] rounded-3xl flex justify-center lg:pl-6 md:pl-6 pl-4 flex-col">
              <div className="text-[#C1C2D3] text-[10px] md:text-[14px] lg:text-[16px] font-normal">
                I constantly try to improve
              </div>
              <div className="text-white lg:text-[34px] md:text-[30px] text-[20px] font-bold">
                My tech stack
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10 gap-6 mt-6 lg:mt-12 lg: ">
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="bg-gradient-to-r from-[#04071D] to-[#0C0E23] opacity-90 border border-[#363749] lg:w-[340px] xl:w-[370px] w-[90vw] h-[185px] rounded-3xl overflow-hidden ">
              <div className="bg-[url('/src/assets/box4.svg')] bg-cover bg-center bg-no-repeat  lg:w-[370px]  md:w-[100vw] w-[100vw] h-[185px] md:h-[200px] rounded-3xl overflow-hidden font-bold text-[24px] lg:text-[24px] md:text-[32px] text-white pl-6 pr-15 pt-6 lg:p-6">
                {" "}
                Tech enthusiast with a passion for development.
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#04071D] to-[#0C0E23] opacity-90 border border-[#363749] lg:w-[340px] xl:w-[370px] w-[90vw] h-[185px] rounded-3xl overflow-hidden ">
              <div className="bg-[url('/src/assets/box5.svg')] bg-cover bg-center bg-no-repeat  lg:w-[340px] xl:w-[370px] md:w-[100vw] w-[100vw] h-[185px] rounded-3xl md:h-[200px] overflow-hidden pl-4 pr-14 lg:p-10 flex flex-col justify-center items-start lg:items-center">
                <div className="font-bold lg:text-[24px] text-[24px] md:text-[28px] text-white md:text-center text-center  md:pl-0 pb-2">
                  Do you want to start a project with me?
                </div>
                <div className="relative pb-4 w-full">
                  <span className="absolute left-9 top-1/2 -translate-y-3/3 pointer-events-none">
                    <Copy className="w-4 h-4 text-[#C1C2D3]" />
                  </span>
                  <CopyInput email="gyanpra360@gmail.com" />
                </div>
              </div>
            </div>
          </div>
          <div className=" border-[#363749] border relative bg-[url('/src/assets/box6.svg')] bg-cover bg-center bg-no-repeat xl:w-[835px] lg:w-[600px] w-[90vw] lg:h-[390px] h-[180px] md:h-[200px] rounded-3xl text-white  flex justify-center flex-col xl:pl-12 lg:pl-8 pl-4  ">
            <span className="pb-2 font-normal lg:text-[14px] md:text-[14px] text-[10px} lg:tracking-widest text-[#E4ECFF]">THE INSIDE SCOOP</span>
            <span className="lg:text-[32px] md:text-[26px] text-[20px] font-bold leading-tight">Currently building a <br />job‑search platform <br /> for freshers</span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
