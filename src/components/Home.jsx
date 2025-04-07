import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import ReactGA from "react-ga4";

const Home = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/home" });
  }, []);
  return (
    <div className="font-outfit text-white mx-auto px-4 md:px-10 md:max-w-7xl flex flex-col lg:flex-row gap-5 justify-items-center p-5">
      <div className="flex flex-col justify-center items-center text-center p-[40px] rounded-[25px] border-2 border-[#141414] w-full lg:w-[50%] bg-[#121214]">
        <img
          src="/profile.jpg"
          alt=""
          className="rounded-full h-auto border-4 border-[#EB5D3B]"
        />
        <h1 className="mt-10 text-[25px] md:text-[30px]">Pascal Niri</h1>
        <p className="mt-2 font-light text-[14px] text-[#747474]">
          I am a UI/UX Designer and Front-end Developer based in Kigali, Rwanda.
        </p>
        <div className="flex flex-row gap-5 mt-8">
          <a href="https://github.com/pascalniri" target="_blank" className="border border-gray-500 p-2 text-[20px] hover:text-[#EB5D3B] cursor-pointer duration-200  rounded-[7px]">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pascal-niringiyimana-59a324295/" target="_blank" className="border border-gray-500 p-2 text-[20px] hover:text-[#EB5D3B] cursor-pointer duration-200 rounded-[7px]">
            <FaLinkedinIn />
          </a>
          <a href="https://x.com/pascalniri" target="_blank" className="border border-gray-500 p-2 text-[20px] hover:text-[#EB5D3B] cursor-pointer duration-200 rounded-[7px]">
            <FaXTwitter />
          </a>
        </div>
      </div>

      <div className="grid grid-cols- gap-5 justify-items-center w-full">
        <div className="rounded-[25px] border border-[#141414] px-4 md:px-[40px] py-[20px] bg-[#121214] w-full h-full flex flex-col justify-center items-start">
          <p className="font-light text-[14px] text-[#747474]">Hello There!</p>
          <h1 className="text-[25px] md:text-[30px] leading-[2.5rem] mt-4">
            I'm <span className="text-[#EB5D3B] font-semibold">Pascal Niri</span>, a UI/UX Designer and Frontend Developer crafting intuitive and visually stunning digital experiences.
          </h1>
          <span className="flex items-center gap-3 mt-5">
            <BsFillEmojiHeartEyesFill className="text-[#00FF00]" />
            <p className="font-light text-[14px] text-[#747474]">Available for work</p>
          </span>
          <a
            href="/Resume-Pascal-Niringiyimana.pdf"
            download="Resume-Pascal-Niringiyimana"
            className="relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-medium transition-all bg-[#EB5D3B] rounded-[8px] hover:bg-white group mt-10"
          >
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-200 transition-all border-white rounded-[8px]"></span>
            <span class="relative flex items-center gap-2 w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#EB5D3B] text-[15px]">
              DOWNLOAD MY CV
              <MdDownload className='text-[25px]'/>

            </span>
          </a>
        </div>
        <div className="rounded-[25px] border border-[#141414] px-4 md:px-[40px] py-[20px] bg-[#121214] w-full h-full">
          <h1 className="text-[20px] md:text-[25px]">Company I Worked With</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
