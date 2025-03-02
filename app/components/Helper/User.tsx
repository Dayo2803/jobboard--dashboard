'use client'
import React from 'react'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Image from "next/image";
import UserImg from "@/public/images/user1.jpg";


interface Props {
    session: Session
}

const User = ({ session }: Props) => {
  return (
    <div onClick={()=>{
        signOut({callbackUrl: `${process.env.NEXT_PUBLIC_URL}/signup`})
    }} className="cursor-pointer">
      {session?.user?.image ? (
        <Image src={UserImg} alt="User" width={50} height={50} className="rounded-full" />

      ) : (
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-sm text-gray-600">User</span>
        </div>
      )}
    </div>
  )
}

export default User
