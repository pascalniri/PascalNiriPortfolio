import React, { useState } from "react";
import { MdOutlineAdsClick } from "react-icons/md";
const projectsData = [
  {
    id: 1,
    image: "/byen.svg",
    link:"https://www.byenetwork.org/",
    title: "UI/UX Design & Web Development",
    category: "Both",
    description: "Black Youth Empowerment Network",
  },
  {
    id: 2,
    image: "/Iduka.svg",
    title: "Figma Design",
    link:"https://www.figma.com/design/WCzH2bIvkfDw5RjTbDFA7K/Bihemu-project?node-id=0-1&t=ZLYLTrnp8vhhGPEv-1",
    category: "Design",
    description: "Iduka",
  },
  {
    id: 3,
    image: "/rapiam.png",
    title: "Figma Design & Web Development",
    link:"https://rapiam.vercel.app/",
    category: "Both",
    description: "Rise And Put Into Action Ministries",
  },
  {
    id: 4,
    image: "/byen.svg",
    link:"https://www.byenetwork.org/",
    title: "UI/UX Design & Web Development",
    category: "Web Development",
    description: "Black Youth Empowerment Network",
  },
  {
    id: 5,
    image: "/bk.png",
    link:"https://www.figma.com/proto/Mnprw4bEPGZXXaA3FSmaim/BK-appointment-platform?page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2&scaling=scale-down&content-scaling=fixed&t=0LCcVUUeR18fmmc9-1",
    title: "Interactive Figma Prototype",
    category: "Design",
    description: "Bank of Kigali Appointment Platform",
  },
  {
    id: 6,
    image: "/fami.png",
    link:"https://faami.vercel.app/",
    title: "Figma Prototype & Web Version",
    category: "Both",
    description: "FAMI (Find My ID)",
  },
  {
    id: 7,
    image: "/fami.png",
    link:"https://faami.vercel.app/",
    title: "Web Development",
    category: "Web Development",
    description: "FAMI (Find My ID)",
  },
  {
    id: 8,
    image: "/xticket.png",
    link:"https://www.figma.com/design/9yDK6wY83Irfk4XnSY8tgy/X-Ticket?node-id=0-1&t=y0Y19kKlzNn8lkW4-1",
    title: "Figma Design",
    category: "Design",
    description: "X-Ticket Platform",
  },
  
  
  // Add more projects as needed
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Show All");

  const filteredProjects =
    activeTab === "Show All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

  return (
    <div className="font-outfit text-white mx-auto px-4 md:px-10 md:max-w-7xl ">
      <div className="flex flex-col items-center text-center px-4 md:px-[40px] py-5 rounded-[25px] border-2 border-[#141414] bg-[#121214] w-full mx-auto">
        <h1 className="text-[25px] md:text-[30px]">My Projects & Works</h1>
        <p className="mt-2 font-light text-[14px] text-[#747474] md:w-[60%]">
         Explore a selection of my featured projects, showcasing skills in
          design and development.
        </p> 

        {/* Tabs for project categories */}
        <div className="my-[3rem]">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            {["Show All", "Design", "Web Development", "Both"].map(
              (tab) => (
                <li className="me-2 md:me-[2rem]" role="presentation" key={tab}>
                  <button
                    className={`inline-block p-2 border-b-2 rounded-t-lg ${
                      activeTab === tab ? "border-[#EB5D3B] text-[#EB5D3B]" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Display project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredProjects.map((project) => (
            <div key={project.id} className="relative border border-[#333333] rounded-lg">
             <a href={project.link} target="_blank" className="hover:bg-black group relative">
             <div className="absolute rounded-tr-lg w-full h-full inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-opacity duration-300">
                <MdOutlineAdsClick className="text-white text-3xl opacity-0 group-hover:opacity-100 duration-300 hover:scale-125 transition hover:text-[#EB5D3B]" />
              </div>
             <img
                src={project.image}
                alt=""
                className="w-full h-auto rounded-t-lg"
              />
             </a>
              <div className="flex flex-col text-left p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="font-light text-[14px] text-[#747474] mt-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
