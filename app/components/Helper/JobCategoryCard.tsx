import Image from 'next/image';
import React from 'react'
interface Props {
    image: string;
    category: string;
    openPosition: string;
}

const JobCategoryCard = ({category, image, openPosition}: Props) => {
  return (
    <div className='p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10'>
      <div className="flex items-center space-x-4 ">
        <Image src={image} alt={category} width={60} height={60} />
        <div className="">
            <h1 className='text-[17px] font-semibold mb-[0.4rem]'>{category}</h1>
            <p className='text-[14px] font-semibold text-gray-600'>{(openPosition)} open Position</p>
        </div>
      </div>
    </div>
  )
}

export default JobCategoryCard
