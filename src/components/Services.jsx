import React from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import { IoCodeSlash } from "react-icons/io5";
import { BsFillPhoneFill } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";
import Chat from "./Chat";

const Services = () => {
  return (
    <div className="font-outfit text-white mx-auto px-4 md:px-10 md:max-w-7xl flex flex-col gap-[3rem] justify-items-center p-5">
      <div className="bg-[#121214] border border-[#141414] flex flex-col justify-center items-center px-[2rem] py-[3rem] rounded-[25px]">
        <p className="text-[#5C5C5D]">Services</p>
        <h1 className="font-semibold text-[30px]">Quality Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[3rem]">
          <div className="text-[#CCCCCC] border border-[#2d2d2d] p-8 rounded-[15px] hover:border-[#EB5D3B] duration-300 transition group">
            <AiOutlineAntDesign className="text-[4rem] mb-5 group-hover:text-[#EB5D3B]" />
            <h2 className="text-[20px] font-medium mb-3">
              Intuitive User Interface Design
            </h2>
            <p className="font-light text-[14px] text-[#5C5C5D]">
              Craft visually appealing and user-friendly interfaces tailored to
              your brand's identity. From wireframes to polished designs, I
              ensure a seamless and engaging user experience.
            </p>
          </div>

          <div className="text-[#CCCCCC] border border-[#2d2d2d] p-8 rounded-[15px] hover:border-[#EB5D3B] duration-300 transition group">
            <IoCodeSlash className="text-[4rem] mb-5 group-hover:text-[#EB5D3B]" />
            <h2 className="text-[20px] font-medium mb-3">
              Frontend Development
            </h2>
            <p className="font-light text-[14px] text-[#5C5C5D]">
              Build responsive and high-performing websites using React.js and
              modern technologies. I specialize in translating designs into
              functional, interactive, and fast web applications.
            </p>
          </div>

          <div className="text-[#CCCCCC] border border-[#2d2d2d] p-8 rounded-[15px] hover:border-[#EB5D3B] duration-300 transition group">
            <BsFillPhoneFill className="text-[4rem] mb-5 group-hover:text-[#EB5D3B]" />
            <h2 className="text-[20px] font-medium mb-3">
              Usability Testing & Prototyping
            </h2>
            <p className="font-light text-[14px] text-[#5C5C5D]">
              Conduct thorough testing and create interactive prototypes to
              ensure your website or app meets user needs and goals, driving
              better engagement and satisfaction.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#121214] border border-[#141414] flex flex-col justify-center items-center px-[2rem] py-[3rem] rounded-[25px]">
        <p className="text-[#5C5C5D]">Pricing</p>
        <h1 className="font-semibold text-[30px]">Flexible Pricing Plan</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[3rem]">
          <div className="text-[#CCCCCC] border border-[#2d2d2d] p-3 rounded-[15px] w-full">
            <div className="border border-[#2d2d2d] rounded-[10px] w-full px-5 py-8">
              <h2 className="text-[25px]">Starter Plan</h2>
              <p className="font-light text-[14px] text-[#5C5C5D]">
                Get a responsive landing page with basic branding integration,
                perfect for starting your online presence. Delivered in just 5
                business days.
              </p>
              <h1 className="text-[#EB5D3B] font-semibold text-[35px] mt-5">$500 <span className="text-[#CCCCCC] text-[25px] font-normal">/month</span></h1>
            </div>

            <div className="w-full px-5 py-8">
            <span className="flex items-center gap-2 mt-2">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Basic landing page design
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Responsive website
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Basic branding integration (colors, fonts)
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Delivery in 5 business days
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2  text-[#5C5C5D]">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Advanced animations
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2  text-[#5C5C5D]">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Database integration
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2  text-[#5C5C5D]">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Post-launch support
              </p>
            </span>
            </div>

          </div>

          {/* PRO PLAN */}

          <div className="text-[#CCCCCC] border border-[#2d2d2d] p-3 rounded-[15px] w-full">
            <div className="border border-[#2d2d2d] rounded-[10px] w-full px-5 py-8">
              <h2 className="text-[25px]">Pro Plan</h2>
              <p className="font-light text-[14px] text-[#5C5C5D]">
              Elevate your brand with up to 5 custom pages, light animations, and usability testing for a seamless user experience. Delivered in 10 business days.
              </p>
              <h1 className="text-[#EB5D3B] font-semibold text-[35px] mt-5">$800 <span className="text-[#CCCCCC] text-[25px] font-normal">/month</span></h1>
            </div>

            <div className="w-full px-5 py-8">
            <span className="flex items-center gap-2 mt-2">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Multi-page UI/UX design (up to 5 pages)
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Responsive and optimized frontend development
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Light animations and interactions
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Basic usability testing and feedback
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Delivery in 10 business days
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2  text-[#5C5C5D]">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Custom API integration
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2  text-[#5C5C5D]">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Advanced analytics setup
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2  text-[#5C5C5D]">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Maintenance beyond delivery
              </p>
            </span>
            </div>

          </div>

          {/* PREMIUM PLAN */}

          <div className="text-[#CCCCCC] border border-[#2d2d2d] p-3 rounded-[15px] w-full">
            <div className="border border-[#2d2d2d] rounded-[10px] w-full px-5 py-8">
              <h2 className="text-[25px]">Pro Plan</h2>
              <p className="font-light text-[14px] text-[#5C5C5D]">
              Unlock the best with advanced animations, API integration, and 30 days of post-launch support. Perfect for complex, high-performance projects.              </p>
              <h1 className="text-[#EB5D3B] font-semibold text-[35px] mt-5">$1 200 <span className="text-[#CCCCCC] text-[25px] font-normal">/month</span></h1>
            </div>

            <div className="w-full px-5 py-8">
            <span className="flex items-center gap-2 mt-2">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Comprehensive UI/UX design for web or mobile apps
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Fully responsive and optimized frontend development
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Advanced animations and interactions (Framer Motion)
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              API and database integration
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Usability testing with detailed reporting
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              30 days of post-launch support
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2  text-[#5C5C5D]">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Marketing and SEO services
              </p>
            </span>
            <span className="flex items-center gap-2 mt-2  text-[#5C5C5D]">
            <TbPointFilled className="text-[20px] w-[5%]" />
              <p className="font-light text-[14px] w-full">
              Content creation (e.g., copywriting, images)
              </p>
            </span>
            </div>

          </div>
        </div>
      </div>
      <Chat />
    </div>
  );
};

export default Services;
