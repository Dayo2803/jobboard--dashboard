'use client';
import React from 'react';
import Image from 'next/image';
import {signIn} from "next-auth/react";

const SignUp = () => {
  return (
    <div className='overflow-hidden h-[84vh] flex flex-col items-center justify-center'>
      <Image 
        src="/images/chair.jpg" 
        alt="Chair Image" 
        width={400} 
        height={200}
      />

      <button onClick={() =>{signIn("google",{ callbackUrl: process.env.NEXT_PUBLIC_URL})}} className='px-12 py-3 mt-[2rem] bg-green-400 hover:bg-green-600 text-white transition-all duration-300 rounded-lg text-s'>Sign Up Now</button>
    </div>
  );
};

export default SignUp;
