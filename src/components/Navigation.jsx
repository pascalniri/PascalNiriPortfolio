import React, { useState } from "react";
import { IoIosChatboxes } from "react-icons/io";
import { RiMenu5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-outfit text-white mx-auto px-4 md:px-10 md:max-w-7xl flex flex-col lg:flex-row gap-5 justify-center items-center p-5 w-full z-50">
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full border-2 border-[#141414] py-3 rounded-[15px] bg-black bg-opacity-30 backdrop-blur-md mx-auto">
        <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
          <a
            className="sm:order-1 flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
            href="/"
          >
            Pascal
          </a>
          <div className="sm:order-3 flex items-center gap-x-2">
            <button
              type="button"
              onClick={toggleMenu}
              className="sm:hidden relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              <RiMenu5Line className="text-[20px]" />
            </button>
            <a
              href="#_"
              className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-[#EB5D3B] rounded-[8px] hover:bg-white group"
            >
              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-200 transition-all border-white rounded-[8px]"></span>
              <span className="relative flex items-center gap-2 w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#EB5D3B] text-[15px]">
                Let's Talk
                <IoIosChatboxes className="text-[20px]" />
              </span>
            </a>
          </div>
          <div
            id="hs-navbar-alignment"
            className={`${isMenuOpen ? "block" : "hidden"} overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2`}
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
              <a
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-[#EB5D3B] dark:text-neutral-400"
                href="/"
              >
                Home
              </a>
              <a
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-[#EB5D3B] dark:text-neutral-400"
                href="/about"
              >
                About
              </a>
              <a
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-[#EB5D3B] dark:text-neutral-400"
                href="#"
              >
                Projects
              </a>
              <a
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-[#EB5D3B] dark:text-neutral-400"
                href="/services"
              >
                Services
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
