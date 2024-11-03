import React from "react";
import { MdWork } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
const About = () => {
  const experiences = [
    {
      id: 1,
      company: "Sangwa's Technical Resources",
      year: "2023 - Present",
      site: "https://www.sangwas.com/",
      role:"Front-end Developer and UI/UX Designer Specialist ",
      roleInfo: "I serve as a dedicated Software Engineer and UI/UX Developer, focusing on creating exceptional digital experiences. My role involves merging technical proficiency with creative design to deliver high-quality software solutions that meet user needs and exceed expectations.",
    },
    {
      id: 2,
      company: "CodetyHub",
      year: "Oct 2023 - Present",
      site: "https://www.codetyhub.com/",
      role:"Software Engineering Apprenticeship",
      roleInfo: "In my role as a Junior Learning Software Engineer in Cohort 1, I thrive on the opportunity to build micro-projects that not only demonstrate my proficiency but also contribute positively to the team's objectives. My dedication to mastering frontend development ensures that every project I undertake reflects precision and excellence.",
    },
    {
      id: 3,
      company: "kLab.rw",
      year: "Nov 2023 - Feb 2024",
      site: "https://klab.rw/",
      role:"Software Engineering Trainee ",
      roleInfo: "At KLAB High School's leavers program, I was engaged in frontend engineering training with React and backend engineering with Node.js. As a frontend-heavy developer, my work involved building the frontend interfaces for our program's micro-projects and collaborating with UI/UX designers to achieve proper pixel-perfect implementations.",
    },
    {
      id: 4,
      company: "Upwork",
      year: "Feb 2022 - Aug 2023",
      site: "https://www.upwork.com/",
      role:"Freelancer Software Engineer",
      roleInfo: "As a free-lancing software engineer, my work is to work on client's application with HTML, CSS and Javascript",
    },
  ];

  const educations = [
    {
      id:1,
      school:"African Leadership University (ALU).",
      year:"2024 - 2028",
      degree:"Bachelor Degree of Entrepreneurial Leadership.",
      site:"http://www.alueducation.com"
    },
    {
      id:2,
      school:"freeCodeCamp.",
      year:"2022 - 2023",
      degree:"Bachelor Degree of Spftware Engineering.",
      site:"https://www.freecodecamp.org"
    },
    {
      id:3,
      school:"Great Learning.",
      year:"2023 - 2024",
      degree:"Bachelor of Fine Arts in Graphic Design with a concentration in UI/UX Design.",
      site:"https://www.mygreatlearning.com/"
    },
    {
      id:4,
      school:"Le Wagon.",
      year:"2024 - 2025",
      degree:"Bachelor Degree in UI/UX Design.",
      site:"https://www.lewagon.com"
    },
  ];
  return (
    <div className="font-outfit text-white mx-auto px-4 md:px-10 md:max-w-7xl flex flex-col lg:flex-row gap-5 justify-start items-start p-5">
      <div className="grid grid-cols- gap-5 justify-items-center w-full">
        <div className="rounded-[25px] border border-[#141414] px-4 md:px-[40px] py-[20px] bg-[#121214] w-full h-full flex flex-col justify-center items-start">
          <h1 className="text-[25px] md:text-[30px] leading-[2.5rem] mt-4 text-[#EB5D3B] font-semibold">
            EXPERIENCE
          </h1>
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="flex items-center justify-start gap-3 mt-2 text-[#7E7E7F]"
            >
              <span className="flex flex-row gap-5 mt-8">
                <span className="">
                  <MdWork className="text-[40px] text-[#EB5D3B] bg-white p-2 rounded-[10px]" />
                </span>
                <span>
                    <h1 className="font-semibold text-[20px] text-white">{experience.role}</h1>
                    <a href={experience.site} target="_blank" className=" hover:text-white text-[#EB5D3B] transition">
                      {experience.company}
                    </a>

                  <p>{experience.year}</p>

                  <p className="mt-4">{experience.roleInfo}</p>
                  <hr className=" mt-8 w-full border-[#333333]" />
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols- gap-5 justify-items-center w-full">
        <div className="rounded-[25px] border border-[#141414] px-4 md:px-[40px] py-[20px] bg-[#121214] w-full h-full flex flex-col justify-center items-start">
          <h1 className="text-[25px] md:text-[30px] leading-[2.5rem] mt-4 text-[#EB5D3B] font-semibold">
            EDUCATION
          </h1>
          {educations.map((education) => (
            <div
              key={education.id}
              className="flex items-center justify-start gap-3 mt-2 text-[#7E7E7F]"
            >
              <span className="flex flex-row gap-5 mt-8">
                <span className="">
                  <IoSchool className="text-[40px] text-[#EB5D3B] bg-white p-2 rounded-[10px]" />
                </span>
                <span>
                    <h1 className="font-semibold text-[20px] text-white">{education.degree}</h1>
                    <a href={education.site} target="_blank" className=" hover:text-white text-[#EB5D3B] transition">
                      {education.school}
                    </a>
                  <p>{education.year}</p>
                  <hr className=" mt-8 w-full border-[#333333]" />
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
