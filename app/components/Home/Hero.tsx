import React from "react";
import HeroImg from "@/public/images/Jobboard-img.png";
import Image from "next/image";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { TbSquareDot } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { FaBell } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gradient-to-r from-[#A8C76F] via-[#E2F0A5] to-[#FCF8C3]">
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[2rem] items-center">
          
          <div>
            <h1 className="text-[28px] sm:text-[35px] lg:text-[45px] xl:text-[60px] leading-[3rem] lg:leading-[4rem] font-extrabold text-gray-800">
              Got Talent? <br /> Meet Opportunity
            </h1>
            <p className="text-gray-800 mt-2 text-[16px] md:text-[18px] font-semibold">
              Company reviews, Salaries, Interviews, Jobs.
            </p>

            <div className="flex flex-col md:flex-row items-center bg-white shadow-md p-3 w-full max-w-xl mt-6 rounded-none md:rounded-full">
              <div className="flex items-center flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-300 w-full">
                <FaSearch className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title or keywords"
                  className="ml-2 w-full outline-none text-gray-600 placeholder-gray-400"
                />
              </div>

              <div className="flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-gray-300 w-full md:w-auto cursor-pointer">
                <FaMapMarkerAlt className="text-gray-400" />
                <span className="ml-2 text-gray-600">All Location</span>
              </div>

              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 w-full md:w-auto md:rounded-full">
                Search
              </button>
            </div>

            <p className="text-gray-500 mt-2 text-[14px] md:text-[16px]">Popular Searches:</p>
            <p className="text-gray-800 mt-2 text-[14px] md:text-[16px] font-semibold">
              Data Management, Marketing Manager, Customer Support
            </p>

            <div className="mt-24 items-center gap-4 text-gray-700">
              <span className="whitespace-nowrap">Trusted by leading brands and startups:</span>
              <div className="flex gap-6 mt-6">
                <div className="flex items-center gap-1">
                  <TbSquareDot className="text-2xl" />
                  <span className="font-bold">Square</span>
                </div>
                <div className="flex items-center gap-1">
                  <SiNotion className="text-2xl" />
                  <span className="font-bold">Notion</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaGithub className="text-2xl" />
                  <span className="font-bold">GitHub</span>
                </div>
              </div>
            </div>


          </div>

          <div className="hidden relative w-full lg:flex justify-center pt-[5rem] pb-[3rem]">
            <div className="relative w-[80%] max-w-[1200px] flex justify-center">
              <Image src={HeroImg} alt="Hero" width={700} height={400} className="relative z-0" />

              <div className="absolute top-6 left-6 bg-white shadow-lg px-4 py-2 rounded-full flex items-center gap-2 text-gray-800 text-sm font-semibold">
                <FaBell className="text-yellow-500" />
                <span>Job Alert Subscribe</span>
              </div>

              <div className="absolute bottom-6 right-6 bg-white shadow-lg px-4 py-2 rounded-full flex items-center gap-2 text-gray-800 text-sm font-semibold">
                <span>5k+ candidates got jobs</span>
                <div className="flex items-center -space-x-2">
                  <Image src="/images/user1.jpg" alt="User1" width={30} height={30} className="rounded-full border-2 border-white" />
                  <Image src="/images/user1.jpg" alt="User2" width={30} height={30} className="rounded-full border-2 border-white" />
                  <Image src="/images/user1.jpg" alt="User3" width={30} height={30} className="rounded-full border-2 border-white" />
                  <FaPlus className="text-green-300 text-[2px] bg-white rounded-full w-8 h-8 flex items-center justify-center border border-gray-300" />
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Hero;
