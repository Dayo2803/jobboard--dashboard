'use client'
import React from 'react'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'

interface Props {
    session: Session
}

const User = ({ session }: Props) => {
  return (
    <div onClick={()=>{
        signOut({callbackUrl: `${process.env.NEXT_PUBLIC_URL}/signup`})
    }} className="cursor-pointer">
      {session?.user?.image ? (
        <img
          src={session.user.image}
          alt="User"
          className="w-[50px] h-[50px] rounded-full"
        />
      ) : (
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-sm text-gray-600">User</span>
        </div>
      )}
    </div>
  )
}

export default User
