import React from "react";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { IoIosChatboxes } from "react-icons/io";
import EduAndExpe from "../components/EduAndExpe"
const About = () => {
  return (
   <div>
     <div className="font-outfit text-white mx-auto px-4 md:px-10 md:max-w-7xl flex flex-col lg:flex-row gap-5 justify-items-center p-5">
      <div className="flex flex-col justify-center items-center text-center p-[40px] rounded-[25px] border-2 border-[#141414] w-full lg:w-[50%] bg-[#121214]">
        <img
          src="/profile.jpg"
          alt=""
          className="rounded-full h-auto"
        />
      </div>

      <div className="grid grid-cols- gap-5 justify-items-center w-full">
        <div className="rounded-[25px] border border-[#141414] px-4 md:px-[40px] py-[20px] bg-[#121214] w-full h-full flex flex-col justify-center items-start">
          <p className="text-[#7E7E7F]">Hello There!</p>
          <h1 className="text-[25px] md:text-[30px] leading-[2.5rem] mt-4">
            I'm{" "}
            <span className="text-[#EB5D3B] font-semibold">Pascal Niri</span>, a
            product designer crafting user-centric design with pixel-perfect
            precision.
          </h1>
          <span className="flex items-center gap-3 mt-5">
            <p className="text-[#7E7E7F]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              animi atque omnis delectus! Impedit iste nam magnam sunt, sapiente
              aut odio dicta pariatur aspernatur dolore aperiam repellat
              architecto maiores officia.
            </p>
          </span>
          <a
            href="#_"
            className="relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-medium transition-all bg-[#EB5D3B] rounded-[8px] hover:bg-white group mt-10"
          >
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-200 transition-all border-white rounded-[8px]"></span>
            <span class="relative flex items-center gap-2 w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#EB5D3B] text-[15px]">
              Get In touch
              <IoIosChatboxes className="text-[20px]" />
            </span>
          </a>
        </div>
      </div>
    </div>
          <EduAndExpe />
   </div>

  );
};

export default About;
