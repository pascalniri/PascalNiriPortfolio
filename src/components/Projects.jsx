import React, { useState } from "react";
import { MdOutlineAdsClick } from "react-icons/md";
const projectsData = [
  {
    id: 1,
    title: "UI/UX Design",
    category: "Design",
    description: "UI/UX project description",
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web Development",
    description: "Web development project description",
  },
  {
    id: 3,
    title: "Contact Manager",
    category: "Design",
    description: "Contact management system",
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
        <p className="mt-2 text-[#7E7E7F] md:w-[60%]">
         Explore a selection of my featured projects, showcasing skills in
          design and development.
        </p> 

        {/* Tabs for project categories */}
        <div className="my-[3rem]">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            {["Show All", "Design", "Web Development"].map(
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
             <a href="#" className="hover:bg-black group relative">
             <div className="absolute rounded-tr-lg w-full h-full inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-opacity duration-300">
                <MdOutlineAdsClick className="text-white text-3xl opacity-0 group-hover:opacity-100 duration-300 hover:scale-125 transition hover:text-[#EB5D3B]" />
              </div>
             <img
                src="https://cdn.sanity.io/images/0mnqm898/production/c00bce58c817ec3a16945711111641d37320ae67-2240x1260.png"
                alt=""
                className="w-full h-auto rounded-t-lg"
              />
             </a>
              <div className="flex flex-col text-left p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-1">
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
