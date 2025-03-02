import React from "react";
import Image from "next/image";

const CandidateCategory = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 min-h-[50vh]">
      <div className="cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 bg-[#FCECE2] p-2 rounded-lg shadow-md w-60 md:w-1/3 flex flex-col items-center text-center">
        <Image
          src="/images/employers.jpg"
          alt="For Employers"
          width={150}
          height={120}
        />
        <h3 className="text-lg font-semibold text-gray-800 mt-3">For Employers</h3>
        <p className="text-gray-600 text-sm mt-1">
          Find professionals from around the world and across all skills.
        </p>
        <button className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
          Post jobs for Free
        </button>
      </div>

      <div className="cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 bg-[#FCECE2] p-2 rounded-lg shadow-md w-60 md:w-1/3 flex flex-col items-center text-center">
        <Image
          src="/images/candidates.gif"
          alt="For Candidates"
          width={150}
          height={120}
        />
        <h3 className="text-lg font-semibold text-gray-800 mt-3">For Candidates</h3>
        <p className="text-gray-600 text-sm mt-1">
          Build your professional profile, find new job opportunities.
        </p>
        <button className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
          Upload your CV
        </button>
      </div>
    </div>
  );
};

export default CandidateCategory;
