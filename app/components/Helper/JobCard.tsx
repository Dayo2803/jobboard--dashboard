import React from 'react'
import { Job } from '@/data'
import Image from 'next/image';
import { FaMapLocation, FaRegBookmark } from 'react-icons/fa6';
import { BiMoney } from 'react-icons/bi';


interface Props {
    job: Job
}

const JobCard = ({job}: Props) => {
  return (
    <div className='p-4 mb-6 relative border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg  border-opacity-10'>
      <div className="flex items-center space-x-6">
        <div className="">
            <Image src={job?.image} alt={job.title} width={50} height={50} />
        </div>
        <div className="">
            <h1 className='text-[17px] font-semibold mb-[0.4rem]'>{job?.title}</h1>
            <div className="flex items-center md:space-x-10 space-x-4">
                <div className="flex items-center space-x-2">
                    <FaMapLocation className='w-[0.8rem] h-[0.8rem] text-green-400' />
                    <p className="text-[14px] text-gray-600 font-semibold">{job?.location}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <BiMoney className='w-[0.8rem] h-[0.8rem] text-pink-400' />
                    <p className="text-[14px] text-gray-600 font-semibold">{job?.salary}</p>
                </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 mt-[1rem]">
                <div className="text-[10px] text-gray-600 sm:text-[14px] px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-green-400">{job?.jobtype}</div>
                <div className="text-[10px] text-gray-600 sm:text-[14px] px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-red-400">Remote</div>
                <div className="text-[10px] text-gray-600 sm:text-[14px] px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-blue-400">Private</div>

            </div>
         </div>
      </div>
      <div className="absolute top-[1rem] right-[1rem]">
        <FaRegBookmark  className='w-[1rem] h-[1rem]'/>
      </div>
    </div>
  )
}

export default JobCard
