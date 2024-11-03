import React from 'react'
import { IoIosChatboxes } from "react-icons/io";
const Chat = () => {
  return (
    <div className="mt-[30px] font-outfit text-white mx-auto px-4 md:px-10 md:max-w-7xl ">
    <div className="flex flex-col items-center text-center px-4 md:px-[40px] py-[50px] rounded-[25px] border-2 border-[#141414] bg-[#121214] w-full mx-auto">
    <h1 className="text-[25px] md:text-[30px] w-[80%] lg:w-[60%]">Are You Ready to kickstart your project with a touch of magic?</h1>
        <p className="mt-8 text-[#7E7E7F] md:w-[60%]">
        Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities to push the boundaries of design and deliver exceptional work.
        </p> 

        <a
            href="#_"
            className="relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-medium transition-all bg-[#EB5D3B] rounded-[8px] hover:bg-white group mt-10"
          >
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-200 transition-all border-white rounded-[8px]"></span>
            <span class="relative flex items-center gap-2 w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#EB5D3B] text-[15px]">

              Let's Talk
              <IoIosChatboxes className='text-[20px]'/>
            </span>
          </a>

    </div>
    
    <div className='my-10 text-center font-light text-[15px] px-10 gap-y-[20px] flex flex-col md:flex-row justify-between items-center text-[#7E7E7F]'>
             <p>Copyright @2024, <span className='text-[#EB5D3B]'>Pascal</span> All Rights Reserved.</p>
             <p>Inspired by the exceptional design of  <a href="https://wordpressboss.com/" target="_blank" className='text-[#EB5D3B]'>WORDPRESSBOSS</a>.</p>
          </div>
  </div>
  )
}

export default Chat
