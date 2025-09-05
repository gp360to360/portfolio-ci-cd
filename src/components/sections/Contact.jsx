import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="h-fit w-full bg-[#000319]">
      <div className="bg-[url('/src/assets/grid2.svg')] bg-cover bg-center bg-no-repeat h-full w-full flex flex-col items-center gap-4">
        <div className="font-bold md:text-[48px] text-[36px] text-white md:max-w-4xl px-4 md:pt-40 pt-24 text-center md:leading-14 leading-10 ">
          <span>Ready to take</span><span className="text-[#CBACF9]"> your</span><span> digital presence to the next level?</span>
        </div>
        <div className="font-medium text-[16px] text-white text-center px-6 py-2">
          Reach out today and let’s discuss how I can help you achieve your goals.
        </div >
        <a 
          href="mailto:gyanpra360@gmail.com?subject=Portfolio Inquiry&body=Hi Rahul, I'd like to discuss a project with you."
          className="flex justify-center items-center gap-2 text-[18px] px-12 mt-4 py-4 border border-[#272A3C]  bg-gradient-to-r from-[#161A31] to-[#06091F] text-white font-semibold rounded-xl shadow-md h-16 w-auto mb-20 md:mb-28 hover:from-[#1a1f3a] hover:to-[#0a0d25] transition-all duration-300"
        >
          Contact Me Now{" "}
          <span>
            <ArrowUpRight />
          </span>
        </a>
        <div className="flex flex-col-reverse md:flex-row gap-4 mt-auto w-full justify-between px-16 pb-8   items-center">
          <div className="text-white md:pt-0 pt-4 text-[14px]">Copyright ©2025 Gyanendra Prajapati</div>
          <div className="flex gap-2 flex-row ">
            <a href="https://github.com/gp360to360" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-radial from- from-40% to-[#161A31] backdrop-blur-sm border border-[#272A3C]/50 rounded-xl flex items-center justify-center hover:bg-[#05041F]/90 transition-all duration-300 shadow-lg">
              <FaGithub size={18} color="white" />
            </a>
            {/* <a href="https://instagram.com/gyan_pra06" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-radial from- from-40% to-[#161A31] backdrop-blur-sm border border-[#272A3C]/50 rounded-xl flex items-center justify-center hover:bg-[#05041F]/90 transition-all duration-300 shadow-lg">
              <FaInstagram size={18} color="white" />
            </a> */}
            <a href="https://www.linkedin.com/in/gyanendra-p/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-radial from- from-40% to-[#161A31] backdrop-blur-sm border border-[#272A3C]/50 rounded-xl flex items-center justify-center hover:bg-[#05041F]/90 transition-all duration-300 shadow-lg">
              <FaLinkedin size={18} color="white" />
            </a>
            <a href="https://twitter.com/Code_gone" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-radial from- from-40% to-[#161A31] backdrop-blur-sm border border-[#272A3]/50 rounded-xl flex items-center justify-center hover:bg-[#05041F]/90 transition-all duration-300 shadow-lg">
              <FaTwitter size={18} color="white" />
            </a>
            <a href="https://wa.me/+918827475996" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-radial from- from-40% to-[#161A31] backdrop-blur-sm border border-[#272A3C]/50 rounded-xl flex items-center justify-center hover:bg-[#05041F]/90 transition-all duration-300 shadow-lg">
            
              <FaWhatsapp size={18} color="white" />
            </a>   
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Contact;
